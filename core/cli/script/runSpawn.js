module.exports = command => {
  const { spawn } = require("child_process");
  command = command.replace(new RegExp("{project}", "g"), process.cwd());
  var child = spawn(command, {
    shell: true,
    stdio: "inherit"
  });
  // child.stderr.on("data", function(data) {
  //   console.error(
  //     // "------------------{{stderr}}------------------\n",
  //     data.toString().trim()
  //   );
  // });
  // child.stdout.on("data", function(data) {
  //   console.log(
  //     // "------------------{{stdout}}------------------\n",
  //     data.toString().trim()
  //   );
  // });
  // child.on("exit", function(exitCode) {
  //   console.log("Child exited with code: " + exitCode);
  //   process.exit(0);
  // });
};
