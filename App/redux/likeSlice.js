import { createSlice } from '@reduxjs/toolkit'


export const slice = createSlice({
  name: 'user',
  isLiked: false,
  initialState: {
    id_recipes: undefined,
    isLiked: false,
  },
  reducers: {
    changeLike(state, { payload }) {
      return { ...state, isLiked: true, name: payload }
    },
    changeDisliked(state) {
      return { ...state, isLiked: !true }
    }
    
  }
})


export const { changeLike, changeDisliked } = slice.actions

export const selectLike = state => state.user
export const useLike = state => state.isLiked

export default slice.reducer

console.log("changeLike ----- " + changeLike)
console.log("isLiked ----- " + useLike)
console.log("changeDisliked ---------" + changeDisliked);

