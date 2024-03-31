const { terminal } = require("terminal-kit");
const { marked } = require("marked");
const { markedTerminal } = require("marked-terminal");

marked.use(markedTerminal());
terminal.wrapColumn({ x: 2, width: 100, continue: true, offset: 10 });

async function printToConsole(str) {
  terminal.wrap(marked(str));
}

module.exports = printToConsole;
