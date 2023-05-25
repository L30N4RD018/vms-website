import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, classname,...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Link to={to} className={`${isActive ? "active" : ""} ${classname}`} {...props}>
            {children}
        </Link>
    );
}

export default CustomLink





