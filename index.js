function superbowlWin(record){
    return record.find(isWin) !== undefined ? record.find(isWin).year : undefined;
}
   

function isWin(element, index, array){
    return element.result === "W";
}