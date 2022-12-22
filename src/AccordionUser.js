import { useEffect, useState } from 'react'
import Accordion from 'react-collapsy';
import UserRepositoryContainer from './UserRepositoryContainer';

import { Octokit } from '@octokit/core';

const AccordionUser = (props) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserRepos = async (_username) => {
      const octokit = new Octokit({ auth: process.env.REACT_APP_API_GITHUB_SECRET });
  
      const response = await octokit.request('GET /users/{user}/repos', {
        user: props.user.login
      });      
  
      if (response.status === 200) {
        setRepos(response.data);
      }
    }
  
    fetchUserRepos(props.user.login);
  }, [props.user.login]);

  return (
    <Accordion title={props.user.login}>
      <UserRepositoryContainer repos={repos} />
    </Accordion>
  );
}

export default AccordionUser;
