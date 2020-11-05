import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import LinearProgress from "@material-ui/core/LinearProgress";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import axios from "axios";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const [isSubmitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState("");
  const [showImage, setImage] = useState("");
  const { ...rest } = props;

  async function getMax(data) {
    var maxProp = null;
    var maxValue = Number.NEGATIVE_INFINITY;
    for (var prop in data) {
      // if (data.hasOwnProperty(prop)) {
        var value = data[prop]
        if (value > maxValue) {
          maxProp = prop
          maxValue = value
        }
      }
    return maxProp;
  }

  async function handleImageChange(event) {
    setSubmitting(true);
    try {
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("file", image, "file");
      
      const response = await axios.post('https://us-central1-memories-292920.cloudfunctions.net/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      //json response
      console.log(response);

      let maxProp = getMax(response.data.results)

      setImage(URL.createObjectURL(image));

    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  function handleUploadImage() {
    const fileInput = document.getElementById("userImageInput");
    fileInput.click();

  }


  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Launchpad Fall 2020"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Upload an image</h4>
                  </CardHeader>
                  <CardBody>
                    <Card>
                      <img src={showImage}></img>
                    </Card>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <input
                      type="file"
                      id="userImageInput"
                      onChange={handleImageChange}
                      hidden={true}
                    />
                    <Button
                      onClick={handleUploadImage}
                      simple
                      color="primary"
                      size="lg"
                    >
                      Upload
                    </Button>
                    
                  </CardFooter>
                  {isSubmitting && <LinearProgress />}
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
