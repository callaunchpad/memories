import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import image from "../images/ninjastars.png";
import { Card } from "@material-ui/core";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(styles);

export default function Post6() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Sunday, 10/18:</h2>
            <h4>
              Today’s meeting was held downstairs at Armaan’s place, and it was
              actually quite nice in the shade. Everyone is on track with their
              models, and ready to wrap them up by next week to start moving
              them onto the web app. The meeting wrapped up with an origami
              social, where Armaan showed the project team how to make ninja
              stars!
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
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Armaan's Place
                    </h4>
                  </div>
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
