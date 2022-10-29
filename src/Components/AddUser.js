import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});

    const handleAddUser = event => {
        event.preventDefault();

        fetch('http://localhost:5000/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert('user added successfully');
                    event.target.reset();
                }

            })
        console.log(user);
    }

    const handleInputOnBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputOnBlur} type='text' name='name' placeholder='name' required />
                <br />
                <input onBlur={handleInputOnBlur} type='text' name='address' placeholder='address' required />
                <br />
                <input onBlur={handleInputOnBlur} type='email' name='email' placeholder='email' required />
                <br />
                <button type='submit'>Add User</button>
            </form>

        </div>
    );
};

export default AddUser;