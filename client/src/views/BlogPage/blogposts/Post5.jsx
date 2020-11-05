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

export default function Post5() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Sunday, 10/11:</h2>
            <h4>
              James and Rachel got some food before meeting and Rachel tried
              Freshroll for the first time. Shuming joined the Zoom meeting as
              we all ate together. Shuming showed his really cute dog (her
              name’s Hunter) to everyone and had a productive team meeting
              afterwards where clarifications on progress and questions on the
              models were answered. James also did a little review session on
              transfer learning and CNNs.
            </h4>
          </GridItem>
        </GridContainer>

        <br></br>
        {/* Image Here */}
      </div>
    </div>
  );
}
