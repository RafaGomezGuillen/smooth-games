const _0x4c6710 = _0x5a18;
(function (_0x2cb729, _0x103e07) {
  const _0x49ed8e = _0x5a18,
    _0x6292c8 = _0x2cb729();
  while (!![]) {
    try {
      const _0x9d1f2f =
        (-parseInt(_0x49ed8e(0xeb)) / 0x1) *
          (-parseInt(_0x49ed8e(0xee)) / 0x2) +
        -parseInt(_0x49ed8e(0xe6)) / 0x3 +
        (-parseInt(_0x49ed8e(0xfa)) / 0x4) * (parseInt(_0x49ed8e(0xf3)) / 0x5) +
        (parseInt(_0x49ed8e(0xf8)) / 0x6) * (-parseInt(_0x49ed8e(0xec)) / 0x7) +
        -parseInt(_0x49ed8e(0x106)) / 0x8 +
        -parseInt(_0x49ed8e(0xf5)) / 0x9 +
        (-parseInt(_0x49ed8e(0xfe)) / 0xa) *
          (-parseInt(_0x49ed8e(0x104)) / 0xb);
      if (_0x9d1f2f === _0x103e07) break;
      else _0x6292c8["push"](_0x6292c8["shift"]());
    } catch (_0x1dc807) {
      _0x6292c8["push"](_0x6292c8["shift"]());
    }
  }
})(_0x7ae8, 0x613de);
function _0x5a18(_0x55c6c4, _0xd7a241) {
  const _0x7ae804 = _0x7ae8();
  return (
    (_0x5a18 = function (_0x5a1876, _0x2d783e) {
      _0x5a1876 = _0x5a1876 - 0xe6;
      let _0x584b3c = _0x7ae804[_0x5a1876];
      return _0x584b3c;
    }),
    _0x5a18(_0x55c6c4, _0xd7a241)
  );
}
class Piece {
  constructor(_0x2d0ff1) {
    const _0xcfaf28 = _0x5a18;
    (this["ctx"] = _0x2d0ff1), this[_0xcfaf28(0xfc)]();
  }
  [_0x4c6710(0xfc)]() {
    const _0x4cd3a3 = _0x4c6710;
    (this[_0x4cd3a3(0xf9)] = this[_0x4cd3a3(0xf4)](
      COLORS[_0x4cd3a3(0xf6)] - 0x1
    )),
      (this[_0x4cd3a3(0xe7)] = SHAPES[this[_0x4cd3a3(0xf9)]]),
      (this[_0x4cd3a3(0xfd)] = COLORS[this["typeId"]]),
      (this["x"] = 0x0),
      (this["y"] = 0x0),
      (this[_0x4cd3a3(0xf2)] = ![]);
  }
  ["draw"]() {
    const _0x1d0e54 = _0x4c6710;
    (this["ctx"][_0x1d0e54(0x101)] = this[_0x1d0e54(0xfd)]),
      (this[_0x1d0e54(0xf1)]["strokeStyle"] = _0x1d0e54(0x100)),
      (this[_0x1d0e54(0xf1)][_0x1d0e54(0x103)] = 0.05),
      this["shape"][_0x1d0e54(0xf7)]((_0x295379, _0x16c412) => {
        _0x295379["forEach"]((_0x3826b2, _0x14bd1e) => {
          const _0x57726d = _0x5a18;
          _0x3826b2 > 0x0 &&
            (this[_0x57726d(0xf1)][_0x57726d(0xfb)](
              this["x"] + _0x14bd1e,
              this["y"] + _0x16c412,
              0x1,
              0x1
            ),
            this[_0x57726d(0xf1)][_0x57726d(0xe9)](
              this["x"] + _0x14bd1e,
              this["y"] + _0x16c412,
              0x1,
              0x1
            ));
        });
      });
  }
  ["drawGhost"]() {
    const _0x121c6e = _0x4c6710;
    let _0x17f359 = this["x"],
      _0x57f54a = this["y"];
    while (
      board[_0x121c6e(0x102)](
        moves[KEY[_0x121c6e(0xea)]]({ ...this, x: _0x17f359, y: _0x57f54a })
      )
    ) {
      _0x57f54a++;
    }
    (this[_0x121c6e(0xf1)][_0x121c6e(0x101)] = this[_0x121c6e(0xfd)]
      [_0x121c6e(0xef)]("rgb", _0x121c6e(0xff))
      [_0x121c6e(0xef)](")", ",\x200.2)")),
      (this[_0x121c6e(0xf1)][_0x121c6e(0xed)] = _0x121c6e(0x100)),
      this[_0x121c6e(0xe7)]["forEach"]((_0x354e5e, _0x3bd741) => {
        const _0x49143b = _0x121c6e;
        _0x354e5e[_0x49143b(0xf7)]((_0x24f699, _0x70144f) => {
          const _0x84698e = _0x49143b;
          _0x24f699 > 0x0 &&
            (this["ctx"][_0x84698e(0xfb)](
              _0x17f359 + _0x70144f,
              _0x57f54a + _0x3bd741,
              0x1,
              0x1
            ),
            this[_0x84698e(0xf1)][_0x84698e(0xe9)](
              _0x17f359 + _0x70144f,
              _0x57f54a + _0x3bd741,
              0x1,
              0x1
            ));
        });
      });
  }
  ["move"](_0x968459) {
    const _0x52c5ac = _0x4c6710;
    !this[_0x52c5ac(0xf2)] &&
      ((this["x"] = _0x968459["x"]), (this["y"] = _0x968459["y"])),
      (this[_0x52c5ac(0xe7)] = _0x968459[_0x52c5ac(0xe7)]);
  }
  [_0x4c6710(0xe8)]() {
    const _0x103a44 = _0x4c6710;
    this[_0x103a44(0xf2)] = !![];
  }
  [_0x4c6710(0xf0)]() {
    const _0x120ca6 = _0x4c6710;
    this["x"] = this[_0x120ca6(0xf9)] === 0x4 ? 0x4 : 0x3;
  }
  ["randomizeTetrominoType"](_0x3a1376) {
    const _0x338822 = _0x4c6710;
    return Math[_0x338822(0x105)](Math["random"]() * _0x3a1376 + 0x1);
  }
}
function _0x7ae8() {
  const _0x525630 = [
    "10636571pBhEfo",
    "floor",
    "898176CRszuY",
    "1181112mfymCq",
    "shape",
    "hardDrop",
    "strokeRect",
    "DOWN",
    "1qQGlYR",
    "1267119clfMfy",
    "strokeStyle",
    "1212862yVPljn",
    "replace",
    "setStartingPosition",
    "ctx",
    "hardDropped",
    "20sfLeqz",
    "randomizeTetrominoType",
    "1109367cHHWiw",
    "length",
    "forEach",
    "24KctsIp",
    "typeId",
    "788744MJyLNF",
    "fillRect",
    "spawn",
    "color",
    "20SfavAh",
    "rgba",
    "black",
    "fillStyle",
    "valid",
    "lineWidth",
  ];
  _0x7ae8 = function () {
    return _0x525630;
  };
  return _0x7ae8();
}
