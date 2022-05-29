import { useEffect, useState } from "react";
import { getData } from "../services/data";
import { DataGrid } from '@mui/x-data-grid';

function Grid() {
  const [data, setData] = useState([]);
  const [columns,setColumns] = useState([{field:"actor_id", label:"Actor ID"},{field:"first_name",label:"First Name"},{field:"last_name", label:"Last Name"}]);
  useEffect(async () => {
    setData(await getData());
  }, []);

 return <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

 // return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Actor ID</TableCell>
              <TableCell>Actor First Name</TableCell>
              <TableCell>Actor Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((actor) => (
              <TableRow
                key={actor.actor_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="actor">
                  {actor.actor_id}
                </TableCell>

                <TableCell component="th" scope="actor">
                  {actor.first_name}
                </TableCell>
                <TableCell align="">{actor.last_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   </>
 // );
}
export default Grid;
