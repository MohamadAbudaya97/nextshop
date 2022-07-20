import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import CropRotateOutlinedIcon from '@mui/icons-material/CropRotateOutlined';
import Move from './move'


export default function OpenIconSpeedDial() {
    const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Box style={{position:"fixed",right:16,bottom:16,zIndex:1200}} sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        > 
          <SpeedDialAction
              icon={<SaveIcon color='success'/>}
              tooltipTitle="حفظ"
          />
          <SpeedDialAction
              icon={<CropRotateOutlinedIcon/>}
              tooltipTitle="تغيير الاماكن"
              onClick={handleClickOpen}
          />

        </SpeedDial>
      </Box>
      <Move
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
