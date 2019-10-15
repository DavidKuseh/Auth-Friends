import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend';
import { axiosWithAuth } from '../axios/AxiosWithAuth';

const FriendList = () => {
  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
    .get('/friends')
    .then(res => {
      setFriends(res.data);
    })
    .catch(err => console.log(err))
  },[])

  return (
    <div>
      {
        friends.map(character => <Friend keys={character.id} character={character} />)
      }
      <Link to='/friends/add'>
        <button>Add a friend</button>
      </Link>
    </div>
  )
}

export default FriendList;