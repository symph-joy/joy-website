import fs from "fs";
import child_process from "child_process";
import fse from "fs-extra";
const argv = process.argv;
const commit = argv.length > 2 ? argv[argv.length - 1] : "docs";
try {
  fse.emptyDirSync("./.joy/out");
  child_process.execSync("yarn run joy-export");
  fs.writeFileSync("./out/.nojekyll", "");
  child_process.execSync(
    `git init
    git checkout -b out
    git remote add origin git@github.com:symph-joy/symph-joy.github.io.git
    git fetch origin
    git branch --set-upstream-to=origin/out
    git add .
    git commit -m '${commit}'
    git push --set-upstream origin out --force`,
    { cwd: "out" }
  );
} catch (e) {
  console.log(e);
}
