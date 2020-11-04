const fs = require("fs");
// const chalk = require("chalk");
const Handlebars = require("handlebars");
// const logSymbols = require("log-symbols");

const component = "Beaker";
const styledComponent = "BeakerWrapper";

//?-------------/ UI /-------------//
// const yoda = chalk.greenBright;
// const vader = chalk.red;

// const done = logSymbols.success;
// const broken = logSymbols.error;

const log = console.log;
// const errLog = console.error;

//?-------------/ Imports /-------------//
// React
const imr = "import React from 'react';";
// Styled components
const imst = "import styled from 'styled-components';";

//?-------------/ Components /-------------//
// Function expression with braces
const jsxComp =
  "\n\nconst {{jsxComponent}} = () => {\n\n  return (\n    <{{styledComponent.name}}>{{jsxComponent}}</{{styledComponent.name}}>\n  );\n};";
// Styled component
const styledComp =
  "\n\nconst {{styledComponent.name}} = styled.{{styledComponent.element}}`\n  margin: 0;\n`;";

//?-------------/ Exports /-------------//
// Export jsx component
const expDefComp = "\n\nexport default {{jsxComponent}};";
// Export styled component
const expDefStyled = "\n\nexport default {{styledComponent.name}};";

//?-------------/ Templates /-------------//
// Jsx
const jsxCompTemplate = Handlebars.compile(`${imr}${jsxComp}${expDefComp}`);
// Styled
const styledCompTemplate = Handlebars.compile(
  `${imst}${styledComp}${expDefStyled}`
);

//?-------------/ File system /-------------//
// Check if dir exists
let dirExists = async () => {
  fs.existsSync("src/components/{{jsxComponent}}");
};

// Create new dir for generated components
const mkdir = async () => {
  fs.mkdirSync(`src/components/${component}`);
};

// Create component index.js file
const createJsxComp = async () => {
  fs.writeFileSync(
    `src/components/${component}/index.js`,
    jsxCompTemplate({ jsxComponent: component })
  );
};

// Create styled component styled.js file
const createStyledComp = async () => {
  fs.writeFileSync(`src/components/${component}/styled.js`);
  styledCompTemplate({
    styledComponent: { name: styledComponent, element: "h1" },
  });
};

// log(jsxCompTemplate({ jsxComponent: component }));
// log(
//   styledCompTemplate({
//     styledComponent: { name: styledComponent, element: "h1" },
//   })
// );
if (!dirExists) {
  mkdir();
  createJsxComp();
  createStyledComp();
}
