import UserRepositoryItem from './UserRepositoryItem';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const UserRepositoryContainer = (props) => {
  return (
    <div className="panel-body">
      <ul className="list-group">
        {props.repos.map((_repo) => (
          <UserRepositoryItem name={_repo.name} description={_repo.description} star={_repo.stargazers_count} key={Math.random()} />
        ))}
      </ul>
    </div>
  );
}

export default UserRepositoryContainer;