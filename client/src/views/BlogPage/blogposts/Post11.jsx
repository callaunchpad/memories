import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import image from "../images/memories-cover.png";
import { Card } from "@material-ui/core";
import Carousel from "react-slick";

const useStyles = makeStyles(styles);

export default function Post11() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Tuesday, 12/8:</h2>
            <h4>
              Day before Final Showcase! The team is getting our presentation,
              website demo, and blog ready for tomorrow. We got both the Image
              Emotion Classifier and Song Emotion Classifier on the website for
              everyone to try, all tied together with this awesome website
              Rachel made. Also enjoy this photoshopped team pic by Armaan:
            </h4>
          </GridItem>

          <GridItem
            xs={12}
            sm={12}
            md={8}
            md={8}
            className={classes.marginAuto}
          >
            <Card carousel>
              <Carousel>
                <div>
                  <img src={image} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>

        <br></br>
        {/* Image Here */}
      </div>
    </div>
  );
}
