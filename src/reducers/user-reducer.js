import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

/**
 * Reducer for the user to call various services.
 */
const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteUser(state, action) {
            return null;
        },
        saveUser(state, action) {
            return action.payload;
        }
    }

});
export const { saveUser, deleteUser } = userReducer.actions;
export default userReducer.reducer;
