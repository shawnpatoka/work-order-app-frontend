import { Divider, Typography, Container } from "@mui/material"
import PageTitle from "../components/PageTitle"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react'
import ActionButton from "../components/ActionButton";





function WorkOrdersPage() {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          // const api: GridApi = params.api;
          // const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return alert(JSON.stringify(thisRow, null, 4));
        };

        return <ActionButton />;
      }
    },
  ];

  const rows = [
    { id: 112, lastName: 'Snow', firstName: 'Jon', age: 35, action: '' },
    { id: 223, lastName: 'Lannister', firstName: 'Cersei', age: 42, action: '' },
    { id: 312, lastName: 'Lannister', firstName: 'Jaime', age: 45, action: '' },
    { id: 423, lastName: 'Stark', firstName: 'Arya', age: 16, action: '' },
    { id: 578, lastName: 'Targaryen', firstName: 'Daenerys', age: null, action: '' },
    { id: 648, lastName: 'Melisandre', firstName: null, age: 150, action: '' },
    { id: 728, lastName: 'Clifford', firstName: 'Ferrara', age: 44, action: '' },
    { id: 891, lastName: 'Frances', firstName: 'Rossini', age: 36, action: '' },
    { id: 913, lastName: 'Roxie', firstName: 'Harvey', age: 65, action: '' },
  ];


  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };


  return (
    <>
      <PageTitle title="Work Orders" />
      <Container sx={{ mt: 2 }}>
        <Box sx={{ height: 400, width: '100%', bgcolor: 'primary.white' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
        <Box>
          <Typography variant="h3" sx={{ mt: 3, mb: 1 }}>Selected Rows:</Typography>
          <Typography variant="body1">{rowSelectionModel.join(", ")}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
      </Container>
    </>
  )
}

export default WorkOrdersPage