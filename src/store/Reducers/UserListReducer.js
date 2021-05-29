const DefaultState = {
    loading: false,
    data: [],
    submitted: false,
    errorMsg: "",
}

const UserListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "USER_LIST_LOADING":
            return {
                ...state,
                loading: true,
                submitted: true,
                errorMsg: "",
            }
        case "USER_LIST_FAIL":
            return {
                ...state,
                loading: false,
                submitted: true,
                errorMsg: action.errorMsg,
            }

        case "USER_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                submitted: true,
                errorMsg: "",
                data: action.payload,
            }

        default:
            return state
    }
}

export default UserListReducer
