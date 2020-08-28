const _0x3f03 = [
  "onmessage",
  "data",
  "record",
  "\x20reason=",
  "[message]\x20Data\x20received\x20from\x20server:\x20",
  "get",
  "key",
  "search",
  "code",
  "message",
  "onerror",
  "log",
  "send",
  "[close]\x20Connection\x20closed\x20cleanly,\x20code=",
  "location",
  "wasClean",
  "[close]\x20Connection\x20died",
  "[error]\x20",
  "reason",
];
(function (_0x257fa7, _0x3f03e1) {
  const _0x451fa4 = function (_0xbe88ae) {
    while (--_0xbe88ae) {
      _0x257fa7["push"](_0x257fa7["shift"]());
    }
  };
  _0x451fa4(++_0x3f03e1);
})(_0x3f03, 0x101);
const _0x451f = function (_0x257fa7, _0x3f03e1) {
  _0x257fa7 = _0x257fa7 - 0x0;
  let _0x451fa4 = _0x3f03[_0x257fa7];
  return _0x451fa4;
};
const queryString = window[_0x451f("0x4")][_0x451f("0x10")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x451f("0xe")](_0x451f("0xf"));
let socket = new WebSocket(
  "wss://7ees1u0qxk.execute-api.af-south-1.amazonaws.com/prod/"
);
(socket["onopen"] = function (_0x1c2519) {
  console[_0x451f("0x1")]("[open]\x20Connection\x20established"),
    console[_0x451f("0x1")]("Sending\x20to\x20server"),
    (data = { action: _0x451f("0xb"), slug: key }),
    socket[_0x451f("0x2")](JSON["stringify"](data));
}),
  (socket[_0x451f("0x9")] = function (_0xd5d7b) {
    console[_0x451f("0x1")](_0x451f("0xd") + _0xd5d7b[_0x451f("0xa")]);
  }),
  (socket["onclose"] = function (_0x3db771) {
    _0x3db771[_0x451f("0x5")]
      ? console["log"](
          _0x451f("0x3") +
            _0x3db771[_0x451f("0x11")] +
            _0x451f("0xc") +
            _0x3db771[_0x451f("0x8")]
        )
      : console[_0x451f("0x1")](_0x451f("0x6"));
  }),
  (socket[_0x451f("0x0")] = function (_0x2c79b0) {
    console[_0x451f("0x1")](_0x451f("0x7") + _0x2c79b0[_0x451f("0x12")]);
  });
