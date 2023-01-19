const net = require("net");
const { iP, port } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: iP, // IP address here,
    port: port // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
    conn.write("Name: RSD");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 100);
  });

  return conn;
};

module.exports = connect;
