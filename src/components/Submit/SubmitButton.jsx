import React from "react"
import "../Home/Home.css"
import { ArrowForward } from "@material-ui/icons"
import { IconButton } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { GetUsersList } from "../../store/Actions/FetchtUsers"

const SubmitButton = (props) => {
    const dispatch = useDispatch()

    if (props.queryState?.length > 0) {
        const fetchUsers = () => {
            dispatch(GetUsersList(props.queryState))
        }

        return (
            <IconButton
                id="search-submit"
                variant="contained"
                color="primary"
                aria-label="search"
                onClick={fetchUsers}
            >
                <ArrowForward fontSize="large" />
            </IconButton>
        )
    } else {
        return <></>
    }
}

export default SubmitButton
