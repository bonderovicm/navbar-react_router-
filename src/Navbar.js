import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Sitename</Link>
      <ul>
        <li>
          <Link to="/">About me</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
