import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    console.log(users);


    async function makeAdmin(event,id) {
        console.log(id);
        const res = await axiosSecure.patch(`/makeadmin/${id}`,{role:'admin'});
        console.log(res.data);
    }

    return (
        <section>

            <div className="overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableHeadCell>User name</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Profile</TableHeadCell>
                  
                        <TableHeadCell>
                          Action
                        </TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                       
                       {
                        users.map((value,index)=>{
                            return <>
                             <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {value.name}
                            </TableCell>
                            <TableCell>{value.email}</TableCell>
                            <TableCell >
                                <img className="rounded-full border w-[50px] h-[50px] " src={value?.userProfile} alt="" />
                            </TableCell>
                            <TableCell> <Button onClick={()=>makeAdmin(event,value._id)} gradientDuoTone="purpleToPink">Make admin</Button> </TableCell>
                         
                        </TableRow>
                            </>
                        })
                       }
                     
                    </TableBody>
                </Table>
            </div>


        </section>
    );
};

export default Users;