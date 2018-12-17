import { TILE_CLICK } from "../actions/actionsTypes";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let shuffleMe = [1,2,3,'NA',5,6,7,8,9,10,11,12,13,14,15,16]
let initialState = shuffle(shuffleMe)

let matricize = (array) => {
  let result = [
    array.slice(0,4),
    array.slice(4,8),
    array.slice(8,12),
    array.slice(12,16)
  ]
  return result;
}

initialState = matricize(initialState)


function getIndexOfx(arr, x) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(x);
    if (index > -1) {
      return [i, index];
    }
  }
}

const tileMover = (state = initialState, action) => {
    switch (action.type){
      case TILE_CLICK:
        let indexOfNA = getIndexOfx(state, "NA")
        let tileClicked = action.tileRow.concat(action.tileNum)

        console.log("index of NA:" + indexOfNA)
        console.log("index of   :" + tileClicked)

        // tile clicked and NA tile are on same row AND next to one another
        if (indexOfNA[0] == tileClicked[0] && 1 == Math.abs(indexOfNA[1] - tileClicked[1])) {
          let result = state.slice()
          result[indexOfNA[0]][indexOfNA[1]] = state[tileClicked[0]][tileClicked[1]]
          result[tileClicked[0]][tileClicked[1]] = "NA"
          return result

        // tile clicked and NA tile are on same column and next to one another
      } else if (indexOfNA[1] == tileClicked[1] && 1 == Math.abs(indexOfNA[0] - tileClicked[0])) {
          let result = state.slice()
          console.log("clicked " + tileClicked)
          console.log("NA " + indexOfNA)

          result[indexOfNA[0]][indexOfNA[1]] = state[tileClicked[0]][tileClicked[1]]
          result[tileClicked[0]][tileClicked[1]] = "NA"

          return result
        }

        else {
          return state
        }

        break;











      default:
        console.log(state)
        return state
        break;
    }




}

export default tileMover
