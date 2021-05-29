const DefaultState = { loading: false, data: [], errorMsg: "" }

const ReposReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "REPOS_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: "",
            }
        case "REPOS_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: action.errorMsg,
            }

        case "REPOS_SUCCESS":
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

export default ReposReducer
