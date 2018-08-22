$.play = function (l) {
    var customContainer = document.getElementById('my-gui-container');
    var timer = "0.00";//document.getElementById('timer');

    var selecter = new $.select();

    $.myplayer = new $.player();

    var currentLevel = l || 0;
    this.path = [];

    var lastMove = { x: 0, y: 0 };

    //  $.offset = { x: -($.myplayer.x - ($.W) / 2), y: -($.myplayer.y - ($.H / 2.5)) };

    var status = false;
    var currFrame = 0;
    var blocks = [];
    var song;
    var ghost;
  //  var coderEnemy = new $.coder().render();

    this.init = function () {
        selecter.init();
    }

    this.buildLevel = function (_i, _g) {
        /////build level////////
        this.destroy();
        var l = _i;
        currentLevel = l;
        var levelInfo = $.level[l].b;
        for (var i = 0; i < levelInfo.length; i++) {
            blocks.push(new $.block(levelInfo[i]));
        }
        $.myplayer.x = $.level[l].p.x;//add this to reset?
        $.myplayer.y = $.level[l].p.y;//add this to reset?
        /////////////////////////////////
        $.myplayer.reset();

        $.offset = { x: (($.W / 2) - $.myplayer.x), y: (($.H / 2.5) - $.myplayer.y) };

    }

    this.start = function (l) {
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].transition();

        }
        $.elapsed = 0;
        currFrame = 0;

        status = true;

       // song = $.playSound($.songs['a'], true);

        //build play menu///////   if (song) { song.stop(); }
        customContainer.innerHTML = "";
        var pause = document.createElement('div');
        pause.innerText = "||";
        pause.addEventListener('click', function () {
            $.myplayer.addAnim(); $.state.clearTuts();
            status = false; customContainer.innerHTML = ""; $.state.showSelecter();
        });
        customContainer.appendChild(pause);
        //////////////////////////////

        //start tutorial if needed////////////////
        if ($.tutorial.length > l) {
            $.util.popChat(window.innerWidth / 2, ($.H / 2.5)-25, $.tutorial[l], 'tut');
        }
        ///////////////////////////////////////

        ghost = new $.ghost(selecter.ghost(), $.myplayer.x, $.myplayer.y);

    }

    this.showSelecter = function () {
        selecter = new $.select(Math.min(currentLevel, $.level.length - 1));
        selecter.init();
    }


    this.destroy = function () {
        status = false;
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].kill();

        }
        blocks = [];
        this.path = [];

        this.clearTuts();

        customContainer.innerHTML = "";

       // if (song) { song.stop(); }

    }

    this.clearTuts = function () {
        var removeNotes = document.getElementsByClassName("note tut");
        i = removeNotes.length; while (i--) {
            document.body.removeChild(removeNotes[i]);
        };
    }

    this.nextLevel = function () {
        status = false;// stop the timer and updating
        //  if (song) { song.stop(); }

        this.clearTuts();//clear tuts on success

        customContainer.innerHTML = "";//don't allow pausing

        this.path.splice(0, 1);
        $.gameProgress.saveScore(currentLevel, $.elapsed.toFixed(2));
        $.onlineNewScore(currentLevel, { n: $.gameProgress.data.user||"no name mcgee", s: $.elapsed.toFixed(2) }, this.path);
       // $.socket.emit("new score", { n: $.gameProgress.data.user||"no name mcgee", l: currentLevel, s: $.elapsed.toFixed(2) }, this.path);
        //   this.path = [];

        currentLevel += 1;
    }

    this.status = function () {
        return status;
    }

    this.update = function () {
        if (status) {
            timer = $.elapsed.toFixed(2);
            // $.replaceHTML(document.getElementById('timer'), $.elapsed.toFixed(2));
            //   timer.innerHTML = $.elapsed.toFixed(2);
            $.myplayer.update(blocks);
            currFrame += 1;

            $.offset = { x: (($.W / 2) - $.myplayer.x), y: (($.H / 2.5) - $.myplayer.y) };
               ghost.update();
            if (lastMove && (Math.round(lastMove.x) != Math.round($.offset.x) || Math.round(lastMove.y) != Math.round($.offset.y))) {
                this.path.push({ f: currFrame, x: $.offset.x - lastMove.x, y: $.offset.y - lastMove.y });
            }
            lastMove = $.offset;

            if ($.key.enter) {
                $.state.destroy();
                $.state.buildLevel(currentLevel, selecter.ghost());
                $.state.start(currentLevel);
            }
        }
    }

    this.render = function () {
        if (ghost) { ghost.render(); }
        i = blocks.length; while (i--) { blocks[i].render(); };
        //   coderEnemy.render();
        $.mainctx.fillStyle = "white";
        $.mainctx.font = "50px 'Open Sans', sans-serif";
        $.mainctx.fillText(timer, ($.W / 2)-50 , 50);

    }
    //selecter.init();
}