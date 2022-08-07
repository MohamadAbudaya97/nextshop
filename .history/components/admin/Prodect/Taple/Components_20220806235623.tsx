import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import EditIcon from '@mui/icons-material/Edit';
import {HeadCell,EnhancedTableProps,Data,EnhancedTableToolbarProps} from './interface'
import {DeleteProdect} from "@Services/prodect.service"
import { useSnackbar } from 'notistack';
import Edit from '@Components/admin/Prodect/Edit'

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'الاسم',
  },
  {
    id: 'brand',
    numeric: true,
    disablePadding: false,
    label: 'العلامه التجاريه',
  },
  {
    id: 'image',
    numeric: true,
    disablePadding: false,
    label: 'الصوره',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'السعر',
  },
  {
    id: 'inStock',
    numeric: true,
    disablePadding: false,
    label: 'الكميه المتوفره',
  },
];


export function EnhancedTableHead(props: EnhancedTableProps) {
  const {  order, orderBy, Selected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={ 'right'}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


export const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { Selected } = props;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const Delete=async ()=>{
  const response =  await DeleteProdect(Selected?.id)
   enqueueSnackbar(response.message,{variant:response.success?"success":"error"});
  }
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(Selected !=null && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {Selected !=null ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {Selected.name}
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          قائمه المنتجات
        </Typography>
      )}
      {Selected !=null ? (
        <>
        <Edit />
        <Tooltip title="حذف">
          <IconButton color="error" onClick={Delete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        </>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};