

// import {useState, useMemo, useContext } from 'react';


// import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel,getSortedRowModel} from '@tanstack/react-table'
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';

// const PetsTable = () => {
//   const { user } = useContext(AuthContext)
//   let count=1;
//   const axiosSecure = useAxiosSecure()
//   const { data: myaddedpets = '', refetch, isLoading } = useQuery({
//     queryKey: ['myaddedpets', user.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/myaddedpets/${user.email}`);
//       return res.data;
//     }
//   })

//   console.log(myaddedpets);
//   console.log(myaddedpets);
//   const data = useMemo(() => myaddedpets, [myaddedpets])
//   const columns = (
//     [
//       {
//         header: 'Serial Number',
//         accessorKey:`${count++}`,
//         cell: (info) => info.row.index + 1,
//       },
//       {
//         header: 'Pet Name',
//         accessorKey: 'name'
//       },
//       {
//         header: 'Category',
//         accessorKey: 'category'
//       },
//       {
//         header: 'Pet Image',
//         accessorKey: `${<img > <img src={`image`} alt="" /> </img>}`,
//         cell: (info) => <img src={info.row.original.image} alt={info.row.original.name} style={{ width: '50px' }} />,
//       },
//       {
//         header: 'Action',
//         accessorKey: `${<button>
//           <button>he</button>
//         </button>}`
//       }
//     ]
//   );


//   const [sorting,setSorting]=useState([])


//   const table = useReactTable({
//     data, columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel:getSortedRowModel(),
//     state:{
//       sorting:sorting
//     },
//     onSortingChange:setSorting
//   });

//   console.log(myaddedpets.length);

//   return (
//     <div className='w3-container'>

//       <table className='w3-table-all'>
//         {
//           table.getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.name}>
//               {
//                 headerGroup.headers.map(header => <th key={header.name}
//                 onClick={header.column.getToggleSortingHandler()}
//                 >
//                   {flexRender(header.column.columnDef.header, header.getContext())}
//                   {
//                     {asc:'🔼', dis:'🔽'}[
//                       header.column.getIsSorted ?? null
//                     ]
//                   }
//                 </th>)
//               }
//             </tr>
//           ))
//         }
//         <tbody>
//           {
//             table.getRowModel().rows.map((row,index) => (<tr key={index+2}>
//               {row.getVisibleCells().map((cell,index) => (<td key={index}>
//                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
//               </td>))}
//             </tr>))
//           }
//         </tbody>
//       </table>
//       { myaddedpets.length >10 && <div className='flex gap-3'>
//         <button className='px-4 py-2 bg-violet-700 text-white ' onClick={()=> table.setPageIndex(0) } >First Page</button>
//         <button className='px-4 py-2 bg-violet-700 text-white ' disabled={!table.getCanPreviousPage()} onClick={()=> table.previousPage()} >Previous  Page</button>
//         <button className='px-4 py-2 bg-violet-700 text-white ' disabled={!table.getCanNextPage()} onClick={()=> table.nextPage()} >Next Page</button>
//         <button className='px-4 py-2 bg-violet-700 text-white ' onClick={()=> table.setPageIndex(table.getPageCount()-1) } >Last Page</button>
//       </div>}
//     </div>
//   );
// };

// export default PetsTable;




