"use strict";

$.util = {};

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();


$.gameLoad = function () {
  this.data = {};
  this.data.scores = [];
  this.data.user = "default user";

  var opt = JSON.parse(localStorage.getItem(location.pathname));
  if (opt == null) {
    localStorage.setItem(location.pathname, JSON.stringify(this.data));
  }
  else {
    this.data.scores = opt.scores;
    this.data.user = opt.user;
  }

  this.saveUser = function (name) {
    this.data.user = name;
    localStorage.setItem(location.pathname, JSON.stringify(this.data));
  }

  this.saveScore = function (level, scores) {
    if (this.data.scores.length <= level) {
      this.data.scores.push([]);
    }
    this.data.scores[level].push({ n: this.data.user, s: Number(scores) });
    this.data.scores[level] = this.data.scores[level].sort(function (a, b) {
      if (a.s > b.s) {
        return 1;
      }
      if (a.s < b.s) {
        return -1;
      }
      return 0;
    });
    this.data.scores[level].splice(5, this.data.scores[level].length);  //only store top 5
    localStorage.setItem(location.pathname, JSON.stringify(this.data));
  }

};


$.onlineNewScore = function (_level, _score, _ghost) {
  $.database.ref('scores/' + _level).once('value').then(function (snapshot) {
    var currScores = snapshot.val();
    currScores.push({ n: _score.n, s: Number(_score.s) });

    currScores.sort(function (a, b) {
      if (a.s > b.s) {
        return 1;
      }
      if (a.s < b.s) {
        return -1;
      }
      return 0;
    });

    currScores.splice(5, currScores.length);
    var saveScores = $.database.ref('scores/');
    saveScores.child(_level).set(currScores);

    if (currScores[0].n == _score.n && currScores[0].s == _score.s) {
      var saveGhost = $.database.ref('ghosts/');
      saveGhost.child(_level).set(_ghost);
    }
  });
}



$.util.rectInRect = function (r1, r2) {
  return !(r2.x > r1.x + r1.w ||
    r2.x + r2.w < r1.x ||
    r2.y > r1.y + r1.h ||
    r2.y + r2.h < r1.y);
};

$.util.range = function (n, r) {
  if (n < 0) {
    return Math.max(n, -r);
  }
  else if (n > 0) {
    return Math.min(n, r);
  }
}

$.util.popChat = function (_x, _y, _text, _c) {

  var textEl = document.createElement('div');
  textEl.classList.add(_c || 'ani', 'note'); // could add animation option for diff behavior.

  var current = 0;
  setLocation(_text[current].length);
  textEl.innerText = _text[current];

  textEl.addEventListener("animationend", AnimationEnded, false);

  document.body.appendChild(textEl);

  function setLocation(textLength) {
    var x = textLength < 20 ? (textLength * 15) / 4 : 80; //100 is max width of box, 10 is text size
    var y = 15 + Math.ceil(textLength * .1) * 7; //100 is max width of box, 10 is text size
    textEl.style.left = (_x - x) + "px";
    textEl.style.top = (_y - y) + "px";
  }

  function AnimationEnded() {
    if (current < _text.length - 1) {
      current++;
      setLocation(_text[current].length);
      textEl.innerText = _text[current];;
      textEl.classList.remove(_c || 'ani');
      void textEl.offsetWidth;
      textEl.classList.add(_c || 'ani');
    } else {
      document.body.removeChild(textEl);
    }
  }
}