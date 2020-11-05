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
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(styles);

export default function Post1() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Saturday, 9/26:</h2>
            <h4>
              Our first project social! Those of us in Berkeley, (James, Armaan,
              Rachel, Kevin) met up for lunch at Imm Thai Street Food, and we
              face-timed Carly and Shuming as we ate on the roof. Great start to
              the semester, excited for the first project meeting tomorrow!
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} md = {8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel >
                <div>
                  <img src={image} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      James's Rooftop
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
