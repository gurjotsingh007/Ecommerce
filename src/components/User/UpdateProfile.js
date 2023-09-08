import './UpdateProfile.css'
import React, { Fragment, useRef, useState, useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, login , updateProfile} from '../../utils/Users/usersAction';
import logo from '../../images/Profile.png'
import MetaData from "../layout/MetaData";
import { updateProfileReset } from '../../utils/Users/usersSlice';

const UpdateProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error, loading, isUpdated, user} = useSelector((state) => state.users);
    const {userInfo} = user;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState(logo);

    const updateProfileSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("avatar", avatar);
    
        dispatch(updateProfile(formData))  
    };
  
  
    const updateProfileDataChange = (e) => {
        if (e.target.name === "avatar") {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
        }
    };

    useEffect(() => {
        if(userInfo){
            setName(userInfo.name);
            setEmail(userInfo.email);
            setAvatarPreview(userInfo.avatar.url);
        }
        if (error) {
        alert(error);
        }

        if (isUpdated) {
            dispatch(loadUser());
            alert("Updated Profile");
            dispatch(updateProfileReset());
            navigate('/account');
        }
    }, [dispatch, error, loading, navigate, isUpdated]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
            <MetaData title="Update Profile" />
            <div className="updateProfileContainer">
                <div className="updateProfileBox">
                <h2 className="updateProfileHeading">Update Profile</h2>
                <form
                    className="updateProfileForm"
                    encType="multipart/form-data"
                    onSubmit={updateProfileSubmit}
                >
                    <div className="updateProfileName">
                    <FaceIcon />
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    <div className="updateProfileEmail">
                    <MailOutlineIcon />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>

                    <div id="updateProfileImage">
                    <img src={avatarPreview} alt="Avatar Preview" />
                    <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={updateProfileDataChange}
                    />
                    </div>
                    <input type="submit" value="Update" className="updateProfileBtn" />
                </form>
                </div>
            </div>
        </Fragment>
      )}
    </Fragment>
  );
};


export default UpdateProfile
