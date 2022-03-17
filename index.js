function superbowlWin(array){
    if (array.find(element => element.result === "W")){
      return array.find(x =>x.result === "W")['year']
    }
    else return undefined
  }