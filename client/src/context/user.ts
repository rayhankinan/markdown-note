import React from "react";

import Role from "@enum/role";

interface UserContextType {
    username?: string;
    role?: Role;
}

const UserContext = React.createContext<UserContextType>({
    username: undefined,
    role: undefined,
});

export default UserContext;
