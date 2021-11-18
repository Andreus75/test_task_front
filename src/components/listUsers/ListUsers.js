import "./ListUser.css"
import Users from "../users/Users";
import CreateUserForm from "../userForm/CreateUserForn";
import {Route, Switch} from "react-router-dom";
import EditUserForm from "../userForm/EditUserForm";

export default function ListUsers (props) {
    let {history} = props;

    let createUser = () => {
        history.push('/users/create');
    }
    return (
            <div>
                <header className='header'>
                    <div className="error_message">

                    </div>
                    <div className="successful">

                    </div>
                </header>
                <main className='main'>
                    <div className='users'>
                        <button className='create_user' onClick={createUser}>Create User</button>

                        <div className='show_users'>
                            <Users/>
                        </div>
                    </div>
                    <div className='create_user'>
                        <Switch>
                            <Route path={'/users/edit'} component={EditUserForm}/>
                            <Route path={'/users/create'} component={CreateUserForm}/>
                        </Switch>
                    </div>
                </main>
                <footer className='footer'></footer>
            </div>
    );
}
