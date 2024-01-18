const { spawn } = require("child_process");
const path = require("path");

const mlConfig = (req, res) => {
  const dataCreated = req.params.id;
  const pyprog = spawn("python", [
    path.resolve(__dirname, "./ml_js.py"),
    dataCreated,
  ]);

  pyprog.stdout.on("data", (data) => {
    res.write(data);
    res.end();
  });
};

module.exports = mlConfig;
