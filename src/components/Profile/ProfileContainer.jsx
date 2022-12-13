import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams, useNavigate, useLocation, } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


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

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    };
    this.props.getUserProfile(userId);
  }


  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }

};


export default compose (
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
) (ProfileContainer);
