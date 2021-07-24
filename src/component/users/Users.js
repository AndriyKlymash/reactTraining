import {useEffect, useState} from "react";
import {getUsers} from "../../services/api";
import User from "../user/User";
import "./Users.css"

export default function Users() {
    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])

    const choseUser = (id) => {
        let find = users.find(value => value.id === id);
        setChosenUser(find);
    }

    return (
        <div className={'mainBox'}>
            <div className={'allUsers'}>{
                users.map(value => <User
                    key={value.id}
                    item={value}
                    choseUser={choseUser}/>
                )
            }</div>
            <div className={'chosenUser'}>
                {chosenUser && <div>{chosenUser.id} - {chosenUser.name} <br/>Email: {chosenUser.email}</div>}
            </div>
        </div>
    );
}