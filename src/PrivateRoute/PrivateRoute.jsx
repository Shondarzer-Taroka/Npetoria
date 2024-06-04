import { useContext } from "react";
import { ColorRing } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {

    let {user,spinner}=useContext(AuthContext)
    let location=useLocation()
    // console.log(location);
    //  console.log(spinner);
    // console.log(user);
    if (spinner) {
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
    
    
    if (user) {
      return children
  }else{
       return (<Navigate state={location.pathname} to={'/login'}></Navigate>)
  }
  
};

export default PrivateRoute;