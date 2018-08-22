
$.key = {
    left: 0,
    right: 0,
    up: 0,
    space: 0
}

$.offset = {
    x: 0,
    y: 0
}

$.dt = 0;
$.lt = 0;
$.elapsed = 0;
$.mute = 0;
$.glitch = 0;
$.canEdit = false;

$.ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

$.state;


$.W = Math.min(window.innerWidth,900);
$.H = Math.min(window.innerHeight,700);

// $.socket = io.connect("https://savethesemicolon.herokuapp.com");
//$.socket = io({ upgrade: false, transports: ["websocket"] });

 $.FBconfig = {
    apiKey: "AIzaSyAL65RDYyDFEnze_PEy9ES9oUFK_-OAiBw",
    authDomain: "savethesemicolon-14735.firebaseapp.com",
    databaseURL: "https://savethesemicolon-14735.firebaseio.com",
    storageBucket: "savethesemicolon-14735.appspot.com",
    messagingSenderId: "740918781240"
  };
firebase.initializeApp($.FBconfig);

$.database = firebase.database();

$.setup = function () {
    $.main = document.getElementById('main');
    $.mainctx = $.main.getContext('2d');
    $.gameProgress = new $.gameLoad();

    $.main.width = $.W;
    $.main.height = $.H;

    $.sounds = [];

    if (window.AudioContext) {
        $.audioCtx = new AudioContext();

        var soundGen = new sonantx.SoundGenerator($.jumpInstrument);
        soundGen.createAudioBuffer(137, function (buffer) {
            $.sounds['jump'] = buffer;
        });
        soundGen.createAudioBuffer(157, function (buffer) {
            $.sounds['bounce'] = buffer;
        });
        soundGen.createAudioBuffer(134, function (buffer) {
            $.sounds['bounce1'] = buffer;
        });

        soundGen.createAudioBuffer(117, function (buffer) {
            $.sounds['bounce2'] = buffer;
        });

        soundGen.createAudioBuffer(127, function (buffer) {
            $.sounds['bounce3'] = buffer;
        });
        soundGen.createAudioBuffer(105, function (buffer) {
            $.sounds['bounce4'] = buffer;
        });
    }



    window.addEventListener('keydown', $.keydown, false);
    window.addEventListener('keyup', $.keyup, false);
    window.addEventListener('touchstart', $.touchstart);
    window.addEventListener('touchmove', $.touchmove);
    window.addEventListener('touchend', $.touchend);

    document.getElementById("username").value = $.gameProgress.data.user == "default user" ? "" : $.gameProgress.data.user;
    $.state = new $.play();
    $.state.init();
    $.loop();
}


$.playSound = function (b, l) {
    if (!$.mute && window.AudioContext) {
        var source = $.audioCtx.createBufferSource();

        source.buffer = b;
        source.connect($.audioCtx.destination);

        source.start(0);
        return source;
    }
    return;

}



$.keydown = function (e) {
    if (!$.canEdit) { e.preventDefault() };
    if (e.keyCode === 37) { $.key.left = 1; };
    if (e.keyCode === 39) { $.key.right = 1; };
    if (e.keyCode === 32) { $.key.space = 1; };//32
    if (e.keyCode === 13) { $.key.enter = 1; };
}

$.keyup = function (e) {

    if (e.keyCode === 37) { $.key.left = 0; };
    if (e.keyCode === 39) { $.key.right = 0; };
    if (e.keyCode === 32) { $.key.space = 0; };
    if (e.keyCode === 13) { $.key.enter = 0; };
}

$.touchstart = function (e) {
     if (e.target.id=="overlay"||e.target.id=="body") { e.preventDefault() };
    var i = 0;
    while (i < e.touches.length) {
        p = e.touches[i];
        if (p.clientX < window.innerWidth / 4) { $.key.left = 1; }
        if (p.clientX > window.innerWidth - (window.innerWidth / 2)) { $.key.space = 1; }
        if (p.clientX > window.innerWidth / 4 && p.clientX < 2 * (window.innerWidth / 4)) { $.key.right = 1; }
        i++
    }

};

$.touchend = function (e) {
     if (e.target.id=="overlay"||e.target.id=="body") { e.preventDefault() };
    $.key.left = 0;
    $.key.right = 0;
    $.key.space = 0;
};

$.touchmove = function (e) {
    e.preventDefault();
};

$.updateDelta = function () {
    var now = Date.now();
    $.dt = (now - $.lt) / (1000 / 60);
    $.lt = now;
    $.elapsed += $.dt / 60;
}


$.loop = function () {
    //  setTimeout(function () {
    window.requestAnimFrame($.loop);
    $.update();
    $.render();
    //  }, 1000 / 60);
}

$.update = function () {
    $.updateDelta();
    $.state.update();
}

$.render = function () {
    $.mainctx.clearRect(0, 0, $.W, $.H);
    $.state.render();

}


window.addEventListener('load', function () {
    $.setup();
});