import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

//랭킹 더미 데이터
const rows = [
  createData('1', 'IN', 1324171354, 3287263),
  createData('2', 'CN', 1403500365, 9596961),
  createData('3', 'IT', 60483973, 301340),
  createData('4', 'US', 327167434, 9833520),
  createData('5', 'CA', 37602103, 9984670),
  createData('6', 'AU', 25475400, 7692024),
  createData('7', 'DE', 83019200, 357578),
  createData('8', 'IE', 4857000, 70273),
  createData('9', 'MX', 126577691, 1972550),
  createData('10', 'JP', 126317000, 377973),
  createData('11', 'FR', 67022000, 640679),
  createData('12', 'GB', 67545757, 242495),
  createData('13', 'RU', 146793744, 17098246),
  createData('14', 'NG', 200962417, 923768),
  createData('15', 'GF', 200962467, 921328),
  createData('16', 'DH', 200962237, 926566),
  createData('17', 'BC', 200962847, 935268),
  createData('18', 'VA', 200962237, 926468),
  createData('19', 'AW', 200964867, 923158),
  createData('20', 'ES', 200962647, 923158),
  createData('21', 'QR', 200964837, 923538),
];

const columns = [
  { id: 'rank', label: '순위', minWidth: 50, align: 'center'}, 
  { id: 'name', label: '아이디', minWidth: 170, align: 'center' },
  {
    id: 'score',
    label: '점수',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'time',
    label: '시작시간?끝난 시간',
    minWidth: 170,
    align: 'center'
  },
];

function createData(rank, name, score, time) {
  return { rank, name, score, time };
}

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{overflow: 'hidden'}} elevation={4}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4} style={{fontSize:"30px" }}>
                USER RANKING
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize:"30px" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, fontSize:"20px" }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}