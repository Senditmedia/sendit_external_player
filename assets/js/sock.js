const _0x4b97 = [
  "13xQvICi",
  "getDate",
  "end_date",
  "3322729BaVoFW",
  "search",
  "[socket\x20close]\x20connection\x20died",
  "724923yxPhRs",
  "onMessage",
  "send",
  "location",
  "onopen",
  "sendMessage",
  "log",
  "stringify",
  "events",
  "socket",
  "[socket\x20close]\x20closed\x20cleanly",
  "482ZYheMa",
  "setDate",
  "action",
  "1eqIVqI",
  "onerror",
  "wss://chatsockdr.sendit.media/dev",
  "onunload",
  "3761lamkVe",
  "listeners",
  "wasClean",
  "368015lnQqVe",
  "33094YxQybp",
  "ERROR",
  "close",
  "616160bzYPne",
  "hostname",
  "wss://chatsockpr.sendit.media/production",
  "url",
  "wss://jrn1gpil42.execute-api.af-south-1.amazonaws.com/production",
  "1732539WfnMiY",
  "onclose",
  "data",
  "init",
  "joinStream",
  "get",
  "onmessage",
  "stream",
];
const _0x21e4 = function (_0x2c0f10, _0x4a6a90) {
  _0x2c0f10 = _0x2c0f10 - 0x199;
  let _0x4b9730 = _0x4b97[_0x2c0f10];
  return _0x4b9730;
};
const _0xb0c058 = _0x21e4;
(function (_0x5a68c4, _0x4791c1) {
  const _0x4ea8d1 = _0x21e4;
  while (!![]) {
    try {
      const _0x15aabb =
        parseInt(_0x4ea8d1(0x1be)) * parseInt(_0x4ea8d1(0x1b7)) +
        parseInt(_0x4ea8d1(0x199)) +
        parseInt(_0x4ea8d1(0x1c1)) +
        parseInt(_0x4ea8d1(0x1ac)) * -parseInt(_0x4ea8d1(0x1ba)) +
        parseInt(_0x4ea8d1(0x19e)) +
        parseInt(_0x4ea8d1(0x1a6)) * parseInt(_0x4ea8d1(0x1c2)) +
        -parseInt(_0x4ea8d1(0x1a9));
      if (_0x15aabb === _0x4791c1) break;
      else _0x5a68c4["push"](_0x5a68c4["shift"]());
    } catch (_0x3d595c) {
      _0x5a68c4["push"](_0x5a68c4["shift"]());
    }
  }
})(_0x4b97, 0xdead6);
const queryString1 = window[_0xb0c058(0x1af)][_0xb0c058(0x1aa)],
  urlParams1 = new URLSearchParams(queryString1),
  slugIn = urlParams1[_0xb0c058(0x1a3)]("key");
let socket = null;
class Socket {
  constructor(_0x319176, _0x2151c4) {
    const _0xac992d = _0xb0c058;
    if (
      window[_0xac992d(0x1af)][_0xac992d(0x19a)] === "externaldr.sendit.media"
    )
      this["url"] = _0xac992d(0x1bc);
    else
      window[_0xac992d(0x1af)][_0xac992d(0x19a)] === "externalpr.sendit.media"
        ? (this[_0xac992d(0x19c)] = _0xac992d(0x19b))
        : (this[_0xac992d(0x19c)] = _0xac992d(0x19d));
    (this[_0xac992d(0x1b5)] = null),
      (this["stream"] = { slug: _0x319176, end_date: _0x2151c4 }),
      (this["events"] = {}),
      (this[_0xac992d(0x1bf)] = {});
  }
  static async [_0xb0c058(0x1a1)](_0x4ae907) {
    const _0x230b12 = _0xb0c058;
    let _0x20a3bc = new Date();
    return (
      _0x20a3bc[_0x230b12(0x1b8)](_0x20a3bc[_0x230b12(0x1a7)]() + 0x2),
      new Socket(_0x4ae907, _0x20a3bc)
    );
  }
  [_0xb0c058(0x1ad)]() {
    const _0x531007 = _0xb0c058;
    (this["socket"][_0x531007(0x1a4)] = (_0x511afe) => {
      const _0x55be55 = _0x531007,
        _0x3d08e7 = JSON["parse"](_0x511afe[_0x55be55(0x1a0)] || "{}");
      (this[_0x55be55(0x1b4)][
        _0x3d08e7[_0x55be55(0x1b9)]
      ] = new CustomEvent(_0x3d08e7[_0x55be55(0x1b9)], { detail: _0x3d08e7 })),
        dispatchEvent(this["events"][_0x3d08e7[_0x55be55(0x1b9)]]);
    }),
      (this[_0x531007(0x1b5)][_0x531007(0x1bb)] = (_0x3da104) => {
        const _0x50a422 = _0x531007;
        dispatchEvent(new CustomEvent(_0x50a422(0x1c3), { detail: _0x3da104 }));
      }),
      (this["socket"][_0x531007(0x19f)] = (_0x20a963) => {
        const _0x5b4f19 = _0x531007;
        _0x20a963[_0x5b4f19(0x1c0)]
          ? console["log"](_0x5b4f19(0x1b6))
          : console["log"](_0x5b4f19(0x1ab));
      });
  }
  ["joinStream"]() {
    const _0x907075 = _0xb0c058;
    console[_0x907075(0x1b2)](_0x907075(0x1a2)),
      (this["socket"] = new WebSocket(this[_0x907075(0x19c)])),
      (this[_0x907075(0x1b5)][_0x907075(0x1b0)] = () => {
        const _0x50ff22 = _0x907075;
        this[_0x50ff22(0x1ad)]();
        const _0xb8fc7f = {
          action: "CONNECT_SAVE",
          slug: this[_0x50ff22(0x1a5)]["slug"],
          endDate: this[_0x50ff22(0x1a5)][_0x50ff22(0x1a8)],
          publisher: ![],
        };
        this[_0x50ff22(0x1b1)](_0xb8fc7f);
      });
  }
  ["on"](_0x1e1c4c, _0x1b8bbb) {
    const _0x35af31 = _0xb0c058;
    addEventListener(_0x1e1c4c, _0x1b8bbb),
      this[_0x35af31(0x1bf)][_0x1e1c4c]
        ? this[_0x35af31(0x1bf)][_0x1e1c4c]["push"](_0x1b8bbb)
        : (this[_0x35af31(0x1bf)][_0x1e1c4c] = [_0x1b8bbb]);
  }
  [_0xb0c058(0x1b1)](_0x457a15) {
    const _0x2f4d9e = _0xb0c058;
    this[_0x2f4d9e(0x1b5)][_0x2f4d9e(0x1ae)](JSON[_0x2f4d9e(0x1b3)](_0x457a15));
  }
  ["close"]() {
    const _0x4e19d9 = _0xb0c058;
    console["log"]("[socket\x20closing]"),
      this[_0x4e19d9(0x1b5)][_0x4e19d9(0x1c4)]();
    for (const _0x3535fd in this[_0x4e19d9(0x1bf)])
      for (const _0x4a4b89 of this[_0x4e19d9(0x1bf)][_0x3535fd])
        removeEventListener(_0x3535fd, _0x4a4b89);
  }
}
(window["onload"] = async () => {
  const _0x422fe3 = _0xb0c058;
  (socket = await Socket[_0x422fe3(0x1a1)](slugIn)),
    socket["on"](_0x422fe3(0x1c3), ({ detail: _0x1d1186 }) => {
      console["error"]("[socket\x20error]", _0x1d1186);
    }),
    socket[_0x422fe3(0x1a2)]();
}),
  (window[_0xb0c058(0x1bd)] = () => {
    const _0x482d86 = _0xb0c058;
    socket[_0x482d86(0x1c4)]();
  });
