import { createSlice } from "@reduxjs/toolkit";


const signUp = createSlice({
    name: 'signupSlice',
    initialState: {
        name: '',
        phone: '',
        email: '',
        password: '',
        jobtitle: '',
        company: '',
        location: '',
        profilepic: '',
        add_phones: [],
        industry: '',
        step: 1,
    },
    reducers: {
        addSignPhone: (state, action) => {
            console.log('entrung')
            state.add_phones.push({
                label: 'WORK',
                fieldId: action.payload.fieldId,
                fieldVal: '',
            })
        },
        removePhone: (state, action) => {
            state.add_phones = state.add_phones.filter((val) => {
                return val.fieldId !== action.payload.fieldId;
            })
        },
        setSignPhone: (state, action) => {
            state.add_phones.map((val) => {
                if (val.fieldId == action.payload.fieldId) {
                    val.fieldVal = action.payload.fieldVal;
                }
            });
        },
        setIncorDec: (state, action) => {
            if (action.payload == "inc") {
                state.step++;
            }
            else if (action.payload == "dec") {
                state.step--;
            }
        },
        setRegiData: (state, action) => {
            return { ...state, [action.payload.key]: action.payload.val }
        },
        setEmpty: (state, action) => {
            return {
                name: '',
                phone: '',
                email: '',
                password: '',
                jobtitle: '',
                company: '',
                location: '',
                profilepic: '',
                add_phones: [],
                industry: '',
                step: 1,
            }
        }
    }
})


export const { setIncorDec, setRegiData, setEmpty, addSignPhone, setSignPhone, removePhone } = signUp.actions;
export default signUp.reducer