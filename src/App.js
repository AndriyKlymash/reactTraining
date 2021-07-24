import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Users from "./component/users/Users";
import Posts from "./component/posts/Posts";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={"header"}>
                    <div className={'home'}><Link to={''}>Home</Link></div>
                    <div className={'users'}><Link to={'users'}>Users</Link></div>
                    <div className={'posts'}><Link to={'posts'}>Posts</Link></div>
                </div>
                <Switch>
                    <Route path={'/users'} render={(props)=> <Users/>}/>
                    <Route path={'/posts'} component={Posts}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
