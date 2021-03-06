const fs = require("fs");
const logFolder = "./logs";
const selectLog = require("../functions/selectLog.js").selectLog;

test("folder is empty", () => {
  if (fs.existsSync(logFolder) && fs.readdirSync(logFolder).length > 0) {
    fs.readdirSync(logFolder).forEach(file => {
      try {
        fs.unlinkSync(logFolder + "/" + file);
      } catch (error) {
        problem = true;
      }
    });
  } else if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
  }
});
test("folder doesn't exist", () => {
  fs.rmdirSync(logFolder);

  expect(selectLog()).toBe(null);
});
