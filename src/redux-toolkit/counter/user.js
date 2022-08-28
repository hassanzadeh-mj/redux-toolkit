import { useEffect } from 'react'
import { Card } from 'react-bootstrap'
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
        // <div style={{ margin: 20 }} key={user.id}>
        //   {user.body}
        // </div>
 <Card className="m-4 " key={user.id}>
      <Card.Header className="d-flex justify-content-center">{user.title}</Card.Header>
      <Card.Body>
    <div className="m-4 d-flex ">
        <p bg="secondary">{user.body}</p>
    </div>
      </Card.Body>
    </Card>
      ))}

    </div>
  )
}