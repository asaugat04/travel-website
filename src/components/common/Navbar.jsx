import PATH from "@/constants/path";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={PATH.HOME}>Home</Link>
        </li>
        <li>
          <Link to={PATH.CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
