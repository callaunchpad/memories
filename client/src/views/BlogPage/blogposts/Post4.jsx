import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import { Card } from "@material-ui/core";


const useStyles = makeStyles(styles);

export default function Post4() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Sunday, 10/4:</h2>
            <h4>
              The team met at Armaan’s place but had to wait 30 minutes for him
              to show up at his own place :/ (Note: everyone but Shuming, Carly,
              James were lateee) (Couldn’t connect to wifi since he thought it
              was funny to name it “Big Deck” instead of his address smh
              [everyone else thought it was funny too]). Rachel also waited
              outside for 20 mins because nobody saw her message but followed
              James’s loud voice to find the rest of the team on Armaan’s
              balcony. The team also went over how to set up CSUA and James did
              a little review on CNNs and the underlying functions of Resnets.
            </h4>
          </GridItem>
          
        </GridContainer>

        <br></br>
        {/* Image Here */}
      </div>
    </div>
  );
}
