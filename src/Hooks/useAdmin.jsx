
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";


const useAdmin = () => {
    const { user, spinner } = useContext(AuthContext);
    // console.log(user);
    // console.log(spinner);
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],

        enabled: !spinner,
        queryFn: async () => {
            // console.log('asking or checking is admin', user)
            // if (user.email) {
                const res = await axiosPublic.get(`/users/admin/${user?.email}`,{
                    headers:{
                        authorization:`Bearer ${localStorage.getItem('petoria-access')}`
                    }
                });
                console.log(res.data);
                return res.data?.admin;
            // }

        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;