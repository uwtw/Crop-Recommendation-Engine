import { Box, Card, Grid, styled, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import * as React from 'react';

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const CropMonthDropDownCRS = () => {
  const [crop, setCrop] = React.useState('');
  const [time, setTime] = React.useState('');

  const handleChangeCrop = (event) => {
    setCrop(event.target.value);
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const cropList = ['Wheat', 'Jowar', 'Ragi', 'Maize', 'Paddy', 'Rice', 'Cotton', 'Corn'];
  const timeList = ['Kharif season', 'Rabi season', 'Summer season'];

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      <Grid item xs={12} md={6}>
        <ContentBox>
          <FormControl sx={{ m: 1, minWidth: 400 }}>
            <InputLabel id="demo-controlled-open-select-label">Crop</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={crop}
              label="Crop"
              onChange={handleChangeCrop}
            >
              {cropList.map((crop, index) => (
                <MenuItem key={index} value={crop}>
                  {crop}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ContentBox>
      </Grid>
      <Grid item xs={12} md={6}>
        <ContentBox>
          <FormControl sx={{ m: 1, minWidth: 400 }}>
            <InputLabel id="demo-controlled-open-select-label">Time</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={time}
              label="time"
              onChange={handleChangeTime}
            >
              {timeList.map((time, index) => (
                <MenuItem key={index} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ContentBox>
      </Grid>
    </Grid>
  );
};

export default CropMonthDropDownCRS;
