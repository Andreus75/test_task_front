import {useState} from "react";

export default function EditUserForm () {

    let [first_name, setFirstName] = useState('');
    let [last_name, setLastName] = useState('');

    const editFirstName = (e) => {

    }

    const editLastName = (e) => {

    }

    const editUser = (e) => {

    }

    return (
        <div>
            <form onSubmit={editUser}>
                <p>Username</p>
                <input type="text" name={'username'} value={'username'}/>
                <p>First name</p>
                <input type="text" name={'first_name'} value={first_name} onInput={editFirstName}/>
                <p>Last name</p>
                <input type="text" name={'last_name'} value={last_name} onInput={editLastName}/>
                <p>Email</p>
                <input type="text" name={'email'} value={'email'}/>
                <p>Type</p>
                <input type="text" name={'user_type'} value={'user_type'}/>
                <button>Delete</button>
                <button>Save</button>
            </form>
        </div>
    );
}