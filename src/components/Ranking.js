import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import styled from "styled-components";


const columns = [
  { id: 'rank', label: 'Rank', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(rank, code, population, size) {
  return { rank, code, population, size };
}

//임시 데이터
const rows = [
  createData('#1', 'IN', 1324171354, 3287263),
  createData('#2', 'CN', 1403500365, 9596961),
  createData('#3', 'IT', 60483973, 301340),
  createData('#4', 'US', 327167434, 9833520),
  createData('#5', 'CA', 37602103, 9984670),
  createData('#6', 'AU', 25475400, 7692024),
  createData('#7', 'DE', 83019200, 357578),
  createData('#8', 'IE', 4857000, 70273),
  createData('#9', 'MX', 126577691, 1972550),
  createData('#10', 'JP', 126317000, 377973),
  createData('#11', 'FR', 67022000, 640679),
  createData('#12', 'GB', 67545757, 242495),
  createData('#13', 'RU', 146793744, 17098246),
  createData('#14', 'NG', 200962417, 923768),
  createData('#15', 'BR', 210147125, 8515767),
  createData('#16', 'BR', 210147125, 8515767),
  createData('#17', 'BR', 210147125, 8515767),
  createData('#18', 'BR', 210147125, 8515767),
  createData('#19', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
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
        rowsPerPageOptions={[10, 25, 100]}
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
/*
import React, { useState } from "react";
import styled from 'styled-components';
import { useTable } from 'react-table';

const [info, setInfo] = useState();

const getTamWallet = () => {
  data.getTamWallet().then(item => setInfo(item));
};

const columnData = [
  {
    accessor: 'Rank',
    Header: 'Rank',
  },
  {
    accessor: 'ID',
    Header: 'Nickname',
  },
  {
    accessor: 'Score',
    Header: 'Score',
  },
  {
    accessor: 'Time',
    Header: 'Time',
  },
]

const columns = useMemo(() => columnData, []);

const data = useMemo(() => info, [info])

// 임시 데이터
const data = useMemo(() => [{
"Rank": "1",
"ID": "아이디에용",
"Score": "95",
"Time": "2021-08-03 01:15:49",
}], []) 


// useTable에다가 작성한 columns와 data를 전달한 후 아래 4개의 props를 받아온다
const Ranking = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });
  
    return (
      <TableSheet {...getTableProps()}>
        <TableHead>
          {headerGroups.map(header => (
            // getHeaderGroupProps를 통해 header 배열을 호출한다
            <Header {...header.getHeaderGroupProps()}>
              {header.headers.map(col => (
                // getHeaderProps는 각 셀 순서에 맞게 header를 호출한다
                <Th {...col.getHeaderProps()}>{col.render('Header')}</Th>
              ))}
            </Header>
          ))}
        </TableHead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              // getRowProps는 각 row data를 호출해낸다
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  // getCellProps는 각 cell data를 호출해낸다
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableSheet>
    );
  };

*/