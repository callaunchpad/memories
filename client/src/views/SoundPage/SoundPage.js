import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

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

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import backgroundImage from "assets/img/bg7.jpg";
import axios from "axios";
import { Typography } from "@material-ui/core";
import uploadImage from "./sound-gif.gif";
// import uploadSound from "assets/audio/example_audio.mp3";

const useStyles = makeStyles(styles);

export default function SoundPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const [isSubmitting, setSubmitting] = useState(false);
  const [showImage] = useState(uploadImage);
  const [showSound, setSound] = useState("assets/audio/example_audio.mp3");
  const [maxProp, setMaxProp] = useState("Emotion");
  const { ...rest } = props;

  async function getMax(data) {
    var maxProp = null;
    var maxValue = Number.NEGATIVE_INFINITY;
    for (var prop in data) {
      // if (data.hasOwnProperty(prop)) {
      var value = data[prop];
      if (value > maxValue) {
        maxProp = prop;
        maxValue = value;
      }
    }
    return maxProp;
  }

  async function handleSoundChange(event) {
    setSubmitting(true);
    try {
      const sound = event.target.files[0];
      setSound(URL.createObjectURL(sound));
      document.getElementById("audio").load();

      const formData = new FormData();
      formData.append("file", sound, "file");

      const response = await axios.post(
        "https://us-central1-memories-292920.cloudfunctions.net/predict_song",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      //json response
      console.log(response);

      const emotion = await getMax(response.data.results);

      setMaxProp(emotion);
      
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  function handleUploadSound() {
    const fileInput = document.getElementById("userSoundInput");
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
          backgroundImage: "url(" + backgroundImage + ")",
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
                    <h4>Upload a sound</h4>
                  </CardHeader>
                  <CardBody>
                    <img
                      // resizeMode={"cover"}
                      style={{
                        width: "50%",
                        height: "50%",
                        marginLeft: "25%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      src={showImage}
                    />
                    <audio
                      controls
                      id = "audio"
                      style={{
                        width: "99%",
                        // height: "50%",
                        // marginLeft: "25%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <source src={showSound} />
                    </audio>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <input
                      type="file"
                      id="userSoundInput"
                      onChange={handleSoundChange}
                      hidden={true}
                    />
                    <Button
                      onClick={handleUploadSound}
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
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>{maxProp}</h4>
                </CardHeader>
                <Typography></Typography>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
