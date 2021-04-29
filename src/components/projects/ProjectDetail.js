const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            aperiam earum consequuntur nostrum nobis et natus inventore quis
            neque facilis dolores aliquid nisi cumque quo cupiditate voluptates,
            magni totam numquam.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by the Admin</div>
          <div>27th April, 10pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
