import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function User ({user}) {
    const {username, first_name, last_name, email, user_type} = user;
    return (
        <Router>
            <div className="user">
                <Link to={'/user/edit'}>
                    {username} {first_name} {last_name} {email} {user_type}
                </Link>
            </div>
        </Router>
    );
}