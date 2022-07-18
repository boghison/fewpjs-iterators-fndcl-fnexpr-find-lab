function superbowlWin(a) {
    const found = a.find(o => o.result == "W");
    return found == undefined ? found : found.year;
}