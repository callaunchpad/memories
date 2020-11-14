import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import post1 from './blogposts/Post1';
import post2 from './blogposts/Post2';
import post3 from './blogposts/Post3';
import post4 from './blogposts/Post4';
import post5 from './blogposts/Post5';
import post6 from './blogposts/Post6';
import post7 from './blogposts/Post7';



import image1 from './images/first-meeting-standing.jpg';
import image2 from "./images/first-meeting-sitting.jpg";
import image3 from "./images/project-grind.png";
import image4 from "./images/memorialstadium.png";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  // { title: 'Technology', url: '#' },
  // { title: 'Design', url: '#' },
  // { title: 'Culture', url: '#' },
  // { title: 'Business', url: '#' },
  // { title: 'Politics', url: '#' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Our First Project Social',
  description:
    "Our first project social where we met on James's apartment rooftop.",
  image: image1,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured Post',
    date: 'Oct 1',
    description:
      'A spontaneous adventure into Memorial Stadium.',
    image: image4,
    imageText: 'Memorial Stadium',
    link: './post3',
  },
  {
    title: 'Most Recent Post',
    date: 'Nov 3',
    description:
      'Preparing for the midsemester deliverable.',
    image: image3,
    imageText: 'Midsemester Deliverable Grind',
    link: './post8',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "A collection of our memories throughout the semester during our project meetings!",
  archives: [
    { title: "11/3/20", url: "./post8" },
    { title: "10/24/20", url: "./post7" },
    { title: "10/18/20", url: "./post6" },
    { title: "10/11/20", url: "./post5" },
    { title: "10/4/20", url: "./post4" },
    { title: "10/1/20", url: "./post3" },
    { title: "9/27/20", url: "./post2" },
    { title: "9/26/20", url: "./post1" },
  ],
  social: [{ name: "GitHub", icon: GitHubIcon }],
};

export default function BlogPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title=" Memories Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="The Start of Our Memories"/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Memories" description="A Launchpad Project Team" />
    </React.Fragment>
  );
}