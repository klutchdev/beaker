const fs = require("fs");
const chalk = require("chalk");
const Handlebars = require("handlebars");
const logSymbols = require("log-symbols");

const yoda = chalk.greenBright;
const vader = chalk.red;

const done = logSymbols.success;
const broken = logSymbols.error;

const log = console.log;
const errLog = console.error;

//-------------/ Imports /-------------//
// React
const imr = "import React from 'react';";
// Styled components
const imst = "import styled from 'styled-components';";

//-------------/ Components /-------------//
// Function expression with braces
const jsxComp =
  "const {{jsxComponent}} = () => {\n\n  return (\n    <{{styledComponent}}>{{jsxComponent}}</{{styledComponent}}>\n  );\n};";
// Styled component
const styledComp =
  "\n\nconst {{styledComponent.name}} = styled.{{styledComponent.element}}`\n  margin: 0;\n`;";

//-------------/ Exports /-------------//
// Export jsx component
const expDefComp = "\n\nexport default {{jsxComponent}};";
// Export styled component
const expDefStyled = "\n\nexport default {{styledComponent.name}};";

//-------------/ File system /-------------//
// Check if dir exists
let dirExists = async () => {
  fs.existsSync("src/components/{{jsxComponent}}");
};

// Create new dir for generated components
const mkdir = async () => {
  fs.mkdirSync("src/components/{{jsxComponent}}");
};

// Create component index.js file
const createJsxComp = () => {
  fs.writeFileSync(
    "src/components/{{jsxComponent}}/index.js",
    Handlebars.compile(jsxComp)
  );
};

// Create styled component styled.js file
const createStyledComp = () => {
  fs.writeFileSync(
    "src/components/{{jsxComponent}}/styled.js",
    Handlebars.compile(styledComp)
  );
};
