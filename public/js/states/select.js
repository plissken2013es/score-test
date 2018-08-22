$.select = function (_l) {
    document.getElementById('game').classList.add("blurMe");

    var customContainer = document.getElementById('overlay');
    var levelNum = _l || Math.min($.gameProgress.data.scores.length, $.level.length - 1);
    var ghostPath = [];

    var levelName = document.createElement('div');

    var mid = document.createElement('div');
    mid.style.position = "relative";
    mid.style.top = "20%";

    levelName.classList.add('bigText');
    levelName.innerText = "Level " + levelNum + " Leaderboard";
    mid.appendChild(levelName);


    var scoreBoardType = "online";

    lB = document.createElement('div');
    lB.classList.add('bigText', 'links');
    lB.innerHTML = "Local / <b>Online</b> ";
    lB.addEventListener('click', function () { if (scoreBoardType == "online") { scoreBoardType = "local"; changeLevel(); } else { scoreBoardType = "online"; changeLevel(); } });
    mid.appendChild(lB);

    var prev = document.createElement('div');
    prev.innerText = "<";
    prev.classList.add('links', 'leftArrow');
    prev.addEventListener('click', function () { if (levelNum > 0) { levelNum--; $.state.buildLevel(levelNum); }; changeLevel(); });
    customContainer.appendChild(prev);


    var Scores = document.createElement('div');
    Scores.classList.add('leader');
    Scores.innerHTML = "";
    mid.appendChild(Scores);

    var Next = document.createElement('div');
    Next.innerText = ">";
    Next.classList.add('links', 'rightArrow');
    Next.addEventListener('click', function () { 
        if (levelNum < $.level.length - 1 && $.gameProgress.data.scores.length > levelNum) { levelNum++; $.state.buildLevel(levelNum); }; changeLevel(); 
    });
    customContainer.appendChild(Next);

    var Play = document.createElement('div');
    Play.classList.add('bigText', 'links');
    Play.innerHTML = "Play";
    Play.addEventListener('click', function () { $.playSound($.sounds['bounce3']); $.playSound($.sounds['bounce2']); document.getElementById('game').classList.remove("blurMe"); customContainer.innerHTML = ""; $.state.start(levelNum); });
    mid.appendChild(Play);

    if (window.AudioContext) {
        var sound = document.createElement('div');
        sound.classList.add('bigText', 'bottomRight', 'links');
        sound.innerText = "sound: " + ($.mute ? "OFF" : "ON");
        sound.addEventListener('click', function () {
            if (this.innerText == "sound: OFF") {
                this.innerText = "sound: ON"; $.mute = 0;
            }
            else { this.innerText = "sound: OFF"; $.mute = 1; }
        });
        customContainer.appendChild(sound);
    }

    var gl = document.createElement('div');
    gl.classList.add('bigText', 'bottomLeft', 'links');
    gl.innerText = "Glitch: " + ($.glitch ? $.glitch : "OFF");
    gl.addEventListener('click', function () {
        $.glitch += 1;
        if ($.glitch < $.glitchType.length + 1) {
            this.innerText = "Glitch: " + $.glitch;
            document.getElementById('cont').style.animation = $.glitchType[$.glitch - 1] + " 15s infinite alternate-reverse";
        }
        else { this.innerText = "Glitch: OFF"; $.glitch = 0; document.getElementById('cont').style.animation = ""; }
    });
    customContainer.appendChild(gl);

    customContainer.appendChild(mid);


    var buildScoreBoard = function (data) {
        Scores.innerHTML = "";
        for (var i = 0; i < 5; i++) {
            if (data[i]) {
                Scores.innerHTML += "<li><span class='list_num'>" + (i + 1) + "</span><h2>" + data[i].n + "<span class='number'>" + data[i].s + "</span></h2></li>";
            }
            else {
                Scores.innerHTML += "<li><span class='list_num'>" + (i + 1) + "</span><h2>default user<span class='number'>99999.9</span></h2></li>";
            }
        }
    }


    var changeLevel = function () {

        levelName.innerHTML = "Level " + levelNum + " Leaderboard";
        ghostPath = [];
        $.database.ref('ghosts/'+levelNum).once('value').then(function(snapshot) {
            ghostPath = snapshot.val();
        });

        Scores.innerHTML = "Loading...";

        $.database.ref('scores/'+levelNum).once('value').then(function(snapshot) {
            var currScores = snapshot.val();
            //ghostPath = [];//data.g;
            if (scoreBoardType == "online") {
                lB.innerHTML = "Local / <b>Online</b>";
                buildScoreBoard(currScores || []);
            }
           // datacont.innerHTML = scores[0].name + " - " + scores[0].score;
        });
/*
        $.socket.emit("score list", levelNum, function (data) {
            ghostPath = data.g;
            if (scoreBoardType == "online") {
                lB.innerHTML = "Local / <b>Online</b>";
                buildScoreBoard(data.h || []);
            }
        }
        );
*/
        if (scoreBoardType != "online") {
            lB.innerHTML = "<b>Local</b> / Online";
            buildScoreBoard($.gameProgress.data.scores[levelNum] || []);
        }
    }


    this.init = function () {
        $.state.buildLevel(levelNum);
        changeLevel();
    }

    this.ghost = function () {
        return ghostPath;
    }

}