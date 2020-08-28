const _0x17b6 = [
  "send",
  "[close]\x20Connection\x20died",
  "key",
  "\x20reason=",
  "record",
  "message",
  "onopen",
  "wasClean",
  "[open]\x20Connection\x20established",
  "stringify",
  "code",
  "get",
  "onerror",
  "data",
  "search",
  "[message]\x20Data\x20received\x20from\x20server:\x20",
  "log",
  "wss://7ees1u0qxk.execute-api.af-south-1.amazonaws.com/prod/",
  "onclose",
  "onmessage",
];
(function (_0x2f18d6, _0x17b6ce) {
  const _0x382f0b = function (_0x19ab11) {
    while (--_0x19ab11) {
      _0x2f18d6["push"](_0x2f18d6["shift"]());
    }
  };
  _0x382f0b(++_0x17b6ce);
})(_0x17b6, 0x12a);
const _0x382f = function (_0x2f18d6, _0x17b6ce) {
  _0x2f18d6 = _0x2f18d6 - 0x0;
  let _0x382f0b = _0x17b6[_0x2f18d6];
  return _0x382f0b;
};
const queryString = window["location"][_0x382f("0x10")],
  urlParams = new URLSearchParams(queryString),
  slugIn = urlParams[_0x382f("0xd")](_0x382f("0x4"));
let socket = new WebSocket(_0x382f("0x13"));
(socket[_0x382f("0x8")] = function (_0x45d0cb) {
  console[_0x382f("0x12")](_0x382f("0xa")),
    console[_0x382f("0x12")]("Sending\x20to\x20server"),
    (data = { action: _0x382f("0x6"), slug: slugIn }),
    socket[_0x382f("0x2")](JSON[_0x382f("0xb")](data));
}),
  (socket[_0x382f("0x1")] = function (_0x4dabf0) {
    console[_0x382f("0x12")](_0x382f("0x11") + _0x4dabf0[_0x382f("0xf")]);
  }),
  (socket[_0x382f("0x0")] = function (_0x1f5d6f) {
    _0x1f5d6f[_0x382f("0x9")]
      ? console[_0x382f("0x12")](
          "[close]\x20Connection\x20closed\x20cleanly,\x20code=" +
            _0x1f5d6f[_0x382f("0xc")] +
            _0x382f("0x5") +
            _0x1f5d6f["reason"]
        )
      : console["log"](_0x382f("0x3"));
  }),
  (socket[_0x382f("0xe")] = function (_0x21d90e) {
    console[_0x382f("0x12")]("[error]\x20" + _0x21d90e[_0x382f("0x7")]);
  });
