import {useState} from "react";
import {deleteUser, updateUser} from "../../services/userServices";

export default function EditUserForm (props) {
    let {location: {state: {user}}, history} = props;

    let [first_name, setFirstName] = useState('');
    let [last_name, setLastName] = useState('');

    const editFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const editLastName = (e) => {
        setLastName(e.target.value);
    }

    const state = {button: 1};

    const editUser = (e) => {
        e.preventDefault();
        if (state.button === 1) {
            history.push(`/users/${user._id}`);
            deleteUser(user._id);
        }
        if (state.button === 2) {
            history.push(`/users/${user._id}`);
            let updateInfo = {first_name: first_name || user.first_name, last_name: last_name || user.last_name};
            updateUser(updateInfo, user._id);
        }
    }


    return (
        <div>
            <form onSubmit={editUser}>
                <p>Username</p>
                <input type="text" name={'username'} placeholder={user.username} readOnly={true}/>
                <p>First name</p>
                <input type="text" name={'first_name'} value={first_name} onInput={editFirstName} placeholder={user.first_name}/>
                <p>Last name</p>
                <input type="text" name={'last_name'} value={last_name} onInput={editLastName} placeholder={user.last_name}/>
                <p>Email</p>
                <input type="text" name={'email'} placeholder={user.email} readOnly={true}/>
                <p>Type</p>
                <input type="text" name={'user_type'} placeholder={user.user_type} readOnly={true}/>
                <br/>
                <button className='delete' onClick={() => (state.button = 1)}>Delete</button>
                <button className='save' onClick={() => (state.button = 2)}>Save</button>
            </form>
        </div>
    );
}
