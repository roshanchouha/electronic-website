import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import image1 from '../../assets/images/product/videoGame.png'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{background:'white',color:'white'}}>
            <TableCell align=" "  >Products</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{width:"10%",border:""}} >
                <div className='flex   gap-2 items-center  px-5 '>
                    <img src={image1} alt={row.name} width="30px" height="30px" />
                     <div className='text-xs font-semibold'>{row.name}</div>
  
                </div>
              </TableCell>
              <TableCell align="right" sx={{width:"10%",border:""}}>{row.calories}</TableCell>
              <TableCell align="right" sx={{width:"10%",border:""}}> <div>
                   <input type="number" placeholder='1'   className='font-poppins w-2/4 focus:outline-none border border-[#000000] rounded p-1'/>
              </div></TableCell>
              <TableCell align="right" sx={{width:"10%",border:""}}>{row.carbs}</TableCell>
              <TableCell align="right" sx={{width:"10%",border:""}}> <div className='flex gap-2 justify-end '>
                <button className='bg-[#DB4444] text-[#ffffff] w-20 py-0 rounded text-xl text-center flex  justify-center items-center font-semibold'><MdDelete /></button>
                  <button className=' border border-black text-black w-20 py-1 rounded text-xl flex justify-center items-center font-semibold'><MdEdit /></button>
              </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
