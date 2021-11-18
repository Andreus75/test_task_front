import "./userForm.css"
import {useState} from "react";
import {addUser} from "../../services/userServices";
export default function CreateUserForm (props) {
    let {history} = props;

    let [username, setUsername] = useState('');
    let [first_name, setFirstName] = useState('');
    let [last_name, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [repeat_password, setRepeatPassword] = useState('');
    let [user_type, setUserType] = useState('');

    let inputUserName = (e) => {
        setUsername(e.target.value);
    }
    let inputFirstName = (e) => {
        setFirstName(e.target.value);
    }
    let inputLastName = (e) => {
        setLastName(e.target.value);
    }
    let inputEmail = (e) => {
        setEmail(e.target.value);
    }
    let inputPassword = (e) => {
        setPassword(e.target.value);
    }
    let inputRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    }
    let inputUserType = (e) => {
        setUserType(e.target.value);
    }

    function saveNewUser(e) {
        e.preventDefault();

        if (password === repeat_password) {
            let user = {username, first_name, last_name, email, password, user_type};

            addUser(user);

            history.push('/users');
        } else {
            console.log('Repeat password is wrong!!!');
        }
    }

    return (
        <div className="saveNewUser">
            <form onSubmit={saveNewUser}>
                <h3>Create new user</h3>
                <p>Username <span className="required">*</span><br/>
                    <input type="text" name={'username'} value={username} onInput={inputUserName} required={true}/></p>
                <p>First name <span className="required">*</span><br/>
                    <input type="text" name={'first_name'} value={first_name} onInput={inputFirstName}/></p>
                <p>Last name <span className="required">*</span><br/>
                    <input type="text" name={'last_name'} value={last_name} onInput={inputLastName}/></p>
                <p>Email <span className="required">*</span><br/>
                    <input type="text" name={'email'} value={email} onInput={inputEmail}/></p>
                <p>Password <span className="required">*</span><br/>
                    <input type="text" name={'password'} value={password} onInput={inputPassword}/></p>
                <p>Repeat password <span className="required">*</span><br/>
                    <input type="text" name={'repeat_password'} value={repeat_password} onInput={inputRepeatPassword}/>
                </p>
                <p>Type <span className="required">*</span><br/>
                    <select name="select">
                        <option value={user_type = "Driver"}>Driver</option>
                        <option value={user_type = "Admin"}>Admin</option>
                    </select></p>
                    {/*<input type="text" name={'user_type'} value={user_type} onInput={inputUserType}/>*/}
                <br/>
                <button>Create</button>
            </form>
        </div>
    );
}
