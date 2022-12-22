import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function UserRepositoryContainer(props) {
  return (
    <li className="list-group-item">
        <div className="media">
        <div className="media-body">
            <h4 className="media-heading">{props.name}</h4>
            <p>{props.description}</p>
        </div>
        <div className="media-right media-top">
            <span>
              {props.star}
            </span>
            <span>
              <i className="glyphicon glyphicon-star"></i>
            </span>
        </div>
        </div>
    </li>
  );
}

export default UserRepositoryContainer;