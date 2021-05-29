import React from "react"
import { Link } from "react-router-dom"

function List({ data }) {
    return (
        <div className="user-list">
            <ul>
                {data.map((el) => {
                    return (
                        <Link key={el.id} to={`/user/${el.login}`}>
                            <li>
                                <div className="user-details">
                                    <img
                                        src={el.avatar_url}
                                        className="user-avatar"
                                        alt="user avatar"
                                    />
                                    <div className="user-login">{el.login}</div>
                                    <div className="user-repos"></div>
                                    <div className="spacer-2vw"></div>
                                    <img
                                        src="https://img.icons8.com/emoji/48/000000/glowing-star.png"
                                        alt="user score"
                                    />
                                    <div className="user-score">{el.score}</div>
                                    <div className="spacer-1px"></div>
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default List
