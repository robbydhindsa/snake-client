// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (data) {
    // console.log(data);
    // \u0003 maps to ctrl+c input
    if (data === '\u0003') {
      process.exit();
    }
    if (data === 'w') {
      conn.write("Move: up");
    }
    if (data === 'a') {
      conn.write("Move: left");
    }
    if (data === 's') {
      conn.write("Move: down");
    }
    if (data === 'd') {
      conn.write("Move: right");
    }
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
