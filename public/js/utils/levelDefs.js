$.glitchType = ['walk', 'grab', 'blink', 'flatten', 'bounce', 'Rexpress'];

$.level = [
      {
            p: { x: 350, y: 630 },
            b: [{ x: 265, y: 727, t: 8, w: 640, h: 40 }, { x: 675, y: 412, t: 4 }]
      },
      {//jumper tutorial
            p: { x: 600, y: 1100 },
            b: [{ x: 0, y: 1235, t: 8, w: 1250, h: 40 }, { x: 261, y: 967, t: 0 }, { x: 921, y: 389, t: 0 }, { x: 579, y: 682, t: 0 }, { x: 546, y: 73, t: 4 }]
      },
      {//ice and land tutorial
            p: { x: 600, y: 1100 },
            b: [{ x: 283, y: 346, t: 2, w: 160, h: 40 }, { x: 686, y: 521, t: 2, w: 160, h: 40 }, { w: 200, h: 50, x: 877, y: -150, t: 4 }, { x: 468, y: 1090, t: 8, w: 160, h: 40 }, { x: 464, y: 775, t: 8, w: 160, h: 40 }, { x: -49, y: 1306, t: 8, w: 1280, h: 40 }, { x: 527, y: -3, t: 0, w: 160, h: 40 }]
      },
      {//wall climb tutorial
            p: { x: 600, y: 1810 },
            b: [{ x: 338, y: 2100, t: 8, w: 640, h: 40 }, { w: 100, h: 2100, x: 366, y: -1, t: 9 }, { w: 100, h: 2100, x: 848, y: -1, t: 9 }, { w: 20, h: 800, x: 464, y: 1265, t: 10 }, { w: 20, h: 400, x: 827, y: 493, t: 11 }, { x: 580, y: 1266, t: 8, w: 160, h: 40 }, { w: 200, h: 50, x: 561, y: -1, t: 4 }, { x: 346, y: -39, t: 8, w: 640, h: 40 }, { x: 467, y: 433, t: 8, w: 160, h: 40 }]
      },
      {//slider tutorial
            p: { x: 600, y: 610 },
            b: [{ x: 516, y: 556, t: 0 }, { x: 117, y: 316, t: 2 }, { x: 8, y: 751, t: 8, w: 1250, h: 40 }, { x: 1606, y: 128, t: 4 }, { x: 460, y: -136, t: 1 }]
      },
      {
            p: { x: 600, y: 710 },
            b: [{ x: 201, y: 1014, t: 8, w: 1280, h: 40 }, { w: 100, h: 1050, x: 198, y: 8, t: 9 }, { w: 40, h: 200, x: 432, y: 595, t: 12 }, { w: 40, h: 200, x: 892, y: 279, t: 13 }, { w: 200, h: 50, x: 318, y: 22, t: 4 }, { w: 100, h: 1050, x: 1385, y: 11, t: 9 }, { x: 194, y: -30, t: 8, w: 1280, h: 40 }, { w: 40, h: 200, x: 1344, y: 663, t: 13 }, { x: 297, y: 96, t: 8, w: 320, h: 40 }]
      },
      {//needs to be moved higher - 11
            p: { x: 600, y: 630 },
            b: [{ x: -50, y: -1350, t: 9 }, { x: 1150, y: -1350, t: 9 }, { x: 100, y: 500, t: 0 }, { x: 200, y: 200, t: 2 }, { x: 100, y: -100, t: 2 }, { x: 300, y: -400, t: 0 }, { x: 100, y: -900, t: 1 }, { x: 700, y: -1100, t: 4 }, { x: -50, y: 750, t: 8, w: 1250, h: 40 }]
      },


      {
            p: { x: 600, y: 1010 },
            b: [{ x: 322, y: 1603, t: 8, w: 640, h: 40 }, { x: 173, y: 214, t: 8, w: 320, h: 40 }, { w: 50, h: 1050, x: 960, y: 654, t: 9 }, { w: 50, h: 1050, x: 446, y: 248, t: 9 }, { w: 40, h: 200, x: 930, y: 1284, t: 13 }, { w: 20, h: 200, x: 495, y: 811, t: 10 }, { w: 200, h: 50, x: 206, y: 105, t: 4 }, { x: 961, y: 636, t: 8, w: 640, h: 40 }, { w: 800, h: 200, x: 573, y: -112, t: 1 }, { w: 50, h: 262.5, x: 1553, y: 373, t: 9 }, { x: 1554, y: 347, t: 8, w: 320, h: 40 }]
      },
      {
            p: { x: 600, y: 710 },
            b: [{ x: 442, y: 1047, t: 8, w: 320, h: 40 }, { x: 742, y: 842, t: 8, w: 160, h: 40 }, { x: 1090, y: 653, t: 8, w: 160, h: 40 }, { x: 1456, y: 495, t: 0, w: 160, h: 40 }, { x: 1798, y: 457, t: 3, w: 160, h: 40 }, { x: 2256, y: 287, t: 2, w: 160, h: 40 }, { w: 40, h: 400, x: 2599, y: -69, t: 12 }, { w: 800, h: 200, x: 3155, y: 70, t: 1 }, { w: 200, h: 50, x: 3940, y: 589, t: 4 }, { w: 40, h: 200, x: 4552, y: 300, t: 13 }]
      },

      {
            p: { x: 600, y: 1110 },
            b: [{ x: 494, y: 1345, t: 8 }, { x: 917, y: 1054, t: 1 }, { x: 2620, y: 925, t: 1 }, { x: 1783, y: 1255, t: 1 }, { x: 2898, y: 646, t: 0 }, { x: 2510, y: 499, t: 0 }, { x: 2061, y: 559, t: 0 }, { x: 571, y: 279, t: 4 }, { x: 1076, y: 447, t: 0 }, { x: 1582, y: 487, t: 0 }]
      },
      {
            p: { x: 600, y: 2000 },
            b: [{ x: 681, y: 1916, t: 0, w: 160, h: 40 }, { x: 519, y: 1549, t: 0, w: 160, h: 40 }, { x: 520, y: 2250, t: 8, w: 320, h: 40 }, { x: 472, y: 158, t: 8, w: 640, h: 40 }, { w: 50, h: 2100, x: 470, y: 193, t: 9 }, { w: 20, h: 400, x: 521, y: 481, t: 10 }, { x: 844, y: 415, t: 8, w: 40, h: 40 }, { w: 50, h: 1860, x: 840, y: 430, t: 9 }, { w: 50, h: 2100, x: 2217, y: 145, t: 9 }, { x: 1626, y: 2245, t: 8, w: 640, h: 40 }, { x: 1899, y: 149, t: 8, w: 320, h: 40 }, { w: 50, h: 1900, x: 1849, y: 150, t: 9 }, { w: 20, h: 800, x: 2195, y: 1306, t: 11 }, { w: 200, h: 50, x: 1960, y: 234, t: 4 }, { x: 2058, y: 902, t: 2, w: 160, h: 40 }, { w: 40, h: 200, x: 1891, y: 906, t: 12 }, { x: 1973, y: 602, t: 2, w: 160, h: 40 }, { x: 684, y: 1211, t: 0, w: 160, h: 40 }, { x: 1370, y: 1097, t: 0, w: 160, h: 40 }, { x: 1530, y: 1097, t: 0, w: 320, h: 40 }, { x: 1770, y: 1998, t: 0, w: 80, h: 40 }, { x: 1532, y: 1394, t: 0, w: 320, h: 40 }, { x: 1691, y: 1701, t: 0, w: 160, h: 40 }]
      },
      {
            p: { x: 1000, y: 2000 },
            b: [{ x: 825, y: 1887, t: 8, w: 320, h: 40 }, { x: 828, y: 2445, t: 8, w: 1280, h: 40 }, { w: 50, h: 525, x: 1736, y: 1920, t: 9 }, { w: 20, h: 200, x: 1716, y: 1966, t: 11 }, { x: 1735, y: 1886, t: 2, w: 320, h: 40 }, { w: 50, h: 525, x: 825, y: 1920, t: 9 }, { w: 50, h: 525, x: 1096, y: 1361, t: 9 }, { w: 50, h: 525, x: 2008, y: 1360, t: 9 }, { x: 1735, y: 1324, t: 8, w: 320, h: 40 }, { x: 824, y: 1328, t: 2, w: 320, h: 40 }, { w: 50, h: 525, x: 823, y: 802, t: 9 }, { x: 822, y: 764, t: 8, w: 320, h: 40 }, { w: 50, h: 525, x: 1733, y: 799, t: 9 }, { x: 1732, y: 761, t: 2, w: 320, h: 40 }, { w: 50, h: 525, x: 1094, y: 239, t: 9 }, { x: 825, y: 210, t: 2, w: 320, h: 40 }, { w: 200, h: 50, x: 870, y: 1766, t: 4 }, { w: 40, h: 200, x: 439, y: 315, t: 12 }, { x: 665, y: 1030, t: 0, w: 160, h: 40 }, { x: 447, y: 612, t: 0, w: 160, h: 40 }, { x: 447, y: 1468, t: 0, w: 160, h: 40 }, { w: 20, h: 400, x: 802, y: 1944, t: 11 }, { w: 20, h: 200, x: 1711, y: 819, t: 11 }, { x: 1372, y: 1583, t: 0, w: 160, h: 40 }, { x: 1352, y: 377, t: 0, w: 160, h: 40 }, { x: 1249, y: 986, t: 0, w: 160, h: 40 }]
      },
      {
            p: { x: 600, y: 4000 },
            b: [{ x: 8, y: 4169, t: 8, w: 1280, h: 40 }, { w: 100, h: 3900, x: 462, y: 267, t: 9 }, { w: 200, h: 50, x: 181, y: 4001, t: 4 }, { x: 762, y: 3935, t: 0, w: 160, h: 40 }, { w: 100, h: 4200, x: 4, y: -31, t: 9 }, { w: 20, h: 200, x: 1128, y: 3542, t: 11 }, { w: 40, h: 200, x: 1116, y: 3215, t: 13 }, { x: 591, y: 3184, t: 2, w: 320, h: 40 }, { w: 20, h: 400, x: 559, y: 2204, t: 10 }, { x: 651, y: 2834, t: 0, w: 160, h: 40 }, { w: 160, h: 400, x: 661, y: 1790, t: 13 }, { w: 40, h: 400, x: 558, y: 1193, t: 12 }, { x: 104, y: 3855, t: 8, w: 160, h: 40 }, { x: 105, y: 2868, t: 8, w: 160, h: 40 }, { x: 303, y: 2041, t: 8, w: 160, h: 40 }, { x: 103, y: 1321, t: 8, w: 160, h: 40 }, { x: 303, y: 411, t: 8, w: 160, h: 40 }, { w: 100, h: 4200, x: 1151, y: -31, t: 9 }, { x: 471, y: 255, t: 8, w: 80, h: 40 }, { x: 104, y: 1807, t: 0, w: 160, h: 40 }, { x: 302, y: 948, t: 0, w: 160, h: 40 }, { x: 104, y: 2455, t: 0, w: 160, h: 40 }, { x: 301, y: 3467, t: 0, w: 160, h: 40 }, { w: 100, h: 2100, x: 737, y: 10, t: 9 }]
      },
      {
            p: { x: 900, y: 1550 },
            b: [{ x: 3, y: 1708, t: 2, w: 1280, h: 40 }, { x: 1, y: 1200, t: 2, w: 1000, h: 40 }, { x: 2, y: 630, t: 2, w: 1000, h: 40 }, { x: 284, y: 921, t: 2, w: 1000, h: 40 }, { x: 282, y: 1458, t: 2, w: 1000, h: 40 }, { w: 40, h: 1600, x: -8, y: 109, t: 12 }, { w: 40, h: 1600, x: 1245, y: 352, t: 13 }, { x: 296, y: 325, t: 8, w: 1280, h: 40 }, { w: 100, h: 50, x: 1053, y: 1840, t: 4 }, { w: 800, h: 200, x: 1270, y: 4, t: 1 }, { w: 50, h: 2100, x: 2108, y: 256, t: 9 }, { w: 20, h: 1600, x: 2086, y: 260, t: 11 }, { x: 1424, y: 2121, t: 0, w: 160, h: 40 }, { x: 1376, y: 1282, t: 8, w: 320, h: 40 }, { x: 1402, y: 616, t: 8, w: 320, h: 40 }, { x: 1765, y: 1707, t: 0, w: 320, h: 40 }, { x: 1516, y: 941, t: 0, w: 320, h: 40 }]
      },
      {
            p: { x: 550, y: 630 },
            b: [{ x: 500, y: 764, t: 8, w: 160, h: 40 }, { w: 50, h: 1050, x: 1038, y: 383, t: 9 }, { w: 20, h: 400, x: 1088, y: 403, t: 10 }, { w: 20, h: 400, x: 1016, y: 402, t: 11 }, { x: 1327, y: 229, t: 0, w: 160, h: 40 }, { w: 50, h: 2100, x: 1650, y: 542, t: 9 }, { w: 50, h: 2100, x: 2413, y: 57, t: 9 }, { w: 100, h: 2100, x: 2834, y: 542, t: 9 }, { w: 200, h: 50, x: 2538, y: 125, t: 4 }, { x: 2093, y: 1604, t: 8, w: 320, h: 40 }, { x: 1699, y: 1600, t: 8, w: 160, h: 40 }, { x: 2253, y: 1217, t: 8, w: 160, h: 40 }, { x: 1700, y: 1216, t: 8, w: 320, h: 40 }, { x: 1700, y: 844, t: 8, w: 160, h: 40 }, { x: 2093, y: 846, t: 8, w: 320, h: 40 }, { x: 2254, y: 503, t: 8, w: 160, h: 40 }, { x: 1649, y: 504, t: 8, w: 320, h: 40 }, { x: 2253, y: 2000, t: 8, w: 160, h: 40 }, { x: 1701, y: 1998, t: 8, w: 320, h: 40 }, { w: 20, h: 400, x: 2465, y: 432, t: 10 }, { w: 20, h: 400, x: 2809, y: 1049, t: 11 }, { w: 40, h: 400, x: 2794, y: 2115, t: 13 }, { w: 20, h: 400, x: 2464, y: 1734, t: 10 }, { x: 1700, y: 2383, t: 8, w: 160, h: 40 }, { w: 40, h: 200, x: 1846, y: 2430, t: 12 }, { x: 1651, y: 2642, t: 2, w: 1280, h: 40 }]
      },
      {
            p: { x: 600, y: 710 },
            b: [{ x: 1, y: 932, t: 8, w: 2560, h: 40 }, { w: 40, h: 800, x: 1247, y: 132, t: 13 }, { w: 100, h: 50, x: 1289, y: 815, t: 4 }, { w: 40, h: 800, x: 1394, y: 129, t: 12 }, { x: 179, y: 668, t: 0, w: 160, h: 40 }, { w: 100, h: 1050, x: -3, y: -118, t: 9 }, { w: 100, h: 1050, x: 2458, y: -118, t: 9 }, { x: 527, y: 446, t: 2, w: 160, h: 40 }, { x: 2196, y: 677, t: 0, w: 160, h: 40 }, { x: 911, y: 211, t: 3, w: 160, h: 40 }, { x: 1889, y: 446, t: 2, w: 160, h: 40 }, { x: 1631, y: 204, t: 3, w: 160, h: 40 }]
      },
      {
            p: { x: 600, y: 710 },
            b: [{ x: 2308, y: 234, t: 8, w: 320, h: 40 }, { x: 470, y: 503, t: 8, w: 320, h: 40 }, { x: -1, y: 790, t: 8, w: 2560, h: 40 }, { x: 580, y: 217, t: 0, w: 80, h: 40 }, { x: 272, y: 502, t: 0, w: 80, h: 40 }, { x: 1031, y: 642, t: 0, w: 80, h: 40 }, { x: 1374, y: 505, t: 0, w: 80, h: 40 }, { x: 1783, y: 506, t: 0, w: 80, h: 40 }, { w: 100, h: 262.5, x: 1774, y: 526, t: 9 }, { x: 2190, y: 501, t: 0, w: 160, h: 40 }, { x: 2771, y: 234, t: 8, w: 160, h: 40 }, { x: 3103, y: 495, t: 0, w: 160, h: 40 }, { x: 2863, y: 499, t: 8, w: 80, h: 40 }, { x: 3464, y: 497, t: 0, w: 40, h: 40 }, { x: 3729, y: 496, t: 0, w: 40, h: 40 }, { x: 3595, y: 497, t: 0, w: 40, h: 40 }, { x: 3590, y: 231, t: 0, w: 40, h: 40 }, { x: 4503, y: 243, t: 0, w: 160, h: 40 }, { x: 4009, y: 503, t: 0, w: 80, h: 40 }, { x: 4549, y: 496, t: 8, w: 80, h: 40 }, { x: 4172, y: 245, t: 8, w: 160, h: 40 }, { x: 5630, y: 646, t: 0, w: 80, h: 40 }, { x: 6399, y: 646, t: 0, w: 80, h: 40 }, { w: 100, h: 131.25, x: 5619, y: 666, t: 9 }, { w: 100, h: 131.25, x: 6391, y: 666, t: 9 }, { x: 5888, y: 486, t: 0, w: 320, h: 40 }, { x: 5180, y: 673, t: 0, w: 160, h: 40 }, { x: 5102, y: 714, t: 0, w: 80, h: 40 }, { x: 5180, y: 713, t: 0, w: 160, h: 40 }, { x: 5022, y: 754, t: 0, w: 320, h: 40 }, { x: 5260, y: 633, t: 0, w: 80, h: 40 }, { w: 100, h: 50, x: 7315, y: 277, t: 4 }, { w: 25, h: 525, x: 7414, y: 273, t: 9 }, { x: 6907, y: 716, t: 0, w: 80, h: 40 }, { x: 6987, y: 716, t: 0, w: 160, h: 40 }, { x: 6827, y: 756, t: 0, w: 320, h: 40 }, { x: 6987, y: 676, t: 0, w: 160, h: 40 }, { x: 7067, y: 637, t: 0, w: 80, h: 40 }, { w: 100, h: 262.5, x: 1366, y: 527, t: 9 }, { w: 100, h: 131.25, x: 1023, y: 658, t: 9 }]
      }


]

//stopper is floor, delete floor, right wall and left wall - change to wall graber
$.blocks = { 0: { id: 0, name: "bounce" }, 1: { id: 1, name: "stick" }, 2: { id: 2, name: "ice" }, 3: { id: 3, name: "sliderBounce" }, 4: { id: 4, name: "finish" }, 8: { id: 8, name: "stopper" }, 9: { id: 9, name: "theWall" }, 10: { id: 10, name: "left wall stick" }, 11: { id: 11, name: "right wall stick" }, 12: { id: 12, name: "left bounce" }, 13: { id: 13, name: "right bounce" } };

$.blockBehaviors = [
      {
            style: "base tramp", ontouch: function () {
                  if ($.myplayer.velocityY <= 0) { $.myplayer.velocityY = 30; $.myplayer.addAnim('bounce'); $.playSound($.sounds['bounce1']); }
            }
      },
      { w: 800, h: 200, ontouch: function () { if ($.key.right || $.key.left) { $.myplayer.velocityY = .5; $.myplayer.velocityX *= 1.02; $.myplayer.addAnim('grab'); } } },
      {
            style: "base ice",
            ontouch: function () {
                  if ($.myplayer.velocityY != 0) {
                        $.playSound($.sounds['bounce3']);
                        $.myplayer.addAnim('flatten');

                  }; if ($.myplayer.velocityY <= 0 && $.myplayer.y + ($.myplayer.h / 2) < this.y) {

                        $.myplayer.velocityX *= .99;
                        $.myplayer.velocityY = $.myplayer.weight;
                        $.myplayer.y = this.y - $.myplayer.h;
                  } else { $.myplayer.velocityY = -10; }
            }
      },
      { style: "base tramp", init: function () { tween.to(this, { x: this.x + 100 }, 90, 1000); }, ontouch: function () { if ($.myplayer.velocityY <= 0) { $.myplayer.velocityY = 30; $.playSound($.sounds['bounce1']); $.myplayer.addAnim('bounce'); } } },
      { style: "cube finish", w: 200, h: 50, ontouch: function () { if ($.myplayer.weight > 0) { $.myplayer.success(); $.playSound($.sounds['bounce']); $.playSound($.sounds['bounce1']); $.playSound($.sounds['bounce2']); $.playSound($.sounds['bounce3']); $.key.space = 0; $.myplayer.velocityY = 0; $.myplayer.velocityX = 0; $.myplayer.weight = 0; } } },
      {},
      {},
      {},
      {
            style: "base floor", ontouch: function () {
                  if ($.myplayer.velocityY != 0) {
                        $.myplayer.addAnim('flatten');
                        $.playSound($.sounds['bounce2']);

                  }; if ($.myplayer.velocityY <= 0 && $.myplayer.y + ($.myplayer.h / 2) < this.y) {

                        $.myplayer.velocityX *= .9;

                        $.myplayer.velocityY = $.myplayer.weight;
                        $.myplayer.y = this.y - $.myplayer.h;
                  } else { $.myplayer.velocityY = -10; }
            }
      },
      {
            style: "base wall",
            add: function () { $.myplayer.velocityY = 0; },
            w: 100, h: 2100,
            ontouch: function () {
                  if ($.myplayer.x < this.x) {
                        $.myplayer.velocityX = -1;
                  }
                  else {
                        $.myplayer.velocityX = 1;
                  }
                  $.playSound($.sounds['bounce4']);
            }
      },
      { w: 20, h: 200, add: function () { $.myplayer.velocityX += 10; }, ontouch: function () { $.myplayer.addAnim('grabL'); $.myplayer.velocityY = -1; $.myplayer.velocityX = 0; $.myplayer.x = this.x + this.w; } },
      { w: 20, h: 200, add: function () { $.myplayer.velocityX -= 10; }, ontouch: function () { $.myplayer.addAnim('grab'); $.myplayer.velocityY = -1; $.myplayer.velocityX = 0; $.myplayer.x = this.x - $.myplayer.w; } },


      {
            w: 40, h: 200,
            style: "base Ltramp", ontouch: function () {
                  $.myplayer.velocityX = 30; $.myplayer.velocityY += 10; $.playSound($.sounds['bounce2']); $.myplayer.addAnim('bounce');
            }

      },
      {
            w: 40, h: 200,
            style: "base Rtramp", ontouch: function () {
                  $.myplayer.velocityX = -30; $.myplayer.velocityY += 10; $.playSound($.sounds['bounce2']); $.myplayer.addAnim('bounce');
            }

      }
]


$.tutorial = [
      ["Stop all this glitch madness of JS13k!", "Quickly return me, a semicolon, to the braketed finish.", "The faster you are, the more notoriety you'll receive!", $.ios ? "Use the left half of the screen to move left or right" : "Left and right arrows make me move.", $.ios ? "Use the right half of the screen to jump" : "Space makes me jump and enter restarts me.", "Let's go! Time's a wasting up there!"],//level 0
      ["This time we have bounce strips.", "Hurry! Jump on them and find the bracketed finish."], //level 1
      ["Floating ground, hmm?", "I can't jump through these.", "And those blue ones look slippery."], //level 1
      ["Padded walls?!? Do I look looney?", "Maybe I can climb them?"],
      ["What's that red wall up there?", $.ios ? "Use the left half of the screen" : "Press left or right on the arrow keys,", "and I can slide on it."],
      ["Sideways bouncy strips...", "Looks like a bouncy house.", "Let's see what these can do!"]
]
