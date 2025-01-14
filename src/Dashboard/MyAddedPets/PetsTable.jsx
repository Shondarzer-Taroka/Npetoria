




import { useState, useMemo, useContext } from 'react';
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel } from '@tanstack/react-table';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PetsTable = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: myaddedpets = [], refetch, isLoading } = useQuery({
    queryKey: ['myaddedpets', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myaddedpets/${user.email}`);
      return res.data;
    }
  });

  const data = useMemo(() => myaddedpets, [myaddedpets]);

  const columns = useMemo(() => [
    {
      header: 'Serial Number',
      accessorKey: 'serialNumber',
      cell: (info) => info.row.index + 1,
    },
    {
      header: 'Pet Name',
      accessorKey: 'name',
    },
    {
      header: 'Category',
      accessorKey: 'category',
    },
    {
      header: 'Pet Image',
      accessorKey: 'image',
      cell: (info) => <img src={info.row.original.image} alt={info.row.original.name} style={{ width: '50px' }} />,
      enableSorting: false,
    },
    {
      header: 'Adoption status',
      accessorKey: 'adopted',
      cell: (info) => (info.row.original.adopted === false ? 'Not Adopted' : 'Adopted'),
      
    },
    {
      header: 'Action',
      accessorKey: 'action',
            cell: (info) => (
              <div>
                <Link to={`/dashboard/updatepet/${info.row.original._id}`}><button className='px-4 py-3 rounded-lg bg-green-400'>Update</button></Link>
                <button className='px-4 py-3 rounded-lg bg-red-500'  onClick={() => handleDelete(info.row.original)}>Delete</button>
                <button className='px-4 py-3 rounded-lg bg-gray-500 text-white'  onClick={() => handleAdopt(info.row.original)}>{info.row.original.adopted?'Adopted':'Not Adopted'}</button>
              </div>
            ),
      enableSorting: false,
    }
  ], []);



  function handleDelete(e) {
    console.log(e._id);
    Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/mypetdelete/${e._id}`)
        .then(res=>{
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        // Swal.fire({
        //   // title: "Cancelled",
        //   // text: "Your imaginary file is safe :)",
        //   // icon: "error"
        // });
      }
    });
  }

  async function handleAdopt(e) {
    console.log(e);
    let status=e.adopted
    if (status===false) {
      event.target.innerText='Adopted'
      // console.log('yes');
      const res = await axiosSecure.patch(`/petstatusbyuser/${e._id}`,{adopted:true});
      // console.log(res.data);
      if (res.data.modifiedCount) {
          refetch()
      }
  }  
  else if (status===true) {
      const res = await axiosSecure.patch(`/petstatusbyuser/${e._id}`,{adopted:false});
      if (res.data.modifiedCount) {
          refetch()
      }
      console.log(res.data);
  }
  }

  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,

      // pagination: {
      //   pageIndex: 0,
      //   pageSize: 9,  // Set the initial page size to 5
      // },
      // onSortingChange:setSorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });


   if (isLoading) {
          return <h1 className="flex justify-center"> <Spinner aria-label="Extra large spinner example" size="xl" /></h1>
      }
  
  
      if (myaddedpets.length == 0) {
          return <h1 className="text-4xl text-gray-300 font-bold text-center"> No pets added by you </h1>
      }

  // console.log();
  return (
    <div className='w3-container'>
      <table className='w3-table-all'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted() ?? null]}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {
        myaddedpets.length > 10 && <div className='flex gap-3'>
          <button className='px-4 py-2 bg-violet-700 text-white' onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
            First Page
          </button>
          <button className='px-4 py-2 bg-violet-700 text-white' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous Page
          </button>
          <button className='px-4 py-2 bg-violet-700 text-white' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next Page
          </button>
          <button className='px-4 py-2 bg-violet-700 text-white' onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
            Last Page
          </button>
        </div>
      }
      <div>
        {/* Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()} */}
      </div>
    </div>
  );
};

export default PetsTable;




// import { useState, useMemo, useContext } from 'react';
// import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel } from '@tanstack/react-table';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';

// const PetsTable = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();

//   const { data: myaddedpets = [], refetch, isLoading } = useQuery({
//     queryKey: ['myaddedpets', user.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/myaddedpets/${user.email}`);
//       return res.data;
//     }
//   });

//   const data = useMemo(() => myaddedpets, [myaddedpets]);

//   const columns = useMemo(() => [
//     {
//       header: 'Serial Number',
//       accessorKey: 'serialNumber',
//       cell: (info) => info.row.index + 1,
//     },
//     {
//       header: 'Pet Name',
//       accessorKey: 'name',
//     },
//     {
//       header: 'Category',
//       accessorKey: 'category',
//     },
//     {
//       header: 'Pet Image',
//       accessorKey: 'image',
//       cell: (info) => <img src={info.row.original.image} alt={info.row.original.name} style={{ width: '50px' }} />,
//       enableSorting: false,  // Disable sorting for this column
//     },
//     {
//       header: 'Adoption Status',
//       accessorKey: 'adopted',
//       cell: (info) => (info.row.original.adopted ? 'Not Adopted' : 'Adopted'),
//     },
//     {
//       header: 'Action',
//       accessorKey: 'action',
//       cell: (info) => (
//         <div>
//           <button onClick={() => handleUpdate(info.row.original)}>Update</button>
//           <button onClick={() => handleDelete(info.row.original)}>Delete</button>
//           <button onClick={() => handleAdopt(info.row.original)}>Adopted</button>
//         </div>
//       ),
//       enableSorting: false,  // Disable sorting for this column
//     }
//   ], []);

//   const [sorting, setSorting] = useState([]);

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       sorting,
//       pagination: {
//         pageIndex: 0,
//         pageSize: 9,  // Set the initial page size to 5
//       },
//     },
//     onSortingChange: setSorting,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//   });

//   const handleUpdate = (pet) => {
//     console.log("Update pet:", pet);
//     // Handle update logic here
//   };

//   const handleDelete = (pet) => {
//     console.log("Delete pet:", pet);
//     // Handle delete logic here
//   };

//   const handleAdopt = (pet) => {
//     console.log("Adopt pet:", pet);
//     // Handle adopt logic here
//   };

//   return (
//     <div className='w3-container'>
//       <table className='w3-table-all'>
//         <thead>
//           {table.getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map(header => (
//                 <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
//                   {flexRender(header.column.columnDef.header, header.getContext())}
//                   {{
//                     asc: ' 🔼',
//                     desc: ' 🔽',
//                   }[header.column.getIsSorted() ?? null]}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map(row => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map(cell => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {
//         myaddedpets.length > 10 && <div className='flex gap-3'>
//           <button className='px-4 py-2 bg-violet-700 text-white' onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
//             First Page
//           </button>
//           <button className='px-4 py-2 bg-violet-700 text-white' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
//             Previous Page
//           </button>
//           <button className='px-4 py-2 bg-violet-700 text-white' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
//             Next Page
//           </button>
//           <button className='px-4 py-2 bg-violet-700 text-white' onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
//             Last Page
//           </button>
//         </div>
//       }
//       <div>
//         Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
//       </div>
//     </div>
//   );
// };

// export default PetsTable;
