import React, { useEffect } from 'react';

import { axiosWithAuth } from './../utils/axiosWithAuth';

class FriendsList extends React.Component {

  state = {
    friends: []
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
    .get('/api/friends/')
    .then(res => {
      console.log('res in FriendsList', res);
      this.setState({
        friends: res.data.data
      });
    })
    .catch(err => {
      console.log("error: ", err.response);
    });
  }
  render() {
    // const friends = this.getFriends();
    console.log('Friends', )
    return (
      <div className='friendsList-wrap' >
        {this.state?.friends?.map(friend => (
          <div key={friend.id}>
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
          </div>
        ))}
      </div>
    )
  }


}

export default FriendsList;