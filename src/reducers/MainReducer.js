import { combineReducers } from 'redux'
import todos from './TodoReducer'
import visibilityFilter from './FilterReducer'

import tileMover from './TileReducer'

export default combineReducers({
  todos,
  visibilityFilter,
  tileMover
})
