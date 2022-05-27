import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../../firebase/firebase.init";
import useAdmin from "../../../../hooks/useAdmin";
import Loading from "../../../Sheard/Loading";

const RequireUser = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoadings] = useAdmin(user);
    let location = useLocation();

    if (loading || adminLoadings) {
        return <Loading />;
    }

    if (!user || admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireUser;
