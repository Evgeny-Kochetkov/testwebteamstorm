export enum EntryRegistrationActionType {
    SET_UP_ENTRY = 'SET_UP_ENTRY',
    SET_UP_REGISTRATION = 'SET_UP_REGISTRATION'
}

export interface EntryRegistrationState {
    entryRegistrationState: string
}

export interface EntryRegistrationAction {
    type: string
}