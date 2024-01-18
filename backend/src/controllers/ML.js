const { spawn } = require("child_process");
const path = require("path");

const dataCreated = 13;

const mlConfig = (req, res) => {
  const pyprog = spawn("python", [
    path.resolve(__dirname, "./ml_js.py"),
    dataCreated,
  ]);

  pyprog.stdout.on("data", (data) => {
    console.info(data);
    res.write(data);
    res.end();
  });
};

module.exports = mlConfig;
