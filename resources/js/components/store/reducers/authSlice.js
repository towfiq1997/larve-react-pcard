import { createSlice } from "@reduxjs/toolkit";



const auth = createSlice({
    name: "authSlice",
    initialState: {
        email: '',
        token: '',
    },
    reducers: {
        setAuth: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        setEmpty: (state, action) => {
            state.email = '';
            state.token = '';
        }
    }

})
export const { setAuth, setEmpty } = auth.actions;
export default auth.reducer;