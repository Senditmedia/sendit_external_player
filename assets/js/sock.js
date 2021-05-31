const _0x4d30 = [
  "[socket\x20error]",
  "getDate",
  "[socket\x20closing]",
  "data",
  "2FrSqof",
  "751FlEYiT",
  "send",
  "onmessage",
  "onopen",
  "934514TgPiMr",
  "get",
  "23284xixjSI",
  "listeners",
  "action",
  "events",
  "sendMessage",
  "push",
  "1rYAUlG",
  "onerror",
  "false",
  "stream",
  "[socket\x20close]\x20closed\x20cleanly",
  "153233EQFuRz",
  "hostname",
  "[socket\x20close]\x20connection\x20died",
  "onunload",
  "wss://chatsockdr.sendit.media/dev",
  "1558475dXrIyd",
  "url",
  "ERROR",
  "onload",
  "968063FiePuH",
  "onclose",
  "location",
  "28cEouvh",
  "CONNECT_SAVE",
  "socket",
  "search",
  "wss://jrn1gpil42.execute-api.af-south-1.amazonaws.com/production",
  "1213qbEXSh",
  "externaldr.sendit.media",
  "key",
  "close",
  "491ntBuee",
  "init",
  "parse",
  "true",
  "error",
  "417IYnskp",
  "slug",
  "log",
  "wss://chatsockpr.sendit.media/production",
  "end_date",
];
const _0x5090 = function (_0x2e35dd, _0x11548a) {
  _0x2e35dd = _0x2e35dd - 0x103;
  let _0x4d307f = _0x4d30[_0x2e35dd];
  return _0x4d307f;
};
const _0x231168 = _0x5090;
(function (_0x380004, _0x3a5e31) {
  const _0xca01ac = _0x5090;
  while (!![]) {
    try {
      const _0x4d0922 =
        parseInt(_0xca01ac(0x134)) +
        -parseInt(_0xca01ac(0x107)) * -parseInt(_0xca01ac(0x115)) +
        -parseInt(_0xca01ac(0x118)) * -parseInt(_0xca01ac(0x136)) +
        parseInt(_0xca01ac(0x10c)) * parseInt(_0xca01ac(0x12f)) +
        -parseInt(_0xca01ac(0x130)) * parseInt(_0xca01ac(0x11d)) +
        parseInt(_0xca01ac(0x126)) * parseInt(_0xca01ac(0x121)) +
        -parseInt(_0xca01ac(0x111));
      if (_0x4d0922 === _0x3a5e31) break;
      else _0x380004["push"](_0x380004["shift"]());
    } catch (_0x21e8a2) {
      _0x380004["push"](_0x380004["shift"]());
    }
  }
})(_0x4d30, 0x91950);
const queryString1 = window[_0x231168(0x117)][_0x231168(0x11b)],
  urlParams1 = new URLSearchParams(queryString1),
  slugIn = urlParams1["get"](_0x231168(0x11f)),
  socketEnable =
    urlParams1[_0x231168(0x135)](_0x231168(0x11a)) || _0x231168(0x124);
let socket = null;
class Socket {
  constructor(_0xc9e078, _0x563012) {
    const _0x52e368 = _0x231168;
    if (window[_0x52e368(0x117)][_0x52e368(0x10d)] === _0x52e368(0x11e))
      this[_0x52e368(0x112)] = _0x52e368(0x110);
    else
      window[_0x52e368(0x117)][_0x52e368(0x10d)] === "externalpr.sendit.media"
        ? (this["url"] = _0x52e368(0x129))
        : (this[_0x52e368(0x112)] = _0x52e368(0x11c));
    (this[_0x52e368(0x11a)] = null),
      (this[_0x52e368(0x10a)] = { slug: _0xc9e078, end_date: _0x563012 }),
      (this[_0x52e368(0x104)] = {}),
      (this[_0x52e368(0x137)] = {});
  }
  static async ["init"](_0x56a1d9) {
    const _0x2f9df4 = _0x231168;
    let _0x3fea40 = new Date();
    return (
      _0x3fea40["setDate"](_0x3fea40[_0x2f9df4(0x12c)]() + 0x2),
      new Socket(_0x56a1d9, _0x3fea40)
    );
  }
  ["onMessage"]() {
    const _0x2e85ce = _0x231168;
    (this[_0x2e85ce(0x11a)][_0x2e85ce(0x132)] = (_0x376e0a) => {
      const _0xc2d974 = _0x2e85ce,
        _0x592650 = JSON[_0xc2d974(0x123)](_0x376e0a[_0xc2d974(0x12e)] || "{}");
      (this[_0xc2d974(0x104)][_0x592650["action"]] = new CustomEvent(
        _0x592650["action"],
        { detail: _0x592650 }
      )),
        dispatchEvent(this[_0xc2d974(0x104)][_0x592650[_0xc2d974(0x103)]]);
    }),
      (this[_0x2e85ce(0x11a)][_0x2e85ce(0x108)] = (_0x2bb784) => {
        dispatchEvent(new CustomEvent("ERROR", { detail: _0x2bb784 }));
      }),
      (this["socket"][_0x2e85ce(0x116)] = (_0x3ec651) => {
        const _0x2f7a64 = _0x2e85ce;
        _0x3ec651["wasClean"]
          ? console[_0x2f7a64(0x128)](_0x2f7a64(0x10b))
          : console[_0x2f7a64(0x128)](_0x2f7a64(0x10e));
      });
  }
  ["joinStream"]() {
    const _0x7c591d = _0x231168;
    (this[_0x7c591d(0x11a)] = new WebSocket(this["url"])),
      (this[_0x7c591d(0x11a)][_0x7c591d(0x133)] = () => {
        const _0x8fae3b = _0x7c591d;
        this["onMessage"]();
        const _0x202b41 = {
          action: _0x8fae3b(0x119),
          slug: this[_0x8fae3b(0x10a)][_0x8fae3b(0x127)],
          endDate: this[_0x8fae3b(0x10a)][_0x8fae3b(0x12a)],
          publisher: ![],
        };
        this[_0x8fae3b(0x105)](_0x202b41);
      });
  }
  ["on"](_0x1293d5, _0x22ab6b) {
    const _0x5c37e7 = _0x231168;
    addEventListener(_0x1293d5, _0x22ab6b),
      this[_0x5c37e7(0x137)][_0x1293d5]
        ? this[_0x5c37e7(0x137)][_0x1293d5][_0x5c37e7(0x106)](_0x22ab6b)
        : (this[_0x5c37e7(0x137)][_0x1293d5] = [_0x22ab6b]);
  }
  [_0x231168(0x105)](_0x4ef975) {
    const _0x3eee52 = _0x231168;
    this[_0x3eee52(0x11a)][_0x3eee52(0x131)](JSON["stringify"](_0x4ef975));
  }
  [_0x231168(0x120)]() {
    const _0x5c5193 = _0x231168;
    console["log"](_0x5c5193(0x12d)), this[_0x5c5193(0x11a)]["close"]();
    for (const _0x3acb9a in this[_0x5c5193(0x137)])
      for (const _0x3948bf of this[_0x5c5193(0x137)][_0x3acb9a])
        removeEventListener(_0x3acb9a, _0x3948bf);
  }
}
(window[_0x231168(0x114)] = async () => {
  const _0x5cef39 = _0x231168;
  if (socketEnable === _0x5cef39(0x109)) return;
  else
    (socket = await Socket[_0x5cef39(0x122)](slugIn)),
      socket["on"](_0x5cef39(0x113), ({ detail: _0x5ec329 }) => {
        const _0x4d0fab = _0x5cef39;
        console[_0x4d0fab(0x125)](_0x4d0fab(0x12b), _0x5ec329);
      }),
      socket["joinStream"]();
}),
  (window[_0x231168(0x10f)] = () => {
    socket["close"]();
  });
