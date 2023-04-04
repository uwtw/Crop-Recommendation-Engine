import { Card, Grid, styled } from '@mui/material';

const ContentBox = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
}));

const OutputCRS = (props) => {
  return (
    <Grid style={{marginTop: 10}} container sx={{ mb: 3 }}>
      <Grid item xs={12}>
        <Card elevation={3} sx={{ p: 2 }}>
          <ContentBox>
            <span style={{ paddingRight: 40, paddingLeft: 30 }}>{props.output}</span>
          </ContentBox>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OutputCRS;
