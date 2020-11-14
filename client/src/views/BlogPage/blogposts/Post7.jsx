import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import image from "../images/first-meeting-standing.jpg";
import { Card } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Post7() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Saturday, 10/24:</h2>
            <h4>
              Kevin and Shuming had a zoom meeting to finalize our model. We
              tuned several parameters to maximize the test accuracy on 8
              classes. We tried toggling dropout, decreasing learning rate,
              cropping versus resizing images, and number of epochs. We settled
              with 42% accuracy and are now trying to upload the model to GCP.
            </h4>
          </GridItem>
        </GridContainer>

        <br></br>
        {/* Image Here */}
      </div>
    </div>
  );
}
