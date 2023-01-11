import React from "react";

import UserContext from "@context/user";

interface StandardLayoutProps {
    children?: JSX.Element | JSX.Element[] | string | string[];
}

const StandardLayout: React.FC<StandardLayoutProps> = (props) => {
    const { username, role } = React.useContext(UserContext);

    return <React.Fragment>{props.children}</React.Fragment>;
};

export default StandardLayout;
