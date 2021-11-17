import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../services/userServices";
import { LOAD_USERS } from "../../redux/actions/actions";
import User from "../user/User";

export default function Users (props) {
    let {users} = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        getUsers().then(value => dispatch({type: LOAD_USERS, payload: value}));
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}