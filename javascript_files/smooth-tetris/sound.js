const _0x294355 = _0x2d22;
(function (_0x121b39, _0x1bcc66) {
  const _0x2badc8 = _0x2d22,
    _0x22cfea = _0x121b39();
  while (!![]) {
    try {
      const _0x231f99 =
        parseInt(_0x2badc8(0x1c3)) / 0x1 +
        parseInt(_0x2badc8(0x1c1)) / 0x2 +
        (-parseInt(_0x2badc8(0x1d7)) / 0x3) *
          (-parseInt(_0x2badc8(0x1c8)) / 0x4) +
        parseInt(_0x2badc8(0x1db)) / 0x5 +
        (parseInt(_0x2badc8(0x1c5)) / 0x6) *
          (parseInt(_0x2badc8(0x1c4)) / 0x7) +
        (-parseInt(_0x2badc8(0x1d8)) / 0x8) *
          (-parseInt(_0x2badc8(0x1d6)) / 0x9) +
        -parseInt(_0x2badc8(0x1ca)) / 0xa;
      if (_0x231f99 === _0x1bcc66) break;
      else _0x22cfea["push"](_0x22cfea["shift"]());
    } catch (_0x410bda) {
      _0x22cfea["push"](_0x22cfea["shift"]());
    }
  }
})(_0x1bec, 0xe88dd);
function _0x2d22(_0x385ed1, _0xface33) {
  const _0x1bec75 = _0x1bec();
  return (
    (_0x2d22 = function (_0x2d22a5, _0x51c670) {
      _0x2d22a5 = _0x2d22a5 - 0x1b7;
      let _0x9acfe9 = _0x1bec75[_0x2d22a5];
      return _0x9acfe9;
    }),
    _0x2d22(_0x385ed1, _0xface33)
  );
}
class Sound {
  constructor(_0x1bb43d) {
    const _0x312257 = _0x2d22;
    (this["parent"] = _0x1bb43d),
      (this[_0x312257(0x1cf)] = []),
      (this[_0x312257(0x1be)] = !![]);
  }
  [_0x294355(0x1bc)](_0x1e7367, _0xc1ae42, _0x19fa4c = ![]) {
    const _0x138025 = _0x294355;
    let _0x3c0bb5 = document[_0x138025(0x1da)](_0x138025(0x1bb));
    return (
      (_0x3c0bb5[_0x138025(0x1b8)] = _0x1e7367),
      (_0x3c0bb5["id"] = _0xc1ae42),
      (_0x3c0bb5[_0x138025(0x1be)] = !![]),
      this[_0x138025(0x1cf)][_0x138025(0x1d4)](_0x3c0bb5),
      this["parent"][_0x138025(0x1d0)](_0x3c0bb5),
      _0x19fa4c && _0x3c0bb5["setAttribute"]("loop", ""),
      _0x3c0bb5
    );
  }
}
(Sound[_0x294355(0x1d3)]["soundSetting"] = function () {
  const _0x1b7694 = _0x294355;
  let _0x4b7e97 = document[_0x1b7694(0x1cd)](_0x1b7694(0x1d5));
  for (let _0x28871b of _0x4b7e97) {
    _0x28871b["addEventListener"](_0x1b7694(0x1c7), (_0x240cae) => {
      const _0x2ac36f = _0x1b7694;
      this[_0x2ac36f(0x1b7)]();
    });
  }
}),
  (Sound[_0x294355(0x1d3)][_0x294355(0x1b7)] = function () {
    const _0xc687e = _0x294355;
    if (!this[_0xc687e(0x1be)]) {
      for (let _0xbebd62 of this[_0xc687e(0x1cf)]) {
        _0xbebd62[_0xc687e(0x1be)] = !![];
      }
      (document[_0xc687e(0x1bd)](_0xc687e(0x1bf))[_0xc687e(0x1d9)] = "🔇"),
        (this["muted"] = !![]);
    } else {
      for (let _0x1b9e62 of this[_0xc687e(0x1cf)]) {
        _0x1b9e62[_0xc687e(0x1be)] = ![];
      }
      (document["querySelector"](_0xc687e(0x1bf))[_0xc687e(0x1d9)] = "🔉"),
        (this[_0xc687e(0x1be)] = ![]);
    }
  }),
  (Sound[_0x294355(0x1d3)][_0x294355(0x1cc)] = function () {
    const _0x5f06b2 = _0x294355;
    for (let _0x539b50 of this[_0x5f06b2(0x1cf)]) {
      _0x539b50["pause"]();
    }
  }),
  (Sound[_0x294355(0x1d3)][_0x294355(0x1c9)] = function () {
    const _0x25fece = _0x294355;
    for (let _0x7b6239 of this[_0x25fece(0x1cf)]) {
      _0x7b6239["play"]();
    }
  });
let sound = new Sound(document[_0x294355(0x1bd)](_0x294355(0x1c6))),
  backgroundSound = sound[_0x294355(0x1bc)](
    "assets/sounds/Dungeon_Theme.mp3",
    _0x294355(0x1ba),
    !![]
  ),
  movesSound = sound[_0x294355(0x1bc)](_0x294355(0x1b9), _0x294355(0x1ce)),
  dropSound = sound[_0x294355(0x1bc)](_0x294355(0x1c0), "drop_sound"),
  pointsSound = sound[_0x294355(0x1bc)](_0x294355(0x1d2), _0x294355(0x1c2)),
  finishSound = sound[_0x294355(0x1bc)](_0x294355(0x1cb), _0x294355(0x1d1));
function _0x1bec() {
  const _0x282411 = [
    "assets/sounds/finish.mp3",
    "pause",
    "querySelectorAll",
    "moves_sound",
    "sounds",
    "append",
    "finish_sound",
    "assets/sounds/points.mp3",
    "prototype",
    "push",
    ".sound-item",
    "72vDmfsf",
    "213FtzbZd",
    "758192zkOwLD",
    "innerHTML",
    "createElement",
    "3052385GeiieZ",
    "muteToggle",
    "src",
    "assets/sounds/moves.mp3",
    "background_sound",
    "audio",
    "create",
    "querySelector",
    "muted",
    "#sound-speaker",
    "assets/sounds/drop.mp3",
    "1538034wrBubi",
    "points_sound",
    "644501IdoIXA",
    "25081MlALcY",
    "1080DNOXMy",
    "#sound-div",
    "click",
    "12516kJlLtt",
    "play",
    "26967450AMrMVv",
  ];
  _0x1bec = function () {
    return _0x282411;
  };
  return _0x1bec();
}
sound[_0x294355(0x1b7)](), sound["soundSetting"]();
