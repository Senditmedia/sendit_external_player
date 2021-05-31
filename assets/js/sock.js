const _0x5bdb = [
  "[socket\x20error]",
  "onload",
  "url",
  "push",
  "data",
  "CONNECT_SAVE",
  "57287DQLYxY",
  "765058jAjFKd",
  "19qeYiuP",
  "send",
  "key",
  "location",
  "1DeOaIz",
  "false",
  "get",
  "1000126isXFlj",
  "1kxQqxi",
  "socket",
  "476653uVViMe",
  "onerror",
  "194036VrXyHU",
  "events",
  "search",
  "init",
  "962290Yxzdhq",
  "onunload",
  "ERROR",
  "wasClean",
  "onMessage",
  "[socket\x20closing]",
  "error",
  "close",
  "onopen",
  "log",
  "sendMessage",
  "onmessage",
  "154973iONLwg",
  "listeners",
  "getDate",
  "stream",
  "slug",
  "action",
  "joinStream",
];
const _0xc2a656 = _0x269f;
(function (_0x23515f, _0x1f89d4) {
  const _0x1b9a96 = _0x269f;
  while (!![]) {
    try {
      const _0x3cf9da =
        parseInt(_0x1b9a96(0x84)) +
        -parseInt(_0x1b9a96(0x91)) +
        -parseInt(_0x1b9a96(0x8f)) +
        -parseInt(_0x1b9a96(0x85)) * parseInt(_0x1b9a96(0x83)) +
        parseInt(_0x1b9a96(0x95)) +
        parseInt(_0x1b9a96(0x8d)) * parseInt(_0x1b9a96(0x8c)) +
        parseInt(_0x1b9a96(0x76)) * -parseInt(_0x1b9a96(0x89));
      if (_0x3cf9da === _0x1f89d4) break;
      else _0x23515f["push"](_0x23515f["shift"]());
    } catch (_0x1de82a) {
      _0x23515f["push"](_0x23515f["shift"]());
    }
  }
})(_0x5bdb, 0xc692f);
const queryString1 = window[_0xc2a656(0x88)][_0xc2a656(0x93)],
  urlParams1 = new URLSearchParams(queryString1),
  slugIn = urlParams1[_0xc2a656(0x8b)](_0xc2a656(0x87)),
  socketEnable = urlParams1[_0xc2a656(0x8b)]("socket") || "true";
function _0x269f(_0x14c497, _0x46777c) {
  _0x14c497 = _0x14c497 - 0x6f;
  let _0x5bdb27 = _0x5bdb[_0x14c497];
  return _0x5bdb27;
}
let socket = null;
class Socket {
  constructor(_0x2b9942, _0x280e30) {
    const _0x495ead = _0xc2a656;
    (this[_0x495ead(0x7f)] =
      "wss://jrn1gpil42.execute-api.af-south-1.amazonaws.com/production"),
      (this[_0x495ead(0x8e)] = null),
      (this[_0x495ead(0x79)] = { slug: _0x2b9942, end_date: _0x280e30 }),
      (this[_0x495ead(0x92)] = {}),
      (this[_0x495ead(0x77)] = {});
  }
  static async ["init"](_0x5512ac) {
    const _0x412d1b = _0xc2a656;
    let _0x46d82e = new Date();
    return (
      _0x46d82e["setDate"](_0x46d82e[_0x412d1b(0x78)]() + 0x2),
      new Socket(_0x5512ac, _0x46d82e)
    );
  }
  [_0xc2a656(0x99)]() {
    const _0x3a778f = _0xc2a656;
    (this[_0x3a778f(0x8e)][_0x3a778f(0x75)] = (_0x4c6646) => {
      const _0x24a3ef = _0x3a778f,
        _0x25f739 = JSON["parse"](_0x4c6646[_0x24a3ef(0x81)] || "{}");
      (this[_0x24a3ef(0x92)][_0x25f739[_0x24a3ef(0x7b)]] = new CustomEvent(
        _0x25f739["action"],
        { detail: _0x25f739 }
      )),
        dispatchEvent(this[_0x24a3ef(0x92)][_0x25f739[_0x24a3ef(0x7b)]]);
    }),
      (this["socket"][_0x3a778f(0x90)] = (_0xaa6993) => {
        dispatchEvent(new CustomEvent("ERROR", { detail: _0xaa6993 }));
      }),
      (this[_0x3a778f(0x8e)]["onclose"] = (_0x17e4eb) => {
        const _0x938dfa = _0x3a778f;
        _0x17e4eb[_0x938dfa(0x98)]
          ? console[_0x938dfa(0x73)]("[socket\x20close]\x20closed\x20cleanly")
          : console[_0x938dfa(0x73)]("[socket\x20close]\x20connection\x20died");
      });
  }
  [_0xc2a656(0x7c)]() {
    const _0x4842be = _0xc2a656;
    (this["socket"] = new WebSocket(this[_0x4842be(0x7f)])),
      (this[_0x4842be(0x8e)][_0x4842be(0x72)] = () => {
        const _0x5329fe = _0x4842be;
        this["onMessage"]();
        const _0x58e880 = {
          action: _0x5329fe(0x82),
          slug: this["stream"][_0x5329fe(0x7a)],
          endDate: this[_0x5329fe(0x79)]["end_date"],
          publisher: ![],
        };
        this[_0x5329fe(0x74)](_0x58e880);
      });
  }
  ["on"](_0x11a64b, _0x1f40d6) {
    const _0x4428bd = _0xc2a656;
    addEventListener(_0x11a64b, _0x1f40d6),
      this[_0x4428bd(0x77)][_0x11a64b]
        ? this[_0x4428bd(0x77)][_0x11a64b][_0x4428bd(0x80)](_0x1f40d6)
        : (this[_0x4428bd(0x77)][_0x11a64b] = [_0x1f40d6]);
  }
  ["sendMessage"](_0x3493f8) {
    const _0x49c931 = _0xc2a656;
    this[_0x49c931(0x8e)][_0x49c931(0x86)](JSON["stringify"](_0x3493f8));
  }
  [_0xc2a656(0x71)]() {
    const _0x1d6ac3 = _0xc2a656;
    console["log"](_0x1d6ac3(0x6f)), this[_0x1d6ac3(0x8e)][_0x1d6ac3(0x71)]();
    for (const _0x42cae0 in this[_0x1d6ac3(0x77)])
      for (const _0x2d82ab of this[_0x1d6ac3(0x77)][_0x42cae0])
        removeEventListener(_0x42cae0, _0x2d82ab);
  }
}
(window[_0xc2a656(0x7e)] = async () => {
  const _0x59eca3 = _0xc2a656;
  if (socketEnable === _0x59eca3(0x8a)) return;
  else
    (socket = await Socket[_0x59eca3(0x94)](slugIn)),
      socket["on"](_0x59eca3(0x97), ({ detail: _0x5e0f87 }) => {
        const _0x276474 = _0x59eca3;
        console[_0x276474(0x70)](_0x276474(0x7d), _0x5e0f87);
      }),
      socket["joinStream"]();
}),
  (window[_0xc2a656(0x96)] = () => {
    const _0x15242d = _0xc2a656;
    socket[_0x15242d(0x71)]();
  });
