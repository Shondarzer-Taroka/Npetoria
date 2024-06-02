import useAxiosPublic from "./useAxiosPublic";


const Fetching = async ({ pageParam = 0 }) => {
        const axiosPublic = useAxiosPublic();
        const res = await axiosPublic.get('/petlisting', {
          params: {
            page: pageParam,
            limit: 10, // Adjust the limit as needed
          },
        });
        return res.data;
     
};

export default Fetching;