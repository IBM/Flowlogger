const filter_by = require("../flow_parse.js").filter_by;
const selectLog = require("../functions/selectLog.js").selectLog;
function getLogErrors() {
  var file = selectLog();
  var rejectCount = 0;
  if (file == null) {
    return;
  }
  if ("flow_logs" in file) {
    for (var i = 0; i < file.flow_logs.length; i++) {
      if (file.flow_logs[i].action == "rejected") {
        rejectCount++;
      }
    }
  }
  if (rejectCount == 1) {
    filter_by(file, ["action"], ["rejected"]);
    console.log(
      ("\nERROR: " + rejectCount + " action was rejected in the flowlogs\n\n\n")
        .red
    );
  } else if (rejectCount > 1) {
    filter_by(file, ["action"], ["rejected"]);
    console.log(
      (
        "\nERROR: " +
        rejectCount +
        " actions were rejected in the flowlogs\n\n\n"
      ).red
    );
  } else {
    console.log("No Errors were detected in the flowlogs\n\n\n\n".green);
  }
}

module.exports = getLogErrors;
