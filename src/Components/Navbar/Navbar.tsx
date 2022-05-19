import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar: React.FC = () => {
    const location = useLocation()

    return (
        <nav>
            {location.pathname === "/" ? null : <Link className="nav-link" to="/">Home</Link>}
        </nav>
    )
}

export default Navbar