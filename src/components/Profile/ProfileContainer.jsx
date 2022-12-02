import React from 'react';
import Profile from './Profile';
import axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams, useNavigate, useLocation } from 'react-router-dom';



 export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
};


class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger;
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = 2;
    };
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId )
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }


  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
  
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile})(withRouter(ProfileContainer))