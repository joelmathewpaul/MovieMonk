import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./user-service"

export const findUserThunk = createAsyncThunk(
    'user/findUser', async () =>
        await service.findUser()
)

export const deleteUserThunk = createAsyncThunk(
    'user/deleteUser',
    async (uId) => {
        await service.deleteUser(uId)
        return uId
    })


export const createUserThunk = createAsyncThunk(
    'user/createUser',
    async (uId) => {
        let newUser = await service.createUser(uId)
        return newUser
    })

export const updateUserThunk =
    createAsyncThunk(
        'user/updateUser',
        async (user) =>
            await service.updateProfile(user)
    )
