import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import LoadingSpinner from "../Common/LoadingSpinner";

function RequireAdmin({ children }) {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export default RequireAdmin;