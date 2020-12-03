const _0x4e84 = [
  "[socket\x20error]",
  "[socket\x20close]\x20closed\x20cleanly",
  "init",
  "[socket\x20closing]",
  "onclose",
  "push",
  "socket",
  "[socket\x20close]\x20connection\x20died",
  "ERROR",
  "https://api.sendit.media/api/content/stream/",
  "onload",
  "CONNECT_SAVE",
  "listeners",
  "onunload",
  "send",
  "then",
  "error",
  "slug",
  "onopen",
  "action",
  "stream",
  "close",
  "onMessage",
  "key",
  "onmessage",
  "end_date",
  "get",
  "parse",
  "log",
  "joinStream",
  "json",
  "wasClean",
  "search",
  "data",
  "events",
  "sendMessage",
  "url",
  "wss://jrn1gpil42.execute-api.af-south-1.amazonaws.com/production",
];
(function (_0x2a7437, _0x3f1a9c) {
  const _0x4e842f = function (_0x4682ca) {
    while (--_0x4682ca) {
      _0x2a7437["push"](_0x2a7437["shift"]());
    }
  };
  _0x4e842f(++_0x3f1a9c);
})(_0x4e84, 0x9c);
const _0x4682 = function (_0x2a7437, _0x3f1a9c) {
  _0x2a7437 = _0x2a7437 - 0xe3;
  let _0x4e842f = _0x4e84[_0x2a7437];
  return _0x4e842f;
};
const _0x451033 = _0x4682,
  queryString1 = window["location"][_0x451033(0xff)],
  urlParams1 = new URLSearchParams(queryString1),
  slugIn = urlParams1[_0x451033(0xf9)](_0x451033(0xf6));
let socket = null;
class Socket {
  constructor(_0x3015fc, _0x23c8a0) {
    const _0xfaa836 = _0x451033;
    (this[_0xfaa836(0x103)] = _0xfaa836(0x104)),
      (this["socket"] = null),
      (this[_0xfaa836(0xf3)] = { slug: _0x3015fc, end_date: _0x23c8a0 }),
      (this[_0xfaa836(0x101)] = {}),
      (this["listeners"] = {});
  }
  static async [_0x451033(0x107)](_0x3fa717) {
    const _0x3820cd = _0x451033,
      { end_date: _0x3b5313 } = await fetch(_0x3820cd(0xe8) + _0x3fa717 + "/")
        [_0x3820cd(0xee)]((_0xf666db) => _0xf666db[_0x3820cd(0xfd)]())
        [_0x3820cd(0xee)]((_0x18507b) => _0x18507b[0x0]);
    return new Socket(_0x3fa717, _0x3b5313);
  }
  [_0x451033(0xf5)]() {
    const _0x4a42f0 = _0x451033;
    (this["socket"][_0x4a42f0(0xf7)] = (_0x36d8e4) => {
      const _0x309f3f = _0x4a42f0,
        _0x54a526 = JSON[_0x309f3f(0xfa)](_0x36d8e4[_0x309f3f(0x100)] || "{}");
      (this[_0x309f3f(0x101)][
        _0x54a526[_0x309f3f(0xf2)]
      ] = new CustomEvent(_0x54a526[_0x309f3f(0xf2)], { detail: _0x54a526 })),
        dispatchEvent(this[_0x309f3f(0x101)][_0x54a526["action"]]);
    }),
      (this[_0x4a42f0(0xe5)]["onerror"] = (_0x574a3e) => {
        const _0x1b45d4 = _0x4a42f0;
        dispatchEvent(new CustomEvent(_0x1b45d4(0xe7), { detail: _0x574a3e }));
      }),
      (this["socket"][_0x4a42f0(0xe3)] = (_0x30a6d2) => {
        const _0x378ce1 = _0x4a42f0;
        _0x30a6d2[_0x378ce1(0xfe)]
          ? console[_0x378ce1(0xfb)](_0x378ce1(0x106))
          : console["log"](_0x378ce1(0xe6));
      });
  }
  [_0x451033(0xfc)]() {
    const _0x4e66d5 = _0x451033;
    (this[_0x4e66d5(0xe5)] = new WebSocket(this[_0x4e66d5(0x103)])),
      (this["socket"][_0x4e66d5(0xf1)] = () => {
        const _0x9a23c3 = _0x4e66d5;
        this[_0x9a23c3(0xf5)]();
        const _0x308999 = {
          action: _0x9a23c3(0xea),
          slug: this[_0x9a23c3(0xf3)][_0x9a23c3(0xf0)],
          endDate: this[_0x9a23c3(0xf3)][_0x9a23c3(0xf8)],
          publisher: ![],
        };
        this[_0x9a23c3(0x102)](_0x308999);
      });
  }
  ["on"](_0x4a07ca, _0x42ab8b) {
    const _0x59bad5 = _0x451033;
    addEventListener(_0x4a07ca, _0x42ab8b),
      this[_0x59bad5(0xeb)][_0x4a07ca]
        ? this[_0x59bad5(0xeb)][_0x4a07ca][_0x59bad5(0xe4)](_0x42ab8b)
        : (this["listeners"][_0x4a07ca] = [_0x42ab8b]);
  }
  [_0x451033(0x102)](_0x4cc196) {
    const _0xc4711 = _0x451033;
    this[_0xc4711(0xe5)][_0xc4711(0xed)](JSON["stringify"](_0x4cc196));
  }
  [_0x451033(0xf4)]() {
    const _0x44821a = _0x451033;
    console[_0x44821a(0xfb)](_0x44821a(0x108)),
      this[_0x44821a(0xe5)][_0x44821a(0xf4)]();
    for (const _0x3f28f7 in this["listeners"])
      for (const _0x8e83f2 of this["listeners"][_0x3f28f7])
        removeEventListener(_0x3f28f7, _0x8e83f2);
  }
}
(window[_0x451033(0xe9)] = async () => {
  const _0x9e90a7 = _0x451033;
  (socket = await Socket[_0x9e90a7(0x107)](slugIn)),
    socket["on"](_0x9e90a7(0xe7), ({ detail: _0xacb97a }) => {
      const _0x110423 = _0x9e90a7;
      console[_0x110423(0xef)](_0x110423(0x105), _0xacb97a);
    }),
    socket["joinStream"]();
}),
  (window[_0x451033(0xec)] = () => {
    const _0x4472b5 = _0x451033;
    socket[_0x4472b5(0xf4)]();
  });
