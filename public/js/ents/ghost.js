
$.ghost = function (_p, _x, _y) {
    var htmlOBJ = document.getElementById("ghost");
    this.x = _x || 350;
    this.y = _y || 650;
    var currFrame = 0;
    var path = _p || [];
    var index = 0;
   // path.splice(0, 1);

    if (path.length == 0) {
        htmlOBJ.style.display = "none";
    }
    else {
        htmlOBJ.style.display = "block";
    }

    this.update = function () {
        currFrame += 1;
        if (path.length > index) {

            if (path[index].f == currFrame) {
                this.x -= path[index].x;
                this.y -= path[index].y;
                index += 1;
            }
        }
    }

    this.render = function () {
        htmlOBJ.style.transform = "translate(" + ($.offset.x + this.x) + "px," + ($.offset.y + this.y) + "px)";
    }
}