
function superbowlWin(teamRecord) {
  const win = teamRecord.find(entry => entry.result === "W");
  return win ? win.year : undefined;
}
