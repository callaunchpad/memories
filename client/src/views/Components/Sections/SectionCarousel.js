import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "views/BlogPage/images/first-meeting-standing.jpg";
import image2 from "views/BlogPage/images/memorialstadium.png";
import image3 from "views/BlogPage/images/ninjastars.png";
import image4 from "views/BlogPage/images/first-meeting-sitting.jpg";
import image6 from "views/BlogPage/images/midsemester2.png";
import image7 from "views/BlogPage/images/project-grind.png";
import image8 from "views/BlogPage/images/memories-cover.png";
import image9 from "views/BlogPage/images/11:22.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-carousel"/>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      James's Rooftop
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-carousel"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Memorial Stadium
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-carousel" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Zoom
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image4}
                    alt="Fourth slide"
                    className="slick-carousel"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      James's Rooftop
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image6} alt="Sixth slide" className="slick-carousel" />
                </div>
                <div>
                  <img
                    src={image7}
                    alt="Seventh slide"
                    className="slick-carousel"
                  />
                </div>
                <div>
                  <img
                    src={image8}
                    alt="Eighth slide"
                    className="slick-carousel"
                  />
                </div>
                <div>
                  <img
                    src={image9}
                    alt="Ninth slide"
                    className="slick-carousel"
                  />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
