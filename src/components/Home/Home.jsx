import React, { useEffect, useState } from "react"
import "./Home.css"
import Search from "../Search/Search"
import UserList from "../UsersList/UserList"

const Home = () => {
    return (
        <div className="home">
            <div className="search-container">
                <img
                    id="logo"
                    src="https://img.icons8.com/nolan/128/github.png"
                    alt="Github logo"
                />
                <Search />
            </div>
            <UserList />
            {/* <MoonLoader
                css={spinnerCss}
                loading={fetchingState}
                size={50}
                color={"#4525ff"}
            /> */}
        </div>
    )
}

export default Home
