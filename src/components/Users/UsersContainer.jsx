import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,  setCurrentPage,  toggleFollowingProgress, requestUsers } from './../../redux/users-reducer';
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getFetching, getFollowingInProgress} from './../../redux/users-selectors'

class UsersContainer extends React.Component {

  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (page) => {
    const {requestUsers, pageSize} = this.props;
    requestUsers(page, pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {follow,unfollow,setCurrentPage,toggleFollowingProgress,requestUsers})
)(UsersContainer);