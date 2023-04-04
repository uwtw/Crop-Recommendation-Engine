import { Box, Grid, styled, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import * as React from 'react';
import { location } from './LocationConstantsCRS.jsx';


const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const LocationDropDownCRS = (props) => {

  return (
    <Grid container spacing={3} sx={{ mb: "24px" }}>
      <Grid item xs={12} md={6}>
        <ContentBox>
          <FormControl sx={{ m: 1, minWidth: 400 }}>
            <InputLabel id="demo-controlled-open-select-label">
              State
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              label="State"
              onChange={(event) => {
                props.changeState(event.target.value);
              }}
            >
              {Object.entries(location).map(([state, value], index) => (
                <MenuItem key={index} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ContentBox>
      </Grid>
      <Grid item xs={12} md={6}>
        <ContentBox>
          <FormControl sx={{ m: 1, minWidth: 400 }}>
            <InputLabel id="demo-controlled-open-select-label">
              District
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              label="District"
              onChange={(event) => {
                props.changeDistrict(event.target.value);
              }}
            >
              {location[props.state].map((district, index) => (
                <MenuItem key={index} value={district}>
                  {district}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ContentBox>
      </Grid>
    </Grid>
  );
};

export default LocationDropDownCRS;
