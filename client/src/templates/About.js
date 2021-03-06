import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Layout, PageHeader } from '../organisms';
import indexBannerSvg from '../static/index-banner.svg';
const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <PageHeader title={'About ExamIQ'} imgSrc={indexBannerSvg} />
    </Layout>
  );
}
  
export default About;