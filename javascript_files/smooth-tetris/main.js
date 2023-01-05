const _0x5f5262 = _0x3381;
(function (_0x1fb4f2, _0x4f25a9) {
  const _0x4cd9b1 = _0x3381,
    _0x453526 = _0x1fb4f2();
  while (!![]) {
    try {
      const _0x50ce1d =
        -parseInt(_0x4cd9b1(0x103)) / 0x1 +
        parseInt(_0x4cd9b1(0x11a)) / 0x2 +
        -parseInt(_0x4cd9b1(0x118)) / 0x3 +
        (parseInt(_0x4cd9b1(0x10a)) / 0x4) *
          (-parseInt(_0x4cd9b1(0xff)) / 0x5) +
        (-parseInt(_0x4cd9b1(0x10e)) / 0x6) *
          (-parseInt(_0x4cd9b1(0x12c)) / 0x7) +
        -parseInt(_0x4cd9b1(0x11f)) / 0x8 +
        (-parseInt(_0x4cd9b1(0x11b)) / 0x9) *
          (-parseInt(_0x4cd9b1(0x126)) / 0xa);
      if (_0x50ce1d === _0x4f25a9) break;
      else _0x453526["push"](_0x453526["shift"]());
    } catch (_0x5daa08) {
      _0x453526["push"](_0x453526["shift"]());
    }
  }
})(_0x1d4b, 0x64e36);
const canvas = document["getElementById"]("board"),
  ctx = canvas["getContext"]("2d"),
  canvasNext = document[_0x5f5262(0x10b)](_0x5f5262(0x12d)),
  ctxNext = canvasNext[_0x5f5262(0xfb)]("2d");
function _0x3381(_0x34f8b6, _0x1d8860) {
  const _0x1d4b2d = _0x1d4b();
  return (
    (_0x3381 = function (_0x3381a4, _0x52a4bd) {
      _0x3381a4 = _0x3381a4 - 0xef;
      let _0xf8dfc1 = _0x1d4b2d[_0x3381a4];
      return _0xf8dfc1;
    }),
    _0x3381(_0x34f8b6, _0x1d8860)
  );
}
let accountValues = { score: 0x0, level: 0x0, lines: 0x0 };
function updateAccount(_0x2c66c7, _0x2afb1a) {
  const _0x3f466a = _0x5f5262;
  let _0x19bea7 = document["getElementById"](_0x2c66c7);
  _0x19bea7 && (_0x19bea7[_0x3f466a(0x109)] = _0x2afb1a);
}
let account = new Proxy(accountValues, {
    set: (_0x2056ed, _0x579cd1, _0x58ad06) => {
      return (
        (_0x2056ed[_0x579cd1] = _0x58ad06),
        updateAccount(_0x579cd1, _0x58ad06),
        !![]
      );
    },
  }),
  requestId = null,
  time = null;
const moves = {
  [KEY[_0x5f5262(0xf2)]]: (_0x2134e4) => ({
    ..._0x2134e4,
    x: _0x2134e4["x"] - 0x1,
  }),
  [KEY["RIGHT"]]: (_0x33152c) => ({ ..._0x33152c, x: _0x33152c["x"] + 0x1 }),
  [KEY[_0x5f5262(0x125)]]: (_0x43e585) => ({
    ..._0x43e585,
    y: _0x43e585["y"] + 0x1,
  }),
  [KEY[_0x5f5262(0x102)]]: (_0x12ba0d) => ({
    ..._0x12ba0d,
    y: _0x12ba0d["y"] + 0x1,
  }),
  [KEY["UP"]]: (_0x139674) =>
    board[_0x5f5262(0x128)](_0x139674, ROTATION["RIGHT"]),
  [KEY["Q"]]: (_0x222be8) =>
    board[_0x5f5262(0x128)](_0x222be8, ROTATION[_0x5f5262(0xf2)]),
};
let board = new Board(ctx, ctxNext);
initNext();
function initNext() {
  const _0x2d6a3d = _0x5f5262;
  (ctxNext[_0x2d6a3d(0x120)][_0x2d6a3d(0x10d)] = 0x4 * BLOCK_SIZE),
    (ctxNext[_0x2d6a3d(0x120)][_0x2d6a3d(0x117)] = 0x4 * BLOCK_SIZE),
    ctxNext["scale"](BLOCK_SIZE, BLOCK_SIZE);
}
function addEventListener() {
  const _0x50509b = _0x5f5262;
  document[_0x50509b(0x108)]("keydown", handleKeyPress),
    document["addEventListener"]("keydown", handleKeyPress);
}
function listenForScrollDown() {
  const _0xf75923 = _0x5f5262;
  document[_0xf75923(0x12a)](_0xf75923(0x105), (_0x4f3871) => {
    const _0x4bd525 = _0xf75923;
    _0x4f3871[_0x4bd525(0xf1)] > 0x0 &&
      handleKeyPress({ keyCode: KEY["DOWN"], preventDefault: () => {} });
  });
}
listenForScrollDown();
function handleKeyPress(_0x4ac2f1) {
  const _0x516e54 = _0x5f5262;
  _0x4ac2f1["keyCode"] === KEY["P"] && pause();
  if (_0x4ac2f1[_0x516e54(0x131)] === KEY[_0x516e54(0x114)]) gameOver();
  else {
    if (moves[_0x4ac2f1["keyCode"]]) {
      _0x4ac2f1[_0x516e54(0xfa)]();
      let _0x42df38 = moves[_0x4ac2f1[_0x516e54(0x131)]](
        board[_0x516e54(0x112)]
      );
      if (_0x4ac2f1["keyCode"] === KEY[_0x516e54(0x102)]) {
        if (
          document[_0x516e54(0x110)]("#pause-btn")[_0x516e54(0xf8)][
            _0x516e54(0x116)
          ] === _0x516e54(0xf7)
        )
          dropSound["play"]();
        else return;
        while (board["valid"](_0x42df38)) {
          (account[_0x516e54(0xfd)] += POINTS[_0x516e54(0xf3)]),
            board[_0x516e54(0x112)][_0x516e54(0xf4)](_0x42df38),
            (_0x42df38 = moves[KEY["DOWN"]](board[_0x516e54(0x112)]));
        }
        board["piece"][_0x516e54(0x123)]();
      } else
        board["valid"](_0x42df38) &&
          (document["querySelector"](_0x516e54(0x100))[_0x516e54(0xf8)][
            _0x516e54(0x116)
          ] === _0x516e54(0xf7) && movesSound[_0x516e54(0xf6)](),
          board[_0x516e54(0x112)]["move"](_0x42df38),
          _0x4ac2f1[_0x516e54(0x131)] === KEY["DOWN"] &&
            document[_0x516e54(0x110)](_0x516e54(0x100))[_0x516e54(0xf8)][
              _0x516e54(0x116)
            ] === _0x516e54(0xf7) &&
            (account[_0x516e54(0xfd)] += POINTS[_0x516e54(0xf0)]));
    }
  }
}
function resetGame() {
  const _0x47ab2f = _0x5f5262;
  highScores(),
    (account[_0x47ab2f(0xfd)] = 0x0),
    (account[_0x47ab2f(0x10c)] = 0x0),
    (account[_0x47ab2f(0x11d)] = 0x0),
    getInputLevel(),
    board["reset"](),
    (time = {
      start: performance[_0x47ab2f(0x132)](),
      elapsed: 0x0,
      level: LEVEL[account[_0x47ab2f(0x11d)]],
    });
}
function _0x1d4b() {
  const _0xa52197 = [
    "fillRect",
    "removeEventListener",
    "textContent",
    "3868iMiEnh",
    "getElementById",
    "lines",
    "width",
    "6LxigXa",
    "setItem",
    "querySelector",
    "elapsed",
    "piece",
    "drop",
    "ESC",
    "innerHTML",
    "display",
    "height",
    "731688EXkSZg",
    "black",
    "280396ApRVrJ",
    "26181OzMgLe",
    "fillText",
    "level",
    "fillStyle",
    "5277168oLtcov",
    "canvas",
    "pause",
    "start",
    "hardDrop",
    "clearRect",
    "DOWN",
    "6250KsNkOf",
    "#dde2c1",
    "rotate",
    "GAME\x20OVER",
    "addEventListener",
    "red",
    "3189627AWIpCc",
    "next",
    "1px\x20Arial",
    "light",
    "font",
    "keyCode",
    "now",
    "setLevel",
    "none",
    "draw",
    "SOFT_DROP",
    "deltaY",
    "LEFT",
    "HARD_DROP",
    "move",
    "white",
    "play",
    "block",
    "style",
    "value",
    "preventDefault",
    "getContext",
    "getItem",
    "score",
    "highScore-2",
    "1505MKmaeO",
    "#pause-btn",
    "#play-btn",
    "SPACE",
    "806137zMzYYn",
    "PAUSED",
    "wheel",
    "change",
  ];
  _0x1d4b = function () {
    return _0xa52197;
  };
  return _0x1d4b();
}
function play() {
  const _0x545c11 = _0x5f5262;
  addEventListener(),
    document["querySelector"]("#play-btn")[_0x545c11(0xf8)]["display"] == "" &&
      resetGame(),
    requestId && cancelAnimationFrame(requestId),
    animate(),
    (document["querySelector"](_0x545c11(0x101))["style"][_0x545c11(0x116)] =
      "none"),
    (document["querySelector"]("#pause-btn")[_0x545c11(0xf8)]["display"] =
      "block"),
    backgroundSound[_0x545c11(0xf6)]();
}
function animate(_0x2863c1 = 0x0) {
  const _0x30fb93 = _0x5f5262;
  time[_0x30fb93(0x111)] = _0x2863c1 - time[_0x30fb93(0x122)];
  if (time[_0x30fb93(0x111)] > time[_0x30fb93(0x11d)]) {
    time[_0x30fb93(0x122)] = _0x2863c1;
    if (!board[_0x30fb93(0x113)]()) {
      gameOver();
      return;
    }
  }
  ctx[_0x30fb93(0x124)](
    0x0,
    0x0,
    ctx[_0x30fb93(0x120)]["width"],
    ctx[_0x30fb93(0x120)]["height"]
  ),
    board[_0x30fb93(0xef)](),
    (requestId = requestAnimationFrame(animate));
}
function gameOver() {
  const _0x255c69 = _0x5f5262;
  cancelAnimationFrame(requestId),
    (ctx["fillStyle"] = _0x255c69(0x119)),
    ctx[_0x255c69(0x107)](0x1, 0x3, 0x8, 1.2),
    (ctx[_0x255c69(0x130)] = _0x255c69(0x12e)),
    (ctx[_0x255c69(0x11e)] = _0x255c69(0x12b)),
    ctx["fillText"](_0x255c69(0x129), 1.8, 0x4),
    sound["pause"](),
    finishSound[_0x255c69(0xf6)](),
    (document[_0x255c69(0x110)](_0x255c69(0x100))[_0x255c69(0xf8)][
      _0x255c69(0x116)
    ] = _0x255c69(0x134)),
    (document["querySelector"](_0x255c69(0x101))[_0x255c69(0xf8)][
      _0x255c69(0x116)
    ] = "");
}
let select = document[_0x5f5262(0x110)]("select");
select[_0x5f5262(0x12a)](_0x5f5262(0x106), pause);
function pause() {
  const _0x1cb223 = _0x5f5262;
  if (!requestId) {
    (document[_0x1cb223(0x110)](_0x1cb223(0x101))["style"][_0x1cb223(0x116)] =
      _0x1cb223(0x134)),
      (document[_0x1cb223(0x110)]("#pause-btn")[_0x1cb223(0xf8)][
        _0x1cb223(0x116)
      ] = _0x1cb223(0xf7)),
      animate(),
      backgroundSound[_0x1cb223(0xf6)]();
    return;
  }
  cancelAnimationFrame(requestId), (requestId = null);
  let _0x3ec4f7 = select[_0x1cb223(0xf9)];
  _0x3ec4f7 === _0x1cb223(0x12f)
    ? ((ctx[_0x1cb223(0x11e)] = _0x1cb223(0x119)),
      ctx["fillRect"](0x1, 0x3, 0x8, 1.2),
      (ctx[_0x1cb223(0x130)] = _0x1cb223(0x12e)),
      (ctx["fillStyle"] = _0x1cb223(0xf5)),
      ctx[_0x1cb223(0x11c)](_0x1cb223(0x104), 0x3, 0x4),
      (document[_0x1cb223(0x110)](_0x1cb223(0x101))["style"][_0x1cb223(0x116)] =
        _0x1cb223(0xf7)),
      (document[_0x1cb223(0x110)]("#pause-btn")[_0x1cb223(0xf8)][
        _0x1cb223(0x116)
      ] = _0x1cb223(0x134)),
      sound["pause"]())
    : ((ctx[_0x1cb223(0x11e)] = "#223c3e"),
      ctx[_0x1cb223(0x107)](0x1, 0x3, 0x8, 1.2),
      (ctx[_0x1cb223(0x130)] = "1px\x20Arial"),
      (ctx[_0x1cb223(0x11e)] = _0x1cb223(0x127)),
      ctx[_0x1cb223(0x11c)](_0x1cb223(0x104), 0x3, 0x4),
      (document[_0x1cb223(0x110)]("#play-btn")["style"]["display"] =
        _0x1cb223(0xf7)),
      (document["querySelector"]("#pause-btn")["style"][_0x1cb223(0x116)] =
        "none"),
      sound[_0x1cb223(0x121)]());
}
var highScore = parseFloat(localStorage[_0x5f5262(0xfc)](_0x5f5262(0xfe)));
function highScores() {
  const _0x1e2ce3 = _0x5f5262;
  return (
    (highScore =
      highScore > account["score"] ? highScore : account[_0x1e2ce3(0xfd)]),
    localStorage[_0x1e2ce3(0x10f)](_0x1e2ce3(0xfe), highScore),
    highScore
  );
}
document[_0x5f5262(0x10b)](_0x5f5262(0xfe))[_0x5f5262(0x115)] = highScores();
function getInputLevel() {
  const _0x427681 = _0x5f5262;
  var _0x3af468 = document[_0x427681(0x10b)](_0x427681(0x133)),
    _0x188778 = _0x3af468[_0x427681(0xf9)];
  account[_0x427681(0x11d)] = _0x188778;
  if (account[_0x427681(0x11d)] < 0x1) account[_0x427681(0x11d)] = 0x1;
  if (account[_0x427681(0x11d)] > 0x14) account[_0x427681(0x11d)] = 0x14;
}
