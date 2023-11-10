import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "./../ui/ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";
import ReactPlayer from "react-player";
import CircularProgress from "@material-ui/core/CircularProgress";

import data from "./../../apis/local";
import CallToAction from "./../ui/CallToAction";
//import animationData from "./../animations/landinganimation/data";

import revolutionBackground from "./../../assets/repeatingBackground.svg";
import infoBackground from "./../../assets/infoBackground.svg";

import background from "./../../assets/images/headers/aboutus.png";
import UpperFooter from "./../ui/UpperFooter";
import TopCover from "./../homePageCards/TopCover";
import LearningPath from "./../homePageCards/LearningPath";
import AboutUsHeader from "./AboutUsHeader";
import AboutUsExecTitle from "./AboutUsExecTitle";
import AboutUsBotTitle from "./AboutUsBotTitle";
import ExcoMembersCard from "./ExcoMembersCard";
import AlmaMataHistoryTitle from "./AlmaMataHistoryTitle";

//import mobileBackground from "./../../assets/mobileBackground.jpg";

import AllCourses from "./../homePageCards/AllCourses";
import BotChairmanCard from "./BotChairmanCard";
import BotMembersCard from "./BotMembersCard";
import botDefaultImage from "./../../assets/images/bot/default-user.jpg";
import excoDefaultImage from "../../assets/images/exco/default-user.jpg";
import bunmi from "../../assets/images/exco/bunmi.jpg";
import taju from "../../assets/images/exco/taju.png";
import joe from "../../assets/images/exco/joe.jpg";
import lauretta from "../../assets/images/exco/lauretta.jpg";
import ndi from "../../assets/images/exco/ndi.jpg";
import helen from "../../assets/images/exco/helen.jpg";
import udeme from "../../assets/images/exco/udeme.jpg";
import austin from "../../assets/images/exco/austin.jpg";
import kolawale from "../../assets/images/exco/kola.jpg";
import felix from "../../assets/images/exco/felix.jpg";
import joeBot from "../../assets/images/bot/joe.jpg";
import mary from "../../assets/images/exco/mary.jpg";
import gloria from "../../assets/images/bot/gloria.jpg";
import efe from "../../assets/images/bot/efe.jpg";
import tunde from "../../assets/images/bot/tunde.jpg";
import gladys from "../../assets/images/bot/gladys.jpg";
import epereyi from "../../assets/images/exco/epereyi.jpg";

import { baseURL } from "./../../apis/util";
import { Usb } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    // height: "100%",
    marginTop: 90,
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "99rem",
    height: "42rem",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  animation: {
    // maxWidth: "100em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 250,
    marginRight: 10,
    marginLeft: 130,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
  },
  estimateButtonMobile: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 220,
    marginRight: 10,
    marginLeft: 20,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
  },
  buttonContainer: {
    marginTop: "3.9em",
    marginLeft: "6.9em",
  },
  buttonContainerMobile: {
    marginTop: "4.2em",
    marginLeft: "3.5em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 45,
    width: 145,
  },
  visitPartnerButtonsite: {
    ...theme.typography.partnerButton,
    fontSize: "0.9rem",
    height: 45,
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    border: `2px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    marginLeft: "2px",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },

  topCover: {
    marginTop: "20em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },

  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  footer: {
    width: "100%",
    marginTop: "10rem",
  },
  category: {
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  vendor: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  logistics: {
    marginTop: "15rem",
    marginBottom: "5rem",
  },
  promotion: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  features: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
}));

const AboutUs = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [contactUsOpen, setContactUsOpen] = useState(false);
  const [becomePartnerOpen, setBecomePartnerOpen] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [coursesList, setCourseList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const defaultOptions = {
    loop: true,
    autoplay: false,
    //animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidyMid slice",
    },
  };

  const handleBecomeAPartnerOpenDialogBox = () => {
    setBecomePartnerOpen(false);
  };

  const handleSuccessfulBecomeAPartnerOpenDialogBoxWithSnackbar = () => {
    setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: "Application successfully submitted",
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedBecomeAPartnerOpenDialogBoxWithSnackbar = () => {
    setAlert({
      open: true,
      message: "Something went wrong somewhere",
      backgroundColor: "#FF3232",
    });
    setBecomePartnerOpen(true);
  };

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const dataList = [
    {
      id: "bot1",
      name: "Bayagbon Efe",
      title: "Chairman",
      image: efe,
      alt: "efe bayahbon",
    },
    {
      id: "bot2",
      name: "Ojebuovboh Joseph Omoniyi ",
      title: "Secretary",
      image: joeBot,
      alt: "Joseph Omoniyi",
    },
    {
      id: "bot3",
      name: "Okoloko-Ideh Glory Alokpo",
      title: "Member",
      image: gloria,
      alt: "Glory Alokpo",
    },
    {
      id: "bot4",
      name: "Omikunle Babatunde Douglas ",
      title: "Member",
      image: tunde,
      alt: "Babatunde Douglas",
    },
    {
      id: "bot5",
      name: "Okubowei Uzezi Gladys",
      title: "Member",
      image: gladys,
      alt: "Uzezi Gladys",
    },
  ];

  const excoList = [
    {
      id: "exco1",
      name: "Ojeniyi Tajudeen Collins",
      title: "National President",
      image: taju,
      alt: "Ojeniyi Tajudeen Collins",
    },
    {
      id: "exco2",
      name: "Mary Ejoh",
      title: "1st Vice President",
      image: mary,
      alt: "Mary Ejoh",
    },
    {
      id: "exco3",
      name: "Austin Nduba",
      title: "2nd Vice President",
      image: austin,
      alt: "Austin Nduba",
    },
    {
      id: "exco4",
      name: "Lauretta Emaguna",
      title: "Secretary General",
      image: lauretta,
      alt: "Lauretta Emaguna",
    },
    {
      id: "exco5",
      name: "Helen Ogonegbu",
      title: "Assistant Secretary General",
      image: helen,
      alt: "Helen Ogonegbu Assistant",
    },
    {
      id: "exco6",
      name: "Oluwabunmi Precious Ikuomola",
      title: "Treasurer",
      image: bunmi,
      alt: "Oluwabunmi Precious Ikuomola",
    },
    {
      id: "exco7",
      name: "Joseph Ojebuovboh",
      title: "Assistant Treasurer",
      image: joe,
      alt: "Joseph Ojebuovboh",
    },
    {
      id: "exco8",
      name: "Kolawole Gabriel",
      title: "Financial Secretary General",
      image: kolawale,
      alt: "Kolawole Gabriel",
    },
    {
      id: "exco9",
      name: "Epereyi Fano",
      title: "Assistant Financial Secretary General",
      image: epereyi,
      alt: "Epereyi Fano",
    },
    {
      id: "exco10",
      name: "Victoria Woniebi",
      title: "Publicity Secretary",
      image: excoDefaultImage,
      alt: "Victoria Woniebi",
    },
    {
      id: "exco11",
      name: "Ndifreke Akpan Ettong",
      title: "Assistant Publicity Secretary",
      image: ndi,
      alt: "Ndifreke Akpan Ettong",
    },
    {
      id: "exco12",
      name: "Udeme Essien",
      title: "Welfare Officer",
      image: udeme,
      alt: "Udeme Essien",
    },
    {
      id: "exco13",
      name: "Felix Nwaogu",
      title: "Assistant Welfare Officer",
      image: felix,
      alt: "Felix Nwaogu",
    },
  ];

  const Str = require("@supercharge/strings");

  const allBotList = matchesMD ? (
    <React.Fragment>
      {
        <Grid container direction="row">
          {dataList.map((data, index) => (
            <BotMembersCard
              name={data.name}
              key={`${data.id}${index}`}
              title={data.title}
              image={data.image}
              token={props.token}
              userId={props.userId}
              setToken={props.setToken}
              setUserId={props.setUserId}
            />
          ))}
        </Grid>
      }
    </React.Fragment>
  ) : (
    <React.Fragment>
      {
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {dataList.map((data, index) => (
            <BotMembersCard
              name={data.name}
              key={`${data.id}${index}`}
              title={data.title}
              token={props.token}
              image={data.image}
              userId={props.userId}
              setToken={props.setToken}
              setUserId={props.setUserId}
            />
          ))}
        </Grid>
      }
    </React.Fragment>
  );

  const allExcoList = matchesMD ? (
    <React.Fragment>
      {
        <Grid container direction="row">
          {excoList.map((data, index) => (
            <ExcoMembersCard
              name={data.name}
              key={`${data.id}${index}`}
              title={data.title}
              image={data.image}
              token={props.token}
              userId={props.userId}
              setToken={props.setToken}
              setUserId={props.setUserId}
            />
          ))}
        </Grid>
      }
    </React.Fragment>
  ) : (
    <React.Fragment>
      {
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {excoList.map((data, index) => (
            <ExcoMembersCard
              name={data.name}
              key={`${data.id}${index}`}
              title={data.title}
              image={data.image}
              token={props.token}
              userId={props.userId}
              setToken={props.setToken}
              setUserId={props.setUserId}
            />
          ))}
        </Grid>
      }
    </React.Fragment>
  );

  return (
    <>
      {/* <Grid container direction="row" className={classes.mainContainer}> */}
      <Grid container direction="row" className={classes.root}>
        {/* <section className={classes.root}> */}
        <Grid
          container
          alignItems="center"
          className={classes.background}
          justifyContent={matchesSM ? "center" : "space-between"}
          direction={matchesSM ? "column" : "row"}
          style={{ marginTop: -100 }}
        >
          <Grid item>
            {" "}
            {/*..... HERO BLOCK.... */}
            <Grid
              container
              //justifyContent="flex-end"
              //alignItems="center"
              direction="row"
            >
              {/* <ReactPlayer
                url={matchesSM ? heroVideoMobile : heroVideo}
                playing
                loop
                muted
                // width="100%"
                // height="100%"
                width="99rem"
                height="49rem"
              /> */}
              {/* <div className={classes.overlay}> */}
              {/* <img
                src={logo}
                alt="Udaraa Marketplace"
                width={180}
                height={150}
              /> */}
              <Box
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                //justifyContent="center"
                //alignItems="center"
                color="#fff"
              >
                <Grid sm item className={classes.heroTextContainer}>
                  {matchesMD ? (
                    <Typography
                      variant={matchesSM ? "subtitle2" : "h1"}
                      align="left"
                      style={{ marginTop: "1rem" }}
                    >
                      <span
                        style={{
                          marginLeft: matchesSM ? 20 : 5,
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        Who We Are <br />
                      </span>{" "}
                    </Typography>
                  ) : (
                    <Typography
                      variant={matchesSM ? "subtitle2" : "h2"}
                      align="left"
                      style={{ marginTop: "16rem", fontSize: "2.2rem" }}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <span
                        style={{
                          marginLeft: matchesSM ? 7 : 5,
                        }}
                      >
                        Who We Are
                        <br />
                      </span>{" "}
                      {/* <span style={{ marginLeft: matchesSM ? 20 : 60 }}>
                        that makes professionals from novices
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 30 : 110 }}>
                        and experts from professionals
                      </span> */}
                    </Typography>
                  )}

                  {/* {matchesMD ? (
                    <Grid
                      container
                      justifyContent="flex-start"
                      direction={matchesSM ? "column" : "row"}
                      // className={classes.topCover}
                    >
                      
                    </Grid>
                  ) : (
                    
                  )} */}
                </Grid>
              </Box>
              {/* </div> */}
              {/* <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        {/* </section> */}

        <AboutUsHeader />
        <AboutUsBotTitle />

        {/* <BotChairmanCard /> */}
        {isLoading && (
          <CircularProgress
            size={100}
            color="inherit"
            style={{ marginTop: 250, marginLeft: 650 }}
          />
        )}
        {!isLoading && <Grid item>{allBotList}</Grid>}
        <AboutUsExecTitle />
        {!isLoading && <Grid item>{allExcoList}</Grid>}
        <AlmaMataHistoryTitle />

        <Grid item className={classes.footer}>
          <UpperFooter />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
