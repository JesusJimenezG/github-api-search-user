import React, { useEffect } from "react"
import "./style.css"
import Card from "./Card"
import { GridList } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch, useSelector } from "react-redux"
import { GetRepos } from "../../store/Actions/FetchtUsers"
import MoonLoader from "react-spinners/MoonLoader"
import _ from "lodash"

const spinnerCss = `
    margin: 0 auto;
    top: 40vh;
    display: flex;
    position: relative;
`

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
}))

const User = ({ user }) => {
    const classes = useStyles()
    const reposState = useSelector((state) => state.Repos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetRepos(user.repos_url, user.public_repos))
    }, [])

    const repos = () => {
        if (!_.isEmpty(reposState.data)) {
            let repo = []
            for (let index = 0; index < user.public_repos; index++) {
                repo.push(
                    <Card
                        className={`repo-${index}`}
                        key={index}
                        data={reposState.data[index]}
                    />
                )
            }
            return <GridList className={classes.root}>{repo}</GridList>
        }
        if (reposState.loading) {
            return (
                <MoonLoader
                    css={spinnerCss}
                    loading={true}
                    size={50}
                    color={"#4525ff"}
                />
            )
        }
        if (reposState.errorMsg !== "") {
            return <div>{reposState.errorMsg}</div>
        }

        return <></>
    }
    return (
        <div className="user-container">
            <div className="user-header">
                <div className="user-hero">
                    <img className="picture" src={user.avatar_url} alt="" />
                    <div className="user-info">
                        <div className="user-name">{user.name}</div>
                        <div className="user-bio">{user.bio}</div>
                        <div className="user-location">{user.location}</div>
                        <div className="account-info">
                            <img
                                className="followers"
                                src="https://img.icons8.com/wired/64/000000/queue.png"
                                alt="followers"
                            />
                            <div className="user-followers">
                                {user.followers}
                            </div>
                            <div className="spacer">•</div>
                            <div className="user-company">{user.company}</div>
                        </div>
                        <div className="account-link">
                            <img
                                className="github"
                                src="https://img.icons8.com/color/48/000000/github--v1.png"
                                alt="github"
                            />
                            <a className="github-link" href={user.html_url}>
                                GitHub Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-repos-count">
                <img
                    className="repos"
                    src="https://img.icons8.com/color/64/000000/repository.png"
                    alt="repository"
                />
                <div className="user-public-repos-count">
                    Public repositories: {user.public_repos}
                </div>
            </div>
            <div className="user-repositories">{repos()}</div>
        </div>
    )
}

export default User
