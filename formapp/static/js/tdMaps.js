//The game area is a 32 x 15 square grid
//In general, maps should start and end a half-square outside this area
//Avoid the tower icons at the bottom, the buttons in the top-left, and the info in the top-right
//Maps should always start in the middle of a square
//New maps must be added to the end of the list
//If you do not include an array of waves, the default waves will be used

//Map object template:
/*{
  name: Map name,
  author: Your name,
  start: [column, row],
  lines: [
    [direction, length],
    [direction, length],
    …
  ],
  waves: See below
}*/
let pause = [10, null];

let wavesDefault = [
  [[4, "g", pause], "g"],
  [[7, "g", "g", pause], ["alert", "All enemy types have different health and speed stats."], "y", pause, "y"],
  [[5, "g"], [3, "y"]],
  [[20, "g"]],
  [[2, "y"], [5, [3, "g"], pause], [3, "y"]],
  [[10, "y"], [4, "o", pause], "o"],
  [[6, "g", "y", "o", pause], "g", "y", "o"],
  [[9, "y"], [7, "o"]],
  [[50, "g"], ["alert", "All enemy types gain health every 10 rounds."]],
  [["alert", "<h1>New enemy ability: <b>Healing</b></h1>Enemies with this ability gradually regain health, so you need to destroy them quickly. They're also immune to poison."], [9, "oh", pause], "oh"],
  [[7, [6, "y", pause]], [6, "y"]],
  [[20, "oh"]],
  [[15, "o", "y"]],
  [[32, "g"], pause, [16, "y"], pause, [8, "o"], pause, [4, "r"]],
  [[6, "r"], ["alert", "<h1>New enemy ability: <b>Acceleration</b></h1>Enemies with this ability move faster as they lose health. They also can't be slowed by Slowing Towers."], [10, "oa"]],
  [[5, "g", [3, "r"], "g", pause], "g", [3, "r"], "g"],
  [[8, "oa", "ra", pause], "oa", "ra"],
  [[2, [12, "r"], pause], [12, "r"]],
  [[100, "y"]],
  [[2, "b", pause], "b"],
  [["alert", "<h1>New enemy ability: <b>Split</b></h1>Enemies with this ability split into two or more weaker enemies when they run out of health, making them much harder to destroy."], "rs"],
  [[7, "y", "o", "r", pause], [12, "rh"]],
  [[4, "os"], pause, [25, "o"], "bs"],
  [[5, "p"]],
  [[3, "pa", "bh", pause], [8, "rs", pause], "rs"],
  [["alert", "<h1>New enemy ability: <b>Blink</b></h1>Enemies with this ability switch between two states: visible and hidden. Without upgrades, towers can only hit them while they're visible."], [29, "yk", pause], "yk"],
  [[250, "g"]],
  [["alert", "Boss enemies have 100 HP."], "x"],
  ["pk"],
  [[5, "bs"]],
  [[2, [35, "r"], [5, "p"]]],
  [[14, "ba"], [26, "rh"]],
  [["alert", "<h1>New enemy ability: <b>Shield</b></h1>Enemies with this ability can only be damaged by explosions, poison, and hits from Long-Range Towers."], "gd"],
  [[30, "o"], pause, "x", pause, "x"],
  [[3, "bs"], [3, "ps"]],
  [[20, "rk"], pause, [5, "bk"]],
  [[3, "bd", pause], "bd"],
  ["xs"],
  [[10, "ok"], [8, "rh"], [19, "p"], [4, "rs"]],
  [[125, "yh"], "xa", [33, "b"]],
  [[4, "x"], [45, "r"], "xk"],
  [[7, "os"], pause, [13, "pk"] [64, "g"]],
  ["x", [18, "rd"], pause, "x"],
  [[85, "b", "p"]],
  [["alert", "Brown-boss enemies have 500 HP."], "z"],
  [[10, "x"], pause, [30, "bh"], [20, "r"]],
  [[3, "z", pause], [17, "ps"], [43, "ok"], [5, "x"]],
  [[15, "pk"], "xs", [3, "x", "z"], [300, "o"], "pd"],
  [[50, "ra"], [125, "bk"], pause, [67, "bh"], [999, "yk"], "z"],
  [[10, "g"], pause, [20, "y"], pause, [30, "o"], pause, [40, "r"], pause, [100, "p"], pause, [100, "b"], pause, [15, "x"], pause, [5, "z"]],

  //Hard mode only
  [[150, "bs"], [15, "bd"]],
  [[7, "x"], [80, "oa", "p"]],
  [[10, "za"]],
  [[100, "bk"], [12, "xh"], [75, "r", "pa", "os"]],
  [["alert", "Purple-boss enemies move much faster than normal bosses."], [4, "u", pause], "u"],
  [[30, "bd"], [3, "x"], pause, "xs"],
  [[150, "ra", "rh"]],
  [[3, "za"], pause, [2, "zh"], pause, "zk"],
  [[200, "ra"], "xd"],
  [[375, "p", "r", "b"], [20, "xa"]],
  [[6, "uh"], [15, "xa"]],
  [[50, "x"], pause, [10, "zh"]],
  [[8, "zk", pause], [20, "x"]],
  [[135, "bh", "rs"]],
  [[11, [17, "ra"], "z"]],
  [[14, "xa"], [15, [5, "od"], pause], [5, "z"], [5, "u"]],
  [[50, [2, "pa"], [5, "r"]], pause, [15, "za"]],
  [[5, "xd"]],
  [[60, "b"], [10, "uk"], [130, "b"]],
  ["uh", [10, [23, "rk"], "z"], [65, "ba"]],
  [[20, "u"], pause, [40, "xh"]],
  [[20, "pa"], [25, "pa", "xs"], pause, [200, "gd"], [3, "ua", "zh"]],
  [[111, "bh"], [8, "za"], [35, [9, "ph", "uk"]]],
  [[90, "b", "p"], pause, [100, "x"]],
  [[2, "zd", "ud", pause], "zd", "ud", [300, "ba"], [30, "xh"], pause, [20, "u", "uh", "ua"]]
];
wavesDefault.forEach(wave => wave.unshift([8, pause])); //Add a break at the start of each wave

//Waves array example:
/*[
  //Each array is a wave. There must be 75 waves.
  ["g", pause, "y", pause, "o"], //A green, a yellow, and an orange, with pauses in between
  [[10, "r"], ["alert", "This is a message that will be shown onscreen."]], //10 reds followed by a message for the player
  [[5, "pa", "bh"]], //A purple with acceleration and a brown with healing, repeated 5 times
  …
]*/

//ENEMY CODES:
//Types (first charcter):
//"g" — green
//"y" — yellow
//"o" — orange
//"r" — red
//"p" — purple
//"b" — brown
//"x" — boss
//"z" — brown-boss
//"u" — purple-boss
//Abilities (second character):
//"h" — healing
//"a" — acceleration
//"s" — split
//"k" — blink
//"d" — shield

let maps = [
  {
    name: "Map #01",
    author: "Oley Birkeland",
    start: [6.5, -0.5],
    lines: [
      ["down", 13],
      ["left", 3],
      ["up", 3],
      ["right", 7],
      ["down", 2],
      ["right", 2],
      ["up", 6],
      ["left", 3],
      ["up", 3],
      ["right", 7],
      ["down", 8],
      ["right", 6],
      ["down", 3],
      ["left", 3],
      ["up", 8],
      ["right", 9],
      ["down", 4],
      ["left", 4],
      ["down", 2],
      ["right", 8]
    ],
    waves: wavesDefault
  },
  {
    name: "Map #02",
    author: "Oley Birkeland",
    start: [-0.5, 12.5],
    lines: [
      ["right", 9],
      ["up", 10],
      ["right", 13],
      ["down", 8],
      ["left", 2],
      ["up", 6],
      ["left", 9],
      ["down", 8],
      ["right", 2],
      ["up", 6],
      ["right", 5],
      ["down", 6],
      ["right", 6],
      ["up", 10],
      ["right", 9]
    ],
    waves: wavesDefault
  },
  {
    name: "Map #03",
    author: "Oley Birkeland",
    start: [23.5, -0.5],
    lines: [
      ["down", 3],
      ["right", 5],
      ["down", 4],
      ["left", 4],
      ["down", 3],
      ["right", 2],
      ["down", 4],
      ["left", 9],
      ["up", 4],
      ["right", 2],
      ["down", 2],
      ["left", 8],
      ["down", 1],
      ["left", 7],
      ["up", 5],
      ["right", 9],
      ["up", 5],
      ["left", 4],
      ["down", 2],
      ["right", 8],
      ["up", 1],
      ["right", 1],
      ["up", 1],
      ["right", 1],
      ["up", 1],
      ["right", 1],
      ["up", 2]
    ],
    waves: wavesDefault
  },
  {
    name: "Map #04",
    author: "Oley Birkeland",
    start: [8.5, -0.5],
    lines: [
      ["down", 13],
      ["right", 6],
      ["up", 5],
      ["right", 4],
      ["down", 4],
      ["left", 9],
      ["up", 6],
      ["right", 7],
      ["down", 4],
      ["right", 9],
      ["down", 3],
      ["left", 5],
      ["up", 7],
      ["right", 2],
      ["down", 2],
      ["right", 4],
      ["up", 3],
      ["left", 9],
      ["up", 1],
      ["right", 4],
      ["up", 1],
      ["left", 22]
    ],
    waves: wavesDefault
  },
  {
    name: "Map #05",
    author: "Oley Birkeland",
    start: [32.5, 7.5],
    lines: [
      ["left", 4],
      ["down", 2],
      ["left", 4],
      ["up", 2],
      ["left", 3],
      ["up", 5],
      ["left", 4],
      ["down", 5],
      ["left", 3],
      ["down", 5],
      ["left", 4],
      ["up", 5],
      ["left", 3],
      ["up", 2],
      ["left", 4],
      ["down", 2],
      ["left", 4]
    ],
    waves: wavesDefault
  },
  {
    name: "Celtic Knot",
    author: "Mr. Smith",
    start: [-0.5, 12.5],
    lines: [
      ["right", 9],
      ["up", 7],
      ["left", 5],
      ["down", 3],
      ["right", 12],
      ["up", 6],
      ["left", 4],
      ["down", 3],
      ["right", 9],
      ["up", 3],
      ["left", 4],
      ["down", 6],
      ["right", 12],
      ["up", 3],
      ["left", 5],
      ["down", 7],
      ["right", 9]
    ],
    waves: wavesDefault
  },
  {
    name: "Outer Loop",
    author: "Mr. Smith",
    start: [15.5, -0.5],
    lines: [
      ["down", 2],
      ["left", 15],
      ["down", 13],
      ["right", 15],
      ["up", 4],
      ["left", 3],
      ["down", 3],
      ["right", 8],
      ["up", 3],
      ["left", 3],
      ["down", 4],
      ["right", 14],
      ["up", 13],
      ["left", 13],
      ["up", 2]
    ],
    waves: wavesDefault
  },
  {
    name: "Where'dja Go?",
    author: "Mr. Smith",
    start: [-0.5, 7.5],
    lines: [
      //jiggle
      ["right", 4],
      ["left", 2],
      ["right", 10],
      ["up", 8],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],

      ["down", 8],
      ["right", 4],
      ["left", 2],
      ["right", 9]
    ],
    waves: wavesDefault
  },
  {
    name: "Jiggle'n'Juke",
    author: "Mr. Smith",
    start: [-0.5, 7.5],
    lines: [
      //jiggle
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2]
    ],
    waves: [



      [[4, "y"]],
      [[6, "y"]],
      [[8, "y"]],
      [[10, "y"]],
      [[12, "y"]],
      [[14, "y"]],
      [[16, "y"]],
      [[18, "y"]],
      [[20, "y"]],
      [[22, "y"]],
      [[24, "y"]],
      [[26, "y"]],
      [[28, "y"]],
      [[30, "y"]],
      [[32, "y"]],
      [[34, "y"]],
      [[36, "y"]],
      [[38, "y"]],
      [[40, "y"]],
      [[45, "y"]],
      [[50, "y"]],
      [[55, "y"]],
      [[60, "y"]],
      [[65, "y"]],
      [[70, "y"]],
      [[75, "y"]],
      [[80, "y"]],
      [[85, "y"]],
      [[90, "y"]],
      [[95, "y"]],
      [[100, "o"]],
      [[110, "o"]],
      [[120, "o"]],
      [[130, "o"]],
      [[140, "o"]],
      [[150, "o"]],
      [[160, "o"]],
      [[170, "o"]],
      [[180, "o"]],
      [[190, "o"]],
      [[200, "o"]],
      [[220, "o"]],
      [[240, "o"]],
      [[260, "o"]],
      [[280, "o"]],
      [[300, "o"]],
      [[320, "o"]],
      [[340, "o"]],
      [[360, "o"]],
      [[400, "o"]],
      //Hard mode only
      [[400, "r"]],
      [[500, "r"]],
      [[600, "r"]],
      [[700, "r"]],
      [[800, "r"]],
      [[900, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]],
      [[1000, "r"]]
    ]
  },

  //↑ New maps go here ↑
];
maps[8].waves.forEach(wave => wave.unshift([8, pause])); //Add a break at the start of each wave
