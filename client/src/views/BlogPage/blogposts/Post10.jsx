import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import image from "../images/11:22.png";
import { Card } from "@material-ui/core";
import Carousel from "react-slick";

const useStyles = makeStyles(styles);

export default function Post10() {
  const classes = useStyles((theme) => ({
    margin: {
      marginTop: theme.spacing(3),
    },
  }));
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Sunday, 11/22</h2>
            <h4>
              After a successful demo + midsemester deliverable, the team
              reunites to tackle the models and website for the final showcase.
              The subteams’ new tasks are as follows: Armaan and Carly will
              continue with their Song-Emotion Classifier, Kevin and Shuming
              will now work on a time-series (RNN/LSTM/GRU) model for
              classifying songs, and James and Rachel will fine-tune their
              baseline model and work on the website. During the meeting, we
              discussed the paper “Learning Affective Correspondence between
              Music and Image,” and wrapped up by saying hi to Shuming and
              Carly’s dogs!
            </h4>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={8}
            md={8}
            className={classes.marginAuto}
          >
            <Card carousel paddingTop={2}>
              <Carousel>
                <div>
                  <img src={image} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>

        <br></br>
      </div>
    </div>
  );
}
