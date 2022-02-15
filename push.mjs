import fs from "fs";
import child_process from "child_process";
const argv = process.argv;

fs.writeFile("./out/.nojekyll", "", async (err) => {
  if (!err) {
    console.log("writeFile success");
    console.log('Pushing, please wait')
    child_process.exec(
      `git init
    git checkout -b out
    git remote add origin git@github.com:symph-joy/joy-website.git
    git fetch origin
    git branch --set-upstream-to=origin/out
    git add .
    git commit -m '${argv[argv.length - 1]}'
    git push --set-upstream origin out --force`,
      { cwd: "out" },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  } else {
    console.log(err);
  }
});
