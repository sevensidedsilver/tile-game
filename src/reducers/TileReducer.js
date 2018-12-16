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


const tileMover = (state = initialState, action) => {
    switch (action.type){
      case TILE_CLICK:
        console.log("clicked")
        return state


      default:
        console.log(state)
        return state

    }




}

export default tileMover
