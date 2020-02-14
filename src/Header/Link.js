import React from "react";

const Link = ({url,children, className}) => {
    return (
        <li><a  className={className} href={url}>{children}</a></li>
    )
};

export default Link