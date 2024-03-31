const { terminal } = require("terminal-kit");

terminal.wrapColumn({ x: 2, width: 100 });

function printToConsole(str) {
  terminal.wrap.bgColorRgbHex("rgb(33, 37, 41)", str);
  //   terminal.table([[str]], {
  //     hasBorder: true,
  //     contentHasMarkup: true,
  //     borderChars: "lightRounded",
  //     borderAttr: { color: "blue" },
  //     textAttr: { bgColor: "default" },
  //     firstCellTextAttr: { bgColor: "none" },
  //     firstRowTextAttr: { bgColor: "yellow" },
  //     firstColumnTextAttr: { bgColor: "red" },
  //     width: 100,
  //     fit: true, // Activate all expand/shrink + wordWrap
  //   });
}

module.exports = printToConsole;
