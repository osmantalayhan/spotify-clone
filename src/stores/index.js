import { configureStore } from '@reduxjs/toolkit'
import PlayerReducer from 'stores/player'

export default configureStore({
  reducer: {
      player: PlayerReducer
  },
})