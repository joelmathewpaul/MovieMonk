import {useNavigate} from "react-router";
import {deleteFollowing} from "../services/follow-service";
import {useSelector} from "react-redux";

const FollowListItem = ({followUser,cancelRequired}) => {

    const navigate = useNavigate();
    const profileUser = useSelector(state => state.user);
    const onUserItemClick = () => {
        let nameEncoded = followUser.name.replace(/\s/g, "-").toLowerCase();
        navigate(`/user/${followUser._id}/${nameEncoded}`);
    }
    const onCancelItemClick = async () => {
        console.log("inside oncancel",followUser,profileUser)
        await deleteFollowing(profileUser._id,followUser._id);
    }
    console.log(followUser,profileUser)
    return(

    <div className="d-flex flex-row align-items-center bg-white m-2 p-2">

        <div onClick={onUserItemClick}>
            <img src={followUser.profilePhoto} width={'50px'} height={'50px'} alt="username"
                 className="rounded-circle"/>
        </div>
        <div className="flex-fill ps-3">
            <span className="text-primary">{followUser.name}</span>

            {cancelRequired && <span className="float-end" onClick={onCancelItemClick}><i
                className="fa-solid fa-xmark"/></span>}

        </div>
    </div>


    )
}

export default FollowListItem;