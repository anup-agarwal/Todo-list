const fs = require("fs");

const stage = process.argv[2];

const stages = JSON.parse(fs.readFileSync("env.json").toString());

const writeLineInFile = (fileStream, string) => fileStream.write(`${string}\n`);

var envFileStream = fs.createWriteStream(".env");
writeLineInFile(envFileStream, `REACT_APP_API=${stages[stage].REACT_APP_API}`);
