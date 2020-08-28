const _0x32d2 = [
  "wasClean",
  "data",
  "reason",
  "log",
  "stringify",
  "onopen",
  "onclose",
  "send",
  "onmessage",
  "search",
  "wss://7ees1u0qxk.execute-api.af-south-1.amazonaws.com/prod/",
  "[close]\x20Connection\x20died",
  "key",
  "code",
  "location",
  "[open]\x20Connection\x20established",
  "[error]\x20",
  "[message]\x20Data\x20received\x20from\x20server:\x20",
  "message",
  "\x20reason=",
  "record",
  "onerror",
];
(function (_0x464aa8, _0x32d210) {
  const _0x57ae81 = function (_0x4ff820) {
    while (--_0x4ff820) {
      _0x464aa8["push"](_0x464aa8["shift"]());
    }
  };
  _0x57ae81(++_0x32d210);
})(_0x32d2, 0x18b);
const _0x57ae = function (_0x464aa8, _0x32d210) {
  _0x464aa8 = _0x464aa8 - 0x0;
  let _0x57ae81 = _0x32d2[_0x464aa8];
  return _0x57ae81;
};
const queryString1 = window[_0x57ae("0xf")][_0x57ae("0xa")],
  urlParams1 = new URLSearchParams(queryString1),
  slugIn = urlParams1["get"](_0x57ae("0xd"));
let socket = new WebSocket(_0x57ae("0xb"));
(socket[_0x57ae("0x6")] = function (_0x1c4419) {
  console[_0x57ae("0x4")](_0x57ae("0x10")),
    console[_0x57ae("0x4")]("Sending\x20to\x20server"),
    (data = { action: _0x57ae("0x15"), slug: slugIn }),
    socket[_0x57ae("0x8")](JSON[_0x57ae("0x5")](data));
}),
  (socket[_0x57ae("0x9")] = function (_0x2bb015) {
    console[_0x57ae("0x4")](_0x57ae("0x12") + _0x2bb015[_0x57ae("0x2")]);
  }),
  (socket[_0x57ae("0x7")] = function (_0x56bfc8) {
    _0x56bfc8[_0x57ae("0x1")]
      ? console["log"](
          "[close]\x20Connection\x20closed\x20cleanly,\x20code=" +
            _0x56bfc8[_0x57ae("0xe")] +
            _0x57ae("0x14") +
            _0x56bfc8[_0x57ae("0x3")]
        )
      : console[_0x57ae("0x4")](_0x57ae("0xc"));
  }),
  (socket[_0x57ae("0x0")] = function (_0x3d5e87) {
    console[_0x57ae("0x4")](_0x57ae("0x11") + _0x3d5e87[_0x57ae("0x13")]);
  });
