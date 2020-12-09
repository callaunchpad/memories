import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import image from "../images/midsemester1.png";
import image2 from "../images/midsemester2.png";
import { Card } from "@material-ui/core";
import Carousel from "react-slick";

const useStyles = makeStyles(styles);

export default function Post9() {
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
            <h2>Wednesday, 11/4 - Midsemester Deliverable:</h2>
            <h4>
              Midsemester was a great success, everyone presented their progress
              during the presentation and we revealed our awesome website!
              Everyone loved our blog and demo, as evident from the posts from
              our Launchpad group chat.
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
                  <img src={image2} alt="First slide" className="slick-image" />
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
