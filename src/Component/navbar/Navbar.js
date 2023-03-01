import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav>
            <Link to="/">Add Note</Link>
            <Link to="view">View All Note</Link>
        </nav>
    )
}
export default Navbar;