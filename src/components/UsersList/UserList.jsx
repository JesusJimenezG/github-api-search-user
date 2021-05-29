import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./style.css"
import _ from "lodash"
import MoonLoader from "react-spinners/MoonLoader"
import List from "./List"

const spinnerCss = `
    margin: 0 auto;
    top: 40vh;
    display: flex;
    position: relative;
`

const UserList = () => {
    /* const [usersState, setUsersState] = useState()
    const [loadingState, setLoadingState] = useState(() => false) */
    const userList = useSelector((state) => state.UserList)

    /* useEffect(() => {
        console.log(usersState)
        console.log(loadingState)
    }, [usersState, loadingState]) */

    /* useEffect(() => {
        console.log(userList.data)
    }, [userList]) */

    const users = () => {
        if (!_.isEmpty(userList.data)) {
            console.log(userList.data)
            return <List data={userList.data} />
        }
        if (userList.loading) {
            return (
                <MoonLoader
                    css={spinnerCss}
                    loading={true}
                    size={50}
                    color={"#4525ff"}
                />
            )
        }
        if (userList.errorMsg !== "") {
            return <div>{userList.errorMsg}</div>
        }

        return <></>
    }
    return <React.Fragment>{users()}</React.Fragment>
}

export default UserList
