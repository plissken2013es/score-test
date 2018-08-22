
$.block = function (opt) {
    for (var e in $.blockBehaviors[$.blocks[opt.t].id]) {
        this[e] = $.blockBehaviors[$.blocks[opt.t].id][e];
    }
    for (var e in opt) {  //level defs will over right defaults in block behaviors
        this[e] = opt[e];
    }

    this.add = this.add || function () { };
    this.style = this.style || "cube";
    this.init = this.init || function () { };
    this.x = this.x || 100;
    this.y = this.y || 100;

    this.w = this.w || 160;
    this.h = this.h || 40;

    var htmlOBJ = document.createElement('div');
    var container = document.getElementById('blockContainer');

    var status = true;
    htmlOBJ.className = this.style;

    this.init();
    htmlOBJ.style.width = this.w + 'px';
    htmlOBJ.style.height = this.h + 'px';
    if(opt.t==4){
        htmlOBJ.innerHTML = "<div class='func lFunc'>{</div><div class='func rFunc'>}</div>";
    }
    container.appendChild(htmlOBJ);


    this.transition = function(){
        htmlOBJ.style.transition = "all 0s";
    }

    this.kill = function () {
       container.removeChild(htmlOBJ);
    }

    this.render = function () {
       
        htmlOBJ.style.transform = "translate(" + ($.offset.x + this.x) + "px," + ($.offset.y + this.y) + "px)";
    }
}