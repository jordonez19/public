import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const withUser = (Component) => {
  const WithUserComponent = (props) => {
    const { user, userLoaded, updateUser, token } = useContext(AuthContext);
    return (
      <Component
        {...props}
        user={user}
        userLoaded={userLoaded}
        updateUser={updateUser}
        token={token}
      />
    );
  };

  // Agrega un nombre de visualización al componente
  WithUserComponent.displayName = `WithUser(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithUserComponent;
};
