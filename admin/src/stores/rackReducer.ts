import { createActions, createReducer } from "reduxsauce";

const {Types, Creators} = createActions({
    getRacks:['params'],
    getRacksSuccess: ['data'],
    getRacksFailure: ['error']
},{prefix: '@Rack/'})

export {Types, Creators};

const initialState = {
    error:false,
    isFetching: false,
    racks: []
}

export default createReducer(initialState, {
    [Types.GET_RACKS]: (state, action) => {
        return {
            ...state,
            isFetching: true,
            error: false,
        }
    },
    [Types.GET_RACKS_SUCCESS]: (state, action) => {
        console.log(action)
        const { data } = action
        return {
            ...state,
            racks: data,
            isFetching: false,
        }
    },
    [Types.GET_RACKS_FAILURE]: (state, action) => {
        const { error } = action;
        return {
            ...state,
            isFetching: false,
            error: error,
        }
    }
})