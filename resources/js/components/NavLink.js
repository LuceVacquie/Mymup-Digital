import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavLink = ({ href, name, closePopover = () => {} }) => {
    const history = useHistory();
    return (
        <Link
            to={href}
            className={"text-base font-bold text-mediumGrey hover:text-blue"}
            onClick={closePopover}
        >
            {name}
        </Link>
    );
};

export default NavLink;
