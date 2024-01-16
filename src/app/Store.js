import { configureStore } from "@reduxjs/toolkit";
import userslice from "../Allslices/userslice";
import movieslice from "../Allslices/movieslice";

export const store = configureStore({
    reducer:{
        User: userslice,
        movie: movieslice
    }
})
