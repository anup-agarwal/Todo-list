const fs = require("fs");

const stage = process.argv[2];

const stages = JSON.parse(fs.readFileSync("env.json").toString());

fs.writeFileSync(".env", `REACT_APP_API=${stages[stage].REACT_APP_API}`);
