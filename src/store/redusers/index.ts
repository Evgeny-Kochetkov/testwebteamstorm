import { combineReducers } from "redux";

import { entryRegistrationReduser } from "./entryRegistrationReduser";

export const rootReduser = combineReducers({
    entryRegistrationState: entryRegistrationReduser
})

export type RootState = ReturnType<typeof rootReduser>