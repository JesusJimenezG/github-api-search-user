import React from "react"
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
    const userList = useSelector((state) => state.UserList)

    const users = () => {
        if (!_.isEmpty(userList.data)) {
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
