#! /usr/bin/env node
import { execSync } from "child_process";
import inquirer from "inquirer";

function svelteflavor(name, flavor) {
  switch (flavor) {
    case "svelte":
      console.log("Installing vanilla svelte");
      execSync(`cd ${process.cwd()} && npx degit sveltejs/template ${name}`);
      console.log(
        "✅ Successfully Installed \n  \tTo Run,\n \t npm install\n \tnpm run dev  "
      );
      break;
    case "svelte + scss":
      console.log("Installing svelte + scss");
      if (name === "") {
        const commandset1 = `
        npm root -g
        `;
        const npmpath = execSync(commandset1).toString();
        const commandset2 = `
        cd ${process.cwd()} && 
        npx degit sveltejs/template --force && 
        rm -f src/App.svelte rollup.config.js svelte.config.js > /dev/null &&
        cp ${npmpath.trim()}/sveltecreateapp/templates/svelteScss/App.svelte ./src/
        cp ${npmpath.trim()}/sveltecreateapp/templates/svelteScss/rollup.config.js ./
        cp ${npmpath.trim()}/sveltecreateapp/templates/svelteScss/svelte.config.js ./
        `;
        execSync(commandset2);
        console.log(
          "✅ Successfully Installed \n  \tTo Run,\n \t npm install\n \tnpm run dev  "
        );
        //execSync(commandset2);
      } else {
        const commandset1 = `
        npm root -g
        `;
        const npmpath = execSync(commandset1).toString();
        const commandset2 = `
        cd ${process.cwd()} && 
        npx degit sveltejs/template ${name} && 
        cd ${name} &&
        rm -f src/App.svelte rollup.config.js svelte.config.js > /dev/null &&
        cp ${npmpath.trim()}/sveltecreateapp/templates/svelteScss/App.svelte ./${name}/src/
        cp ${npmpath.trim()}/sveltecreateapp/templates/svelteScss/rollup.config.js ./${name}
        cp ${npmpath.trim()}/sveltecreateapp/templates/svelteScss/svelte.config.js ./${name}
        `;
        execSync(commandset2);
        console.log(
          "✅ Successfully Installed \n  \tTo Run,\n \t npm install\n \tnpm run dev  "
        );
      }

      break;
    case "svelte + tailwind + svelte router":
      console.log("Installing svelte + tailwind + svelte router");
      const commandset = `
      npx degit yajatvishwak/Svelte-Tailwind-Router ${name}
      `;
      execSync(commandset);
      console.log(
        "✅ Successfully Installed \n  \tTo Run,\n \t npm install\n \tnpm run dev  "
      );
      break;
    case "svelte + express":
      console.log("Installing vanilla svelte");
      execSync(
        `cd ${process.cwd()} && npx degit synapsecode/SvelteExpress ${name}`
      );
      console.log(
        "✅ Successfully Installed \n  \tTo Run,\n \t npm install\n \tnpm run dev  "
      );
    default:
      console.log("Bro what?");
      break;
  }
}

inquirer
  .prompt([
    { type: "input", name: "name", message: "Project name:" },
    {
      type: "list",
      message: "Framework:",
      name: "framework",
      choices: [
        "svelte",
        "svelte + scss",
        "svelte + tailwind + svelte router",
        "svelte + express",
      ],
    },
  ])
  .then((answers) => {
    svelteflavor(answers.name, answers.framework);
  })
  .catch((error) => {
    console.log("Internal Bug 🐛 Pls raise issue");
    console.log("Logs:", error);
  });
