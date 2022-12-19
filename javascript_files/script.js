// Disable Right Click
document.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);
document.addEventListener("keydown", (e) => {
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});
function _0x137e() {
  var _0x5ce4c5 = [
    "settings-content",
    "#selTheme",
    "value",
    "display",
    "12111471uhkqth",
    "style",
    "classList",
    "my_menu",
    "1923158arpuaM",
    "body",
    "749488LcWGpt",
    "matches",
    "Come\x20back\x20:(",
    "theme-light",
    "selected",
    "show",
    "theme",
    "toggle",
    "length",
    "target",
    "theme-dark",
    "7848035hSEhPZ",
    "803603RCmYvy",
    "querySelectorAll",
    "querySelector",
    "contains",
    "theme-",
    "6VWZuqh",
    "theme-auto",
    ".menu-button",
    "getItem",
    "blur",
    "7467054MZVatI",
    "addEventListener",
    "none",
    "add",
    "getElementById",
    "focus",
    "remove",
    "2590584yNyPLA",
    "getElementsByClassName",
    "title",
    "3pCxHeB",
  ];
  _0x137e = function () {
    return _0x5ce4c5;
  };
  return _0x137e();
}
var _0x2f2376 = _0x2d62;
(function (_0x51d2ed, _0x587ef9) {
  var _0x403e89 = _0x2d62,
    _0x740649 = _0x51d2ed();
  while (!![]) {
    try {
      var _0x51e47b =
        parseInt(_0x403e89(0x1ac)) / 0x1 +
        (parseInt(_0x403e89(0x1c9)) / 0x2) *
          (parseInt(_0x403e89(0x1c0)) / 0x3) +
        parseInt(_0x403e89(0x1cb)) / 0x4 +
        (-parseInt(_0x403e89(0x1ab)) / 0x5) *
          (parseInt(_0x403e89(0x1b1)) / 0x6) +
        -parseInt(_0x403e89(0x1b6)) / 0x7 +
        parseInt(_0x403e89(0x1bd)) / 0x8 +
        parseInt(_0x403e89(0x1c5)) / 0x9;
      if (_0x51e47b === _0x587ef9) break;
      else _0x740649["push"](_0x740649["shift"]());
    } catch (_0x3a7865) {
      _0x740649["push"](_0x740649["shift"]());
    }
  }
})(_0x137e, 0xf0aa7);
function _0x2d62(_0x509dd3, _0x539255) {
  var _0x137e00 = _0x137e();
  return (
    (_0x2d62 = function (_0x2d627c, _0x1a09f9) {
      _0x2d627c = _0x2d627c - 0x1ab;
      var _0x40d8ea = _0x137e00[_0x2d627c];
      return _0x40d8ea;
    }),
    _0x2d62(_0x509dd3, _0x539255)
  );
}
function displayMenu() {
  var _0x10cf3d = _0x2d62;
  document[_0x10cf3d(0x1ba)](_0x10cf3d(0x1c8))[_0x10cf3d(0x1c7)][
    _0x10cf3d(0x1d2)
  ](_0x10cf3d(0x1d0));
}
window["onclick"] = function (_0x377c7f) {
  var _0x1e98d1 = _0x2d62;
  if (!_0x377c7f[_0x1e98d1(0x1d4)][_0x1e98d1(0x1cc)](_0x1e98d1(0x1b3))) {
    var _0x56d304 = document[_0x1e98d1(0x1be)]("menu-content"),
      _0x789a84;
    for (
      _0x789a84 = 0x0;
      _0x789a84 < _0x56d304[_0x1e98d1(0x1d3)];
      _0x789a84++
    ) {
      var _0x1aaf5e = _0x56d304[_0x789a84];
      _0x1aaf5e[_0x1e98d1(0x1c7)][_0x1e98d1(0x1af)](_0x1e98d1(0x1d0)) &&
        _0x1aaf5e[_0x1e98d1(0x1c7)][_0x1e98d1(0x1bc)](_0x1e98d1(0x1d0));
    }
  }
};
function applyTheme(_0xd9399f) {
  var _0x4b6fe1 = _0x2d62;
  document[_0x4b6fe1(0x1ca)][_0x4b6fe1(0x1c7)]["remove"](
    _0x4b6fe1(0x1b2),
    _0x4b6fe1(0x1ce),
    _0x4b6fe1(0x1d5)
  ),
    document[_0x4b6fe1(0x1ca)][_0x4b6fe1(0x1c7)][_0x4b6fe1(0x1b9)](
      _0x4b6fe1(0x1b0) + _0xd9399f
    );
}
document["addEventListener"]("DOMContentLoaded", () => {
  var _0x21621c = _0x2d62;
  const _0x2a9c4e = localStorage[_0x21621c(0x1b4)](_0x21621c(0x1d1)) || "auto";
  applyTheme(_0x2a9c4e);
  for (const _0x3e6f70 of document[_0x21621c(0x1ad)]("#selTheme\x20option")) {
    _0x3e6f70[_0x21621c(0x1cf)] = _0x2a9c4e === _0x3e6f70[_0x21621c(0x1c3)];
  }
  document[_0x21621c(0x1ae)](_0x21621c(0x1c2))[_0x21621c(0x1b7)](
    "change",
    function () {
      var _0x31dbbc = _0x21621c;
      localStorage["setItem"](_0x31dbbc(0x1d1), this["value"]),
        applyTheme(this[_0x31dbbc(0x1c3)]);
    }
  );
});
function showSettings() {
  var _0x158f07 = _0x2d62,
    _0x7973a4 = document[_0x158f07(0x1ba)](_0x158f07(0x1c1));
  _0x7973a4["style"][_0x158f07(0x1c4)] === _0x158f07(0x1b8)
    ? (_0x7973a4[_0x158f07(0x1c6)][_0x158f07(0x1c4)] = "block")
    : (_0x7973a4[_0x158f07(0x1c6)][_0x158f07(0x1c4)] = "none");
}
let docTitle = document[_0x2f2376(0x1bf)];
window[_0x2f2376(0x1b7)](_0x2f2376(0x1b5), () => {
  var _0x27ddb3 = _0x2f2376;
  document[_0x27ddb3(0x1bf)] = _0x27ddb3(0x1cd);
}),
  window["addEventListener"](_0x2f2376(0x1bb), () => {
    var _0x1574b1 = _0x2f2376;
    document[_0x1574b1(0x1bf)] = docTitle;
  });
