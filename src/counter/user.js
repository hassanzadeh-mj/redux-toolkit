import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchusers } from '../counterSlice/userSlice'

export default function UserList() {
    const dispatch = useDispatch()
    //   const userList = useSelector(({ users: { userList } }) => userList)
    useEffect(() => {
        dispatch(fetchusers())
    }, [dispatch])
const userList = useSelector(state => state.users.userList)
    console.log(userList)
    return (
    <div>
      {/* {userList.map(user => (
        <div style={{ margin: 20 }} key={user.id}>
          {user.body}
        </div>
      ))} */}
    </div>
    )
}