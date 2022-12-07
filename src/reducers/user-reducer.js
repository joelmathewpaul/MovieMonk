import {createSlice } from "@reduxjs/toolkit";
import User from '../models/user';


// current dummy user
const defaultUser = new User(    0, "Pratyasha",
                                 "Sharma", "pratyasharma", "family.png", "10/10/1997",
                                 "04/2009")

const initialState = {
    user: defaultUser,
    loading: false
}

/**
 * Reducer for the user to call various services.
 * @type {Slice<{loading: boolean, user: User}, {findUser(*, *): void, deleteUser(*, *): void, createUser(*, *): void}, string>}
 */
const userReducer = createSlice({
                                   name: 'user',
                                   initialState,

                                   reducers: {
                                       deleteUser(state, action) {
                                           const index = state
                                               .findIndex(user =>
                                                              user._id === action.payload);
                                           state.splice(index, 1);
                                       },


                                       createUser(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...defaultUser,
                                                             _id: (new Date()).getTime(),
                                                         })
                                       }
                                   }

                               });
export const {createUser, deleteUser} = userReducer.actions;
export default userReducer.reducer;
