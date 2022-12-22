import { useState } from 'react'

import AccordionUser from './AccordionUser';

import { Octokit } from '@octokit/core';

const App = () => {

  const [username, setUsername] = useState('');

  const [users, setUsers] = useState([]);

  const searchUser = async (_username) => {
    const octokit = new Octokit({ auth: process.env.REACT_APP_API_GITHUB_SECRET });

    const response = await octokit.request('GET /search/users', {
      q: _username,
      per_page: 5
    });      

    if (response.status === 200) {
      setUsers(response.data.items);
    }
  }

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleSearchUser = (event) => {
    searchUser(username);
  }

  return (
    <div>
      <div className="container">
        <div className="row row-offcanvas row-offcanvas-right">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div className="row">
              <div className="col-xs-12 col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Search Github User</h3>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <form action="post">
                          <fieldset>
                            <div className="form-group">
                              <label>Github username</label>
                              <input type="text" id="username" name="username" className="form-control" placeholder="Please type Github username here ..." onChange={handleChangeUsername} />
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <button type="button" className="btn btn-primary" style={ {width: '100%'} } onClick={handleSearchUser}>Search</button>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                        <hr/>
                      </div>
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-12">
                            {users.map((_usr) => (
                              <AccordionUser user={_usr} key={Math.random()} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="text-muted">@Gittab by <a href="https://github.com/rizts/gittab" rel="noreferrer" target="_blank">@rizts</a>.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
