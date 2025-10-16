import { exec } from "child_process";

// tell Render to start your real app in the server folder
exec("node server/index.js", (err, stdout, stderr) => {
  if (err) console.error(err);
  console.log(stdout);
  console.error(stderr);
});
