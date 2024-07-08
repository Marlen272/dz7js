import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    page1RequestMade: false,
    page2RequestMade: false,
    page3RequestMade: false,
};

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        setPage1RequestMade: (state) => {
            state.page1RequestMade = true;
        },
        setPage2RequestMade: (state) => {
            state.page2RequestMade = true;
        },
        setPage3RequestMade: (state) => {
            state.page3RequestMade = true;
        },
        resetRequests: (state) => {
            state.page1RequestMade = false;
            state.page2RequestMade = false;
            state.page3RequestMade = false;
        },
    },
});

export const { setPage1RequestMade, setPage2RequestMade, setPage3RequestMade, resetRequests } = requestSlice.actions;

const store = configureStore({
    reducer: {
        request: requestSlice.reducer,
    },
});

export default store;
