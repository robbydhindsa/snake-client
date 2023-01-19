// setup interface to handle user input from stdin
const setupInput = function () {
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
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
