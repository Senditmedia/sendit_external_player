const queryString1 = window.location.search;
const urlParams1 = new URLSearchParams(queryString1);
const slugIn = urlParams1.get("key");
const socketEnable = urlParams1.get("socket") || "true";
let socket = null;

class Socket {
  constructor(slug, end_date) {
    if (
      // Connect through the Dev reverse billing server if needed
      window.location.hostname === "externaldr.sendit.media"
    ) {
      this.url = "wss://chatsockdr.sendit.media/dev";
    } else if (window.location.hostname === "externalpr.sendit.media") {
      // Connect through the Prod reverse billing server if needed
      this.url = "wss://chatsockpr.sendit.media/production";
    } else {
      this.url =
        "wss://jrn1gpil42.execute-api.af-south-1.amazonaws.com/production";
    }
    this.socket = null;
    this.stream = { slug, end_date };
    this.events = {};
    this.listeners = {};
  }

  static async init(slug) {
    // Set the end date to now plus 2 days
    let end_date = new Date();
    end_date.setDate(end_date.getDate() + 2);
    return new Socket(slug, end_date);
  }

  onMessage() {
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data || "{}");
      this.events[data.action] = new CustomEvent(data.action, {
        detail: data,
      });

      dispatchEvent(this.events[data.action]);
    };

    this.socket.onerror = (event) => {
      dispatchEvent(new CustomEvent("ERROR", { detail: event }));
    };

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(`[socket close] closed cleanly`);
      } else {
        console.log(`[socket close] connection died`);
      }
    };
  }

  joinStream() {
    this.socket = new WebSocket(this.url);
    this.socket.onopen = () => {
      this.onMessage();
      const joinedDto = {
        action: "CONNECT_SAVE",
        slug: this.stream.slug,
        endDate: this.stream.end_date,
        publisher: false,
      };
      this.sendMessage(joinedDto);
    };
  }

  on(event, callback) {
    addEventListener(event, callback);

    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  }

  sendMessage(data) {
    this.socket.send(JSON.stringify(data));
  }

  close() {
    console.log(`[socket closing]`);
    this.socket.close();

    for (const key in this.listeners)
      for (const cb of this.listeners[key]) removeEventListener(key, cb);
  }
}

window.onload = async () => {
  if (socketEnable === "false") {
    return;
  } else {
    socket = await Socket.init(slugIn);

    socket.on("ERROR", ({ detail }) => {
      console.error(`[socket error]`, detail);
    });

    socket.joinStream();
  }
};

window.onunload = () => {
  socket.close();
};
