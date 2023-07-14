import { EntryRegistrationActionType, EntryRegistrationState, EntryRegistrationAction } from '../../types/entryRegistrationReduserType'

const initialState: EntryRegistrationState = {
    entryRegistrationState: 'entry'
}

export const entryRegistrationReduser = (state = initialState, action: EntryRegistrationAction): EntryRegistrationState => {
    switch(action.type) {
        case EntryRegistrationActionType.SET_UP_ENTRY:
            return {
                ...state,
                entryRegistrationState: 'entry'
            }
        case EntryRegistrationActionType.SET_UP_REGISTRATION:
            return {
                ...state,
                entryRegistrationState: 'registration'
            }
        default:
            return state
    }   
}