import "./App.css"
import Home from "./components/Home/Home"
import { Switch, Route, Redirect } from "react-router-dom"
import UserPage from "./components/UserPage/UserPage"

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/user/:id"} exact component={UserPage} />
                <Redirect to={"/"} />
            </Switch>
        </div>
    )
}

export default App
