import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ href, name }) => {
    return (
        <Link
            to={href}
            className={"text-base font-bold text-mediumGrey hover:text-blue"}
        >
            {name}
        </Link>
    );
}

export default NavLink