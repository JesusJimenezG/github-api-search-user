import axios from "axios"

const search_url = "https://api.github.com/search/users"

export const GetUsersList = (query) => async (dispatch) => {
    try {
        dispatch({ type: "USER_LIST_LOADING" })
        const response = await axios.get(search_url + `?q=${query}`)
        if (response.status === 200) {
            dispatch({
                type: "USER_LIST_SUCCESS",
                payload: response.data.items,
            })
        }
    } catch (error) {
        dispatch({ type: "USER_LIST_FAIL", errorMsg: error })
    }
}

const user_url = "https://api.github.com/users/"
export const GetUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: "USER_LOADING" })
        const response = await axios.get(user_url + user)
        if (response.status === 200) {
            dispatch({
                type: "USER_SUCCESS",
                payload: response.data,
            })
        }
    } catch (error) {
        dispatch({ type: "USER_FAIL", errorMsg: error })
    }
}

export const GetRepos = (url, count) => async (dispatch) => {
    try {
        dispatch({ type: "REPOS_LOADING" })
        const per_page = count < 100 ? count.toString() : "30"
        const response = await axios.get(url + "?per_page=" + per_page)
        if (response.status === 200) {
            dispatch({
                type: "REPOS_SUCCESS",
                payload: response.data,
            })
        }
    } catch (error) {
        dispatch({ type: "REPOS_FAIL", errorMsg: error })
    }
}
