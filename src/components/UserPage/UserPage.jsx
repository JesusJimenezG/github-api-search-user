import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MoonLoader from "react-spinners/MoonLoader"
import { GetUser } from "../../store/Actions/FetchtUsers"
import _ from "lodash"
import User from "./User"

const spinnerCss = `
    margin: 0 auto;
    top: 40vh;
    display: flex;
    position: relative;
`

const UserPage = (props) => {
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.User)

    useEffect(() => {
        dispatch(GetUser(props.match.params.id))
    }, [dispatch, props.match.params.id])

    const user = () => {
        if (!_.isEmpty(userState.data)) {
            return <User user={userState.data} />
        }
        if (userState.loading) {
            return (
                <MoonLoader
                    css={spinnerCss}
                    loading={true}
                    size={50}
                    color={"#4525ff"}
                />
            )
        }
        if (userState.errorMsg !== "") {
            return <div>{userState.errorMsg}</div>
        }

        return <></>
    }

    return <div className="user-page">{user()}</div>
}

export default UserPage
