import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/"></NavLink>Log Out
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1"></NavLink>NN
      </li>
    </ul>
  );
};

export default SignedInLinks;
