import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Making Unforgettable Memories</h2>
            <h4>
              Welcome to the Memories project, a web app where users can upload
              pictures from their photo album and generate ambient sounds and
              songs from the image’s scenery and emotion. Our software uses
              pre-trained models such as Resnet and Soundnet and a multimodal
              architecture to deconstruct both images and audio.
              <br></br>
              <br></br>
              In between our work sessions where we build our training models,
              we also make sure to create some meaningful
              experiences together no matter where we are.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
