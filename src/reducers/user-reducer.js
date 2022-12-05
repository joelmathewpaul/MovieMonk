import {createSlice } from "@reduxjs/toolkit";
import User from '../models/user';
import {createUserThunk, deleteUserThunk,findUserThunk, updateUserThunk} from "../services/user-thunks";


// current dummy user
const defaultUser = new User(    0, "Pratyasha",
                                 "Sharma", "pratyasharma", "family.png", "10/10/1997",
                                 "04/2009", 340, 223)

const initialState = {
    user: defaultUser,
    loading: false
}

/**
 * Reducer for the user to call various services. TOdo: Need a review.
 * @type {Slice<{loading: boolean, user: User}, {deleteUser(*, *): void, createUser(*, *): void}, string>}
 */
const userReducer = createSlice({
                                   name: 'user',
                                   initialState,
                                   extraReducers: {
                                       [findUserThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.user =  new User(    0, "Pratyasha",
                                                                          "Sharma", "pratyasharma", "family.png", "10/10/1997",
                                                                          "04/2009", 340, 223)
                                           },
                                       [findUserThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = payload
                                           },
                                       [findUserThunk.rejected]:
                                           (state) => {
                                               state.loading = false
                                           },
                                       [deleteUserThunk.fulfilled] :
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.user = state.user
                                                   .filter(u => u._id !== payload)
                                           },
                                       [createUserThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.user.push(payload)
                                           },
                                       [updateUserThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               const userNdx = state.user
                                                   .findIndex((u) => u._id === payload._id)
                                               state.user[userNdx] = {
                                                   ...state.tuits[userNdx],
                                                   ...payload
                                               }
                                           }

                                   },
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
