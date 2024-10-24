import {configureStore} from '@reduxjs/toolkit'
import participantsReducer from './slice/participantSlice'

export default configureStore({
    reducer: {
        participants: participantsReducer
    },
})
