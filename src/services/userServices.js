let url = "http://localhost:5000/users";
// let url = "https://jsonplaceholder.typicode.com/users";

const getUsers = () => {
    return fetch(url).then(value => value.json());
}

const getUserById = (user_id) => {
    fetch(url + '/' + user_id).then(value => value.json());
}

const addUser = (user) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json())
        .then((json) => console.log(json));
}

const deleteUser = (user_id) => {
    fetch(url + '/' + user_id, {
        method: 'DELETE'
    });
}

const updateUser = (data, user_id) => {
    fetch(url + '/' + user_id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(response => response.json());
}

export {getUsers, getUserById, addUser, deleteUser, updateUser};