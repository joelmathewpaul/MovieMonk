import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

import FollowList from "./index";
import {deleteFollowing} from "../services/follow-service";

const FollowListItem = ({user,cancelRequired}) => {

    // const [userState, deleteUser] = useState([]);
    //
    // useEffect(() => {
    //     if (user.id){
    //         deleteFollowing(user.id).then(res => {
    //             deleteUser(res);
    //         })
    //     }}, [user]);
    const navigate = useNavigate();
    const onUserItemClick = () => {
        let nameEncoded = user.name.replace(/\s/g, "-").toLowerCase();
        navigate(`/user/${user.id}/${nameEncoded}`);
    }
    const onCancelItemClick = () => {

    }
    return(
        <div className="d-flex flex-row align-items-center bg-white m-2 p-2">
            <div onClick={onUserItemClick}>
                <img src={user.profilePhoto} width={'50px'} height={'50px'} alt="username" className="rounded-circle"/>
            </div>
            <div className="flex-fill ps-3">
                <span className="text-primary">{user.name}</span>
                {cancelRequired} && {
                <span className="float-end" onClick={onCancelItemClick}><i className="fa-solid fa-xmark"/></span>
            }
            </div>
        </div>

    )
}

export default FollowListItem;