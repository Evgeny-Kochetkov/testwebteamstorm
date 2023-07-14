import { EntryRegistrationActionType } from "../../types/entryRegistrationReduserType";

export const changeValueEntry = () => {
    return {type: EntryRegistrationActionType.SET_UP_ENTRY}
}

export const changeValueRegistration = () => {
    return {type: EntryRegistrationActionType.SET_UP_REGISTRATION}
}