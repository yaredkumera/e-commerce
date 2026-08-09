import { createSlice } from "@reduxjs/toolkit"

const token = localStorage.getItem("token")
const currentUser = localStorage.getItem("currentUser")

const AuthSlice = createSlice({
  name: "authslice",
  initialState: {
    user: currentUser || null,
    isLoggedIn: !!token,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    }
  }
})

export const { login, logout } = AuthSlice.actions
export default AuthSlice.reducer