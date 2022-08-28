import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../counterSlice/userSlice'

export default function UserList() {
  const dispatch = useDispatch()
  const userList = useSelector(state => state.users.userList)
  //   const userList = useSelector(({ users: { userList } }) => userList)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      {userList.map(user => (
        <div style={{ margin: 20 }} key={user.id}>
          {user.body}
        </div>
      ))}
    </div>
  )
}