import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  curent: false,
  controls: false,
  playing: false,
  sidebar: false
}

export const PlayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    setControls: (state, action) => {
      state.controls = action.payload
    },
    setPlaying: (state, action) => {
      state.playing = action.payload
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload
    }
  },
})

export const {
  setControls,
  setCurrent,
  setPlaying,
  setSidebar
} = PlayerSlice.actions

export default PlayerSlice.reducer