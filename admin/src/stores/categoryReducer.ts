import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
    getCategories:['params'],
    getCategoriesSuccess:['data'],
    getCategoriesFailure:['error']
},{prefix:'@Category/'})

export { Types, Creators };

const initialState = {
    error: false,
    isFetching: false,
    categories: [],
};

export default createReducer(initialState, {
    [Types.GET_CATEGORIES]: (state, action) => {
        return {
            ...state,
            isFetching: true,
            error: false,
        }
    },
    [Types.GET_CATEGORIES_SUCCESS]: (state, action) => {
        console.log(action)
        const { data } = action
        return {
            ...state,
            categories: data,
            isFetching: false,
        }
    },
    [Types.GET_CATEGORIES_FAILURE]: (state, action) => {
        const { error } = action;
        return {
            ...state,
            isFetching: false,
            error: error,
        }
    },

})