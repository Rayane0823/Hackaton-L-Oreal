const { exec } = require("child_process");

const pythonLibraries = ["numpy", "pandas", "scikit-learn"]; // Replace with the libraries you want to install
const installPythonLibraries = () => {
  const command = `pip install ${pythonLibraries.join(" ")}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    console.error(`stderr: ${stderr}`);
  });
};
installPythonLibraries();
