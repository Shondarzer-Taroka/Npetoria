// import axios from "axios";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";

//   let axiosSecret=axios.create({
//     baseURL:'https://assignment-twelve-server-gold.vercel.app'
//   })
// const useAxiosSecret = () => {
//     const navigate = useNavigate();
//     const { user,logout ,setSpinner} = useContext(AuthContext);

//     // console.log(token);
//     // request interceptor to add authorization header for every secure call to teh api
//     axiosSecret.interceptors.request.use(function (config) {
//         const token = localStorage.getItem('petoria-access')
//         // console.log('request stopped by interceptors', token)
//         config.headers.authorization = `Bearer ${token}`;
//         return config;
//     }, function (error) {
//         // Do something with request error
//         return Promise.reject(error);
//     });


//     // intercepts 401 and 403 status
//     axiosSecret.interceptors.response.use(function (response) {
//         return response;
//     }, async (error) => {
//         const status = error.response.status;
//         // console.log('status error in the interceptor', status);
//         // for 401 or 403 logout the user and move the user to the login
//         // if (!user.email) {
//         //    return 
//         // }
//         if (status === 401 || status === 403) {
//             // if (user) {
//             //    return 
//             // }
//              logout()
//              .then(res=>{
//                 localStorage.removeItem('petoria-access');
//                 setSpinner(false)
//                 navigate('/login');
//              })
//              .catch(err=>{
//                 console.log(err);
//              })
         
//         }
//         return Promise.reject(error);
//     })

// };

// export default useAxiosSecret;