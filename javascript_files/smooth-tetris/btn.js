function _0x3760() {
  const _0x40c4fd = [
    "dispatchEvent",
    "keydown",
    "click",
    "31722TbcmzP",
    "2852460sWhPaa",
    "1403241evSwek",
    "11vHMmip",
    "760595EJyJzp",
    "123282biAruJ",
    "2537776FEtLrw",
    "91gKrwrm",
    "17kvjrDE",
    "18VXdbsC",
    "left",
    "8ZFPqFb",
    "1816356vQrqVd",
    "getElementById",
    "addEventListener",
  ];
  _0x3760 = function () {
    return _0x40c4fd;
  };
  return _0x3760();
}
const _0x362835 = _0x2563;
(function (_0x48b67b, _0x43d515) {
  const _0x41aa00 = _0x2563,
    _0xfad04d = _0x48b67b();
  while (!![]) {
    try {
      const _0x4c9d2a =
        (-parseInt(_0x41aa00(0xda)) / 0x1) * (parseInt(_0x41aa00(0xd2)) / 0x2) +
        -parseInt(_0x41aa00(0xd4)) / 0x3 +
        (parseInt(_0x41aa00(0xdd)) / 0x4) * (parseInt(_0x41aa00(0xd6)) / 0x5) +
        (parseInt(_0x41aa00(0xd7)) / 0x6) * (-parseInt(_0x41aa00(0xd9)) / 0x7) +
        parseInt(_0x41aa00(0xd8)) / 0x8 +
        (-parseInt(_0x41aa00(0xdb)) / 0x9) *
          (-parseInt(_0x41aa00(0xd3)) / 0xa) +
        (parseInt(_0x41aa00(0xd5)) / 0xb) * (parseInt(_0x41aa00(0xde)) / 0xc);
      if (_0x4c9d2a === _0x43d515) break;
      else _0xfad04d["push"](_0xfad04d["shift"]());
    } catch (_0x54d836) {
      _0xfad04d["push"](_0xfad04d["shift"]());
    }
  }
})(_0x3760, 0x52b84);
const upButton = document["getElementById"]("up"),
  downButton = document["getElementById"]("down"),
  leftButton = document[_0x362835(0xdf)](_0x362835(0xdc)),
  rightButton = document[_0x362835(0xdf)]("right"),
  spaceButton = document[_0x362835(0xdf)]("space");
function _0x2563(_0x18b64b, _0x4bb3a4) {
  const _0x37607e = _0x3760();
  return (
    (_0x2563 = function (_0x2563c8, _0x3b8fa0) {
      _0x2563c8 = _0x2563c8 - 0xd1;
      let _0x1b70ad = _0x37607e[_0x2563c8];
      return _0x1b70ad;
    }),
    _0x2563(_0x18b64b, _0x4bb3a4)
  );
}
upButton[_0x362835(0xe0)](_0x362835(0xd1), () => {
  const _0xb801d0 = _0x362835;
  document[_0xb801d0(0xe1)](
    new KeyboardEvent(_0xb801d0(0xe2), { keyCode: 0x26 })
  );
}),
  downButton["addEventListener"]("click", () => {
    document["dispatchEvent"](new KeyboardEvent("keydown", { keyCode: 0x28 }));
  }),
  leftButton[_0x362835(0xe0)](_0x362835(0xd1), () => {
    const _0x41dce8 = _0x362835;
    document[_0x41dce8(0xe1)](
      new KeyboardEvent(_0x41dce8(0xe2), { keyCode: 0x25 })
    );
  }),
  rightButton[_0x362835(0xe0)]("click", () => {
    const _0x2b981a = _0x362835;
    document["dispatchEvent"](
      new KeyboardEvent(_0x2b981a(0xe2), { keyCode: 0x27 })
    );
  }),
  spaceButton[_0x362835(0xe0)](_0x362835(0xd1), () => {
    const _0x4d8f1b = _0x362835;
    document["dispatchEvent"](
      new KeyboardEvent(_0x4d8f1b(0xe2), { keyCode: 0x20 })
    );
  });
