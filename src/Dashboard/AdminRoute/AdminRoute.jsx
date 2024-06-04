import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";




const AdminRoute = ({children}) => {
    const { user, spinner:loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (!isAdmin) {
      return <Navigate to={'/dashboard/userDashboard'}></Navigate>  
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/'}></Navigate>
};

export default AdminRoute;