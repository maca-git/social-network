import axios from "axios";
import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/user.svg';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items);
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={style.users}>
        {
          this.props.users.map(u =>
            <div key={u.id}>
              <div>
                <img className={style.userPhoto} src={u.photos.small || userPhoto} alt="" />
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => { this.props.unfollow(u.id) }}>Followed</button>
                  : <button onClick={() => { this.props.follow(u.id) }}>Unfollowed</button>
                }
              </div>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                {/* <div>{u.location.country}</div>
                <div>{u.location.city}</div> */}
              </span>
            </div>
          )
        }
        <div className={style.pagination}>
          {
            pages.map(page =>
              <span 
                className={this.props.currentPage === page && style.selectedPage}
                onClick={(e) => {this.onPageChanged(page)}}
              >{page}</span>
            )
          }
        </div>
      </div>
    )
  }
}

export default Users;