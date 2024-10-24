import {createSlice} from '@reduxjs/toolkit'

export const participantsSlice = createSlice({
    name: 'participants',
    initialState: {
        participantsArr: [],
    },
    reducers: {
        replaceParticipants: (state, action) => {
            state.participantsArr = action.payload
        },
    },
})


export const {replaceParticipants} = participantsSlice.actions

export default participantsSlice.reducer
