"use strict";

var highScores = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var ghost = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

module.exports = function (socket) {
	socket.on('score list', function (level, fn) {
		fn({h:highScores[level], g:ghost[level]});
	});


	socket.on("new score", function (_score,_ghost,fn) {
		highScores[_score.l].push({ n: _score.n, s: Number(_score.s) });
		highScores[_score.l] = highScores[_score.l].sort(function (a, b) {
			if (a.s > b.s) {
				return 1;
			}
			if (a.s < b.s) {
				return -1;
			}
			return 0;
		});
		highScores[_score.l].splice(5, highScores[_score.l].length);  
		if(highScores[_score.l][0].n == _score.n && highScores[_score.l][0].s == _score.s){
			ghost[_score.l] = _ghost;
		}
	});

};