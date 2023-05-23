import { createSlice } from "@reduxjs/toolkit";
import { stubTrue } from "lodash";

const profileSlice = createSlice({
    name: 'profileSlice',
    initialState: {
        id: '',
        name: '',
        email: '',
        jobtitle: '',
        company: '',
        location: '',
        phone: '',
        profilepicture: '',
        coverphoto: '',
        add_phones: [],
        add_emails: [],
        add_addresses: [],
        add_links: [],
        add_customfields: [],
        link: '',
        username: ''
    },
    reducers: {
        setFullProfile: (state, action) => {
            return {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                jobtitle: action.payload.jobtitle,
                company: action.payload.company,
                location: action.payload.location,
                phone: action.payload.phone,
                profilepicture: action.payload.profilepicture,
                coverphoto: action.payload.coverphoto,
                add_phones: JSON.parse(action.payload.add_phones),
                add_emails: JSON.parse(action.payload.add_emails),
                add_addresses: JSON.parse(action.payload.add_addresses),
                add_links: JSON.parse(action.payload.add_links),
                add_customfields: action.payload.add_customfields,
                link: action.payload.link,
                username: action.payload.username,
            }
        },
        emptyFullProfile: (state, action) => {
            return {
                id: '',
                name: '',
                email: '',
                jobtitle: '',
                company: '',
                location: '',
                phone: '',
                profilepicture: '',
                coverphoto: '',
                add_phones: [],
                add_emails: [],
                add_addresses: [],
                add_links: [],
                add_customfields: [],
                link: '',
                username: ''
            }
        },
        setSingleField: (state, action) => {
            return { ...state, [action.payload.key]: action.payload.value }
        },
        setAddPhone: (state, action) => {
            state.add_phones.map((val) => {
                if (val.fieldId == action.payload.fieldId) {
                    val.fieldVal = action.payload.fieldVal;
                }
            });
        },
        removeAddPhone: (state, action) => {
            state.add_phones = state.add_phones.filter((val) => {
                return val.fieldId !== action.payload.fieldId;
            })
        },
        setAddEmail: (state, action) => {
            state.add_emails.map((val) => {
                if (val.fieldId == action.payload.fieldId) {
                    val.fieldVal = action.payload.fieldVal;
                }
            });
        },
        removeAddEmail: (state, action) => {
            state.add_emails = state.add_emails.filter((val) => {
                return val.fieldId !== action.payload.fieldId
            })
        },
        setAddAddress: (state, action) => {
            state.add_addresses.map((val) => {
                if (val.fieldId == action.payload.fieldId) {
                    val.fieldVal = action.payload.fieldVal;
                }
            });
        },
        removeAddAddress: (state, action) => {
            state.add_addresses = state.add_addresses.filter((val) => {
                return val.fieldId !== action.payload.fieldId
            })
        },
        setAddLink: (state, action) => {
            state.add_links.map((val) => {
                if (val.fieldId == action.payload.fieldId) {
                    val.fieldVal = action.payload.fieldVal;
                }
            });
        },
        removeAddLink: (state, action) => {
            state.add_links = state.add_links.filter((val) => {
                return val.fieldId !== action.payload.fieldId
            })
        },
        addPhone: (state, action) => {
            state.add_phones.push({
                label: action.payload.label,
                fieldId: action.payload.fieldId,
                fieldVal: action.payload.fieldVal,
            })
        },
        addEmail: (state, action) => {
            state.add_emails.push({
                label: action.payload.label,
                fieldId: action.payload.fieldId,
                fieldVal: action.payload.fieldVal,
            })
        },
        addAddress: (state, action) => {
            state.add_addresses.push({
                label: action.payload.label,
                fieldId: action.payload.fieldId,
                fieldVal: action.payload.fieldVal,
            })
        },
        addLink: (state, action) => {
            state.add_links.push({
                label: action.payload.label,
                fieldId: action.payload.fieldId,
                fieldVal: action.payload.fieldVal,
            })
        },

    }
})

export const { setAddPhone, setFullProfile, setSingleField, emptyFullProfile, setAddAddress, setAddEmail, setAddLink, addAddress, addEmail, addLink, addPhone, removeAddPhone, removeAddEmail, removeAddAddress, removeAddLink } = profileSlice.actions;
export default profileSlice.reducer;
