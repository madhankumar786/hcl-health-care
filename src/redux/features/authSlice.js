import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
export const login = createAsyncThunk(
    "auth/login",
    async ({ formData, toast }, { rejectWithValue }) => {

        try {
            const response = await api.signIn(formData);
            toast.success("Login Successfully");
            // navigate("/");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const register = createAsyncThunk(
    "auth/register",
    async ({ formData, toast }, { rejectWithValue }) => {
        console.log(formData);
        try {
            const response = await api.signUp(formData);
            toast.success("Login Successfully");
            //navigate("/");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
// export const updateProfile = createAsyncThunk(
//     "auth/updateprofile",
//     async ({ name, email, toast }, { rejectWithValue }) => {
//         try {
//             const finalData = {
//                 name: name,
//                 email: email
//             };
//             const response = await api.updateProfile(finalData);
//             toast.success("Updated Profile");
//             return response.data;
//         } catch (err) {
//             return rejectWithValue(err.response.data);
//         }
//     }
// )
// export const resetPassword = createAsyncThunk(
//     "auth/resetpassword",
//     async ({ token, newPassword, toast }, { rejectWithValue }) => {
//         try {
//             const finalData = {
//                 token: token,
//                 newPassword: newPassword
//             };
//             const response = await api.resetPassword(finalData);
//             toast.success("Password has been Reset");
//             return response.data;
//         } catch (err) {
//             return rejectWithValue(err.response.data);
//         }
//     }
// )
export const loadUser = createAsyncThunk(
    "auth/loaduser",
    async ({ }, { rejectWithValue }) => {
        try {
            const response = await api.loadUser();
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)
//creates 3 promise lifecycles
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: "",
        loading: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLogout: (state, action) => {
            localStorage.clear();
            state.user = null;
        },
        clearErrors: (state, action) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        // Login reducers
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })

            // Register reducers
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })

            // Load User reducers
            .addCase(loadUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
                state.user = action.payload;
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    }
});
export const { setUser, setLogout, clearErrors } = authSlice.actions;
export default authSlice.reducer;