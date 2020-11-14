import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";


const useStyles = makeStyles(styles);

export default function Post2() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Sunday, 9/27:</h2>
            <h4>
              First project meeting! Very productive meeting where we set up our
              repos and split into project teams: Image-Emotion Classifier
              (Kevin and Shuming), Song-Emotion Classifier (Armaan and Carly),
              Imaginary Soundscape team (James and Rachel). Had a short
              educational talk about PyTorch and CNNs, everyone seems ready to
              go and build some cool models :)
            </h4>
          </GridItem>
        </GridContainer>

        <br></br>
        {/* Image Here */}
      </div>
    </div>
  );
}
