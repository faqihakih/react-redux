import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchUsers } from './redux/actions/usersAction'

function App() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const getUsers = useSelector((state) => state.usersReduser.users)
  useEffect(() => {
    console.log("users app js", getUsers);
    dispatch(fetchUsers())
  },[
    // count
  ])

  const handleChageCount = () => {
    setCount((oldValue) => oldValue + 1)
  }

  return (
    <div className="App">
      {getUsers.map((user) => {
        return (
          <>
            {/* <h1>{user}</h1> */}
            <h1>{user.first_name}</h1>
          </>
        )
      })}
      <button onClick={handleChageCount}>plus</button>
    </div>
  );
}

export default App;
