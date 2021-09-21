import React from 'react'

const UserItem = (props) => {

  const {login, avatar_url, html_url} = props.user;

  return (
    <div>
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="user"
          className="round-img"
          style={{width: '60px'}}
        />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    </div>
  )
}

export default UserItem
