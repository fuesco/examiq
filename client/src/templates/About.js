import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Layout, PageHeader } from '../organisms';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <PageHeader title={'About Examiq'} />
    </Layout>
  );
}
  
export default About;