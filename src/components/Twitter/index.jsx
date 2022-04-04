import { useEffect, useState } from 'react';
import axios from 'axios';

import { useFetching } from '../../hooks/useFetching';
import { sleep } from '../../helpers';

const Twitter = ({ username, children }) => {
  const [user, setUser] = useState({})

  const [fetchUser, isUserLoading, userLoadError] = useFetching(async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
    await sleep(3000)
    const user = response?.data[0]
    setUser(user)
  })

  useEffect(() => {
    fetchUser()
  }, [])

  return children(user, isUserLoading, userLoadError)
};

export default Twitter;
