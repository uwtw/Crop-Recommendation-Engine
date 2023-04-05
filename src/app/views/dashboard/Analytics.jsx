import { Card, Grid, styled, useTheme, Button, Box } from '@mui/material';
import { Fragment, useState } from 'react';
import Campaigns from './shared/Campaigns';
import DoughnutChart from './shared/Doughnut';
import LocationDropDownCRS from './shared/LocationDropDownCRS';
import MaximizationToggleCRS from './shared/MaximizationToggleCRS';
import RowCards from './shared/RowCards';
import StatCards from './shared/StatCards';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';
import UpgradeCard from './shared/UpgradeCard';
import OutputCRS from './shared/OutputCRS';
import CropMonthComponentsCRS from "./shared/CropMonthComponentsCRS";
import axios from "axios";
import React from 'react';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const InnerContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const { palette } = useTheme();

  const [mode, setMode] = React.useState('yield');
  const [ state, setState ] = React.useState('');
  const [ district, setDistrict ] = React.useState('');
  const [ cropSelection, setCropSelection ] = React.useState(true);
  const [ crop, setCrop ] = React.useState('');
  const [ time, setTime ] = React.useState('');
  const [ output, setOutput ] = useState('');

  const changeMode = (state) => {
    if (state === true) {
      setMode("profit");
    } else {
      setMode("yield");
    }
    console.log("mode changed.", mode);
  }

  const changeState = (state) => {
    setState(state);
    console.log("state: ",state);
  }

  const changeDistrict = (district) => {
    setDistrict(district);
    console.log("District: ", district);
  }

  const changeCropSelection = () => {
    console.log("Crop selection before: ", cropSelection);
    setCropSelection(!cropSelection);
    console.log("Crop selection: ", cropSelection);
  }

  const changeCrop = (crop) => {
    setCrop(crop);
    setTime("");
    console.log("Crop: ", crop);
  }

  const changeTime = (time) => {
    setTime(time);
    setCrop("");
    console.log("Time: ", time);
  }

  const handleFormSubmit = () => {
    const dataToSend = { "mode": mode, "state": state, "district": district, "crop": crop, "time": time};
    console.log(dataToSend);
    console.log("Sending request");
    axios({
      method: "POST",
      url:"/recommendation", 
      data: dataToSend, 
    })
    .then((response) => {
      const res =response.data
      setOutput((res.output))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <StyledCard>
              <MaximizationToggleCRS changeMode={changeMode} />
              <LocationDropDownCRS
                state={state}
                changeState={changeState}
                changeDistrict={changeDistrict}
              />
              <CropMonthComponentsCRS
                cropSelection={cropSelection}
                changeCropSelection={changeCropSelection}
                changeCrop={changeCrop}
                changeTime={changeTime}
              />
              <InnerContentBox>
                <Button variant="contained" onClick={handleFormSubmit}>
                  Submit
                </Button>
              </InnerContentBox>
            </StyledCard>

            <OutputCRS output={output} />

            <StatCards />
            <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Crop Sources</Title>
              <SubTitle>Last 30 days</SubTitle>

              <DoughnutChart
                height="300px"
                color={[
                  palette.primary.dark,
                  palette.primary.main,
                  palette.primary.light,
                ]}
              />
            </Card>

            <UpgradeCard />
            <Campaigns />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
