import {useNavigate} from "react-router";

const FollowListItem = ({user}) => {
    const navigate = useNavigate();
    const onUserItemClick = () => {
        let nameEncoded = user.name.replace(/\s/g, "-").toLowerCase();
        navigate(`/user/${user.id}/${nameEncoded}`);
    }
    return(
        <div className="d-flex flex-row align-items-center bg-white m-2 p-2" onClick={onUserItemClick}>
            <div className="">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" width={'50px'} height={'50px'} alt="username" className="rounded-circle"/>
            </div>
            <div className="flex-fill ps-3">
                <span className="text-primary">random name check</span>
            </div>
        </div>

    )
}

export default FollowListItem;