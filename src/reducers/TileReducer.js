import { TILE_CLICK } from "../actions/actionsTypes";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let shuffleMe = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let initialState = shuffle(shuffleMe)



const tileMover = (state = initialState

  , action) => {
    
    return state

}

export default tileMover
