import {useNavigate} from "react-router";

const FollowListItem = ({user}) => {
    console.log(user)
    const navigate = useNavigate();
    const onUserItemClick = () => {
        let nameEncoded = user.name.replace(/\s/g, "-").toLowerCase();
        navigate(`/user/${user.id}/${nameEncoded}`);
    }
    return(
        <div className="d-flex flex-row align-items-center bg-white m-2 p-2" onClick={onUserItemClick}>
            <div className="">
                <img src={user.profilePhoto} width={'50px'} height={'50px'} alt="username" className="rounded-circle"/>
            </div>
            <div className="flex-fill ps-3">
                <span className="text-primary">{user.name}</span>
            </div>
        </div>

    )
}

export default FollowListItem;