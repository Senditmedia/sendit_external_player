const _0x10e0 = [
  "message",
  "wasClean",
  "log",
  "record",
  "\x20reason=",
  "[open]\x20Connection\x20established",
  "[message]\x20Data\x20received\x20from\x20server:\x20",
  "[error]\x20",
  "onerror",
  "[close]\x20Connection\x20died",
  "[close]\x20Connection\x20closed\x20cleanly,\x20code=",
  "onmessage",
  "reason",
  "client",
  "stringify",
  "Sending\x20to\x20server",
  "onclose",
  "wss://7ees1u0qxk.execute-api.af-south-1.amazonaws.com/prod/",
];
(function (_0x4fdc5b, _0x10e004) {
  const _0x39b1f0 = function (_0x232da8) {
    while (--_0x232da8) {
      _0x4fdc5b["push"](_0x4fdc5b["shift"]());
    }
  };
  _0x39b1f0(++_0x10e004);
})(_0x10e0, 0x1b3);
const _0x39b1 = function (_0x4fdc5b, _0x10e004) {
  _0x4fdc5b = _0x4fdc5b - 0x0;
  let _0x39b1f0 = _0x10e0[_0x4fdc5b];
  return _0x39b1f0;
};
let socket = new WebSocket(_0x39b1("0xe"));
(socket["onopen"] = function (_0x514b8f) {
  console[_0x39b1("0x11")](_0x39b1("0x2")),
    console["log"](_0x39b1("0xc")),
    (data = { action: _0x39b1("0x0"), slug: _0x39b1("0xa") }),
    socket["send"](JSON[_0x39b1("0xb")](data));
}),
  (socket[_0x39b1("0x8")] = function (_0x57041f) {
    console[_0x39b1("0x11")](_0x39b1("0x3") + _0x57041f["data"]);
  }),
  (socket[_0x39b1("0xd")] = function (_0x2303a7) {
    _0x2303a7[_0x39b1("0x10")]
      ? console["log"](
          _0x39b1("0x7") +
            _0x2303a7["code"] +
            _0x39b1("0x1") +
            _0x2303a7[_0x39b1("0x9")]
        )
      : console[_0x39b1("0x11")](_0x39b1("0x6"));
  }),
  (socket[_0x39b1("0x5")] = function (_0x4c7f02) {
    console[_0x39b1("0x11")](_0x39b1("0x4") + _0x4c7f02[_0x39b1("0xf")]);
  });
