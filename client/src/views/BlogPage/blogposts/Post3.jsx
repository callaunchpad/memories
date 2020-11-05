import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import image from "../images/memorialstadium.png";
import { Card } from "@material-ui/core";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(styles);

export default function Post3() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Thursday, 10/1:</h2>
            <h4>
              James, Oleksii, Kevin and Rachel snuck into Memorial Stadium at
              night! Brought some drinks, Kevin showed his frat side, and got
              kicked out by the most BETA security guard of all time.
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
                      Memorial Stadium
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
