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
            <div className="user">
                <Link to={{pathname:'/users/edit', state: {user}}}>
                    {username} {first_name} {last_name} {email} {user_type}
                </Link>
            </div>
    );
}