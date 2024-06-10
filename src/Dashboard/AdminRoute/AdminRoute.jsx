import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";




const AdminRoute = ({children}) => {
    const { user, spinner:loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return   <div className="flex justify-center items-center ">
        <ColorRing
         visible={true}
         height="80"
         width="80"
         ariaLabel="color-ring-loading"
         wrapperStyle={{}}
         wrapperClass="color-ring-wrapper"
         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
         /></div> 
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