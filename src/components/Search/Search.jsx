import React, { useEffect, useState } from "react"
import { fade, withStyles } from "@material-ui/core/styles"
import InputBase from "@material-ui/core/InputBase"
import SubmitButton from "../Submit/SubmitButton"
import "./style.css"
import { useSelector } from "react-redux"

const Search = () => {
    const [queryState, setQueryState] = useState()
    const [widthState, setWidthState] = useState(window.innerWidth)

    const searchState = useSelector((state) => state.UserList)

    useEffect(() => {
        var logo = document.getElementById("logo")
        var search = document.getElementById("search-input")
        var submit = document.getElementById("search-submit")
        var nav = document.getElementById("nav-search")
        if (queryState?.length > 0) {
            if (widthState > 1264) {
                logo.style.transition = "transform 0.6s ease"
                logo.style.transform = "translate(-10vw, -39vh) scale(0.8)"

                search.style.transition = "transform 0.6s ease"
                search.style.transform = "translate(-8vw, -40vh)"
                search.style.width = "75vw"
                search.style.height = "8vh"

                submit.style.transition = "transform 0.6s ease"
                submit.style.transform = "translate(-6vw, -40vh)"

                nav.style.display = "none"
            } else if (widthState <= 1264 && widthState > 720) {
                logo.style.transition = "transform 0.6s ease"
                logo.style.transform = "translate(30vw, -40vh) scale(0.8)"

                search.style.transition = "transform 0.6s ease"
                search.style.transform = "translate(-20vw, -28vh)"
                search.style.width = "75vw"
                search.style.height = "8vh"

                submit.style.transition = "transform 0.6s ease"
                submit.style.transform = "translate(-18vw, -28vh)"
                nav.style.display = "none"
            } else if (widthState <= 720) {
                logo.style.transition = "transform 0.6s ease"
                logo.style.transform = "translate(30vw, -40vh) scale(0.8)"

                search.style.transition = "transform 0.6s ease"
                search.style.transform = "translate(-25vw, -28vh)"
                search.style.width = "65vw"
                search.style.height = "8vh"

                submit.style.transition = "transform 0.6s ease"
                submit.style.transform = "translate(-25vw, -28vh)"
            }
        } else if (queryState?.length === 0 && !searchState.submitted) {
            logo.style.transition = "transform 0.6s ease"
            logo.style.transform = "translate(0vw, 0vh) scale(1)"

            search.style.transition = "transform 0.6s ease"
            search.style.transform = "translate(0vw, 0vh)"
            search.style.width = "60vw"
            search.style.height = "10vh"
        }
    }, [queryState, widthState, searchState.submitted])

    window.onresize = () => {
        setWidthState(window.innerWidth)
    }

    const inputHandler = (e) => {
        setQueryState(e.target.value)
    }

    return (
        <React.Fragment>
            <div id="nav-search"></div>
            <GithubInput
                placeholder="Type here..."
                id="search-input"
                onInput={inputHandler}
            />
            <SubmitButton
                queryState={queryState}
                setQueryState={setQueryState}
            />
        </React.Fragment>
    )
}

const GithubInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 50,
        position: "relative",
        backgroundColor: theme.palette.common.white,
        border: "none",
        fontSize: 36,
        color: "rgba(0,0,0,0.7)",
        width: "60vw",
        height: "10vh",
        padding: "10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.2)} 0 0.2rem`,
        },
    },
}))(InputBase)

export default Search
