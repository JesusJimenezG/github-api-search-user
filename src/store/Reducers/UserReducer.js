const DefaultState = { loading: false, data: [], errorMsg: "" }

const UserReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "USER_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: "",
            }
        case "USER_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: action.errorMsg,
            }

        case "USER_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data: action.payload,
            }

        default:
            return state
    }
}

export default UserReducer
