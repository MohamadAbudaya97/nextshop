import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { gql, useQuery } from "@apollo/client";
import Image from 'next/image'
import {getComparator,stableSort} from './functions'
import {EnhancedTableToolbar,EnhancedTableHead} from './Components'
import {Data,ISelected,Order} from './interface'

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('brand');
  const [selected, setSelected] = React.useState<ISelected|null>(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { loading, error, data } = useQuery(
         gql`
            query Query {
                products {
                  name
                  _id
                  image
                  brand
                  price {
                    price
                  }
                  inStock
                }
              }
        `
  );

  if(loading) return <p>Loading...</p>;

  if(error) return <p>Error :</p>;


  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };



  const handleClick = (event: React.MouseEvent<unknown>, Dataselected: ISelected) => {
    console.log(selected?.id!=Dataselected?.id)
    if(selected?.id!=Dataselected?.id){
      setSelected(Dataselected);
    }else{
       setSelected(null);
    }
   
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const isSelected = (id: string) => selected?.id==id;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.products?.length) : 0;

  return (
    <Box sx={{ width: '100%' }} dir="rtl">
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar Selected={selected} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              Selected={selected}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data?.products.length}
            />
            <TableBody>
              {stableSort(data?.products, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row?._id as string);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, {id:row._id,name:row.name} as ISelected )}
                      role="checkbox"
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row?.brand}</TableCell>
                      <TableCell align="right"><Image src={row?.image[0]?row?.image[0]:"https://ae01.alicdn.com/kf/H7beb9a854b2e4b2b972674c2414dc448y/Camera-Lens-Matte-transparent-Protection-Case-For-iPhone-13-MiNi-12-Pro-Max-11-Pro-8.jpg_220x220xz.jpg_.webp"} alt='sadasd' width={60} height={60}></Image></TableCell>
                      <TableCell align="right">{row?.price?.price} دولار</TableCell>
                      <TableCell align="right">{row.inStock} قطعه</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          dir="ltr"
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data?.products?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </Box>
  );
}
