import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        editModal: false,
        diologModal: false,
    },
    reducers: {
        closeModal: (state, action) => {
            state.editModal = false
        },
        openModal: (state, action) => {
            state.editModal = true
        },
        newcloseModal: (state, action) => {
            state.diologModal = false
        },
        openDiolog: (state, action) => {
            state.diologModal = true
        },
    }

})

export const { closeModal, openModal, newcloseModal, openDiolog } = themeSlice.actions;
export default themeSlice.reducer;
