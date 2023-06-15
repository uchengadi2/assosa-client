import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "./ui/ButtonArrow";
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

import data from "./../apis/local";
import CallToAction from "./ui/CallToAction";
import animationData from "./../animations/landinganimation/data";

import revolutionBackground from "./../assets/repeatingBackground.svg";
import infoBackground from "./../assets/infoBackground.svg";

import background from "./../assets/images/headers/home.png";
import UpperFooter from "./ui/UpperFooter";
import TopCover from "./homePageCards/TopCover";
import LearningPath from "./homePageCards/LearningPath";
import HomeAboutUs from "./homePageCards/HomeAboutUs";
import HomeMembershipSection from "./homePageCards/HomeMembershipSection";
import HomeProjectSectionSection from "./homePageCards/HomeProjectSectionSection";
import HomeEventsSection from "./homePageCards/HomeEventsSection";
import HomeNoticeBoardSection from "./homePageCards/HomeNoticeBoardSection";
import HomeContactUs from "./homePageCards/HomeContactUs";
import HomeConnectionsSection from "./homePageCards/HomeConnectionsSection";

//import mobileBackground from "./../../assets/mobileBackground.jpg";

import AllCourses from "./homePageCards/AllCourses";

import { baseURL } from "./../apis/util";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    //height: "80vh",
    height: "100%",
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

const Marketplace = (props) => {
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
  const [isLoading, setIsLoading] = useState(null);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
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
    const fetchData = async () => {
      setIsLoading(true);
      let allData = [];
      //data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await data.get("/courses?sort=asc");
      const workingData = response.data.data.data;
      workingData.map((course) => {
        allData.push({
          id: course._id,
          title: course.title,
          image: course.imageCover,
          features: course.features,
          shortDescription: course.shortDescription,
          longDescription: course.longDescription,
          deliveryMethod: course.deliveryMethod,
          duration: course.duration,
          commencementDate: course.commencementDate,
          price: course.price,
          venue: course.venue,
          instructor: course.instructor,
          sessionDuration: course.sessionDuration,
          sessionPeriod: course.sessionPeriod,
          studyPeriod: course.studyPeriod,
          lectureDuration: course.lectureDuration,
          projectDuration: course.projectDuration,
          category: course.category,
          image: course.imageCover,
          prerequisites: course.prerequisites,
          tools: course.tools,
          targetAudience: course.targetAudience,
          whatToLearn: course.whatToLearn,
          venueLink: course.venueLink,
          track: course.track,
          status: course.status,
          commencementWeekdaysDate: course.commencementWeekdaysDate,
          commencementWeekendsDate: course.commencementWeekendsDate,
          channel: course.channel,
          programme: course.programme,
          showGenericWeekdayStartDateText:
            course.showGenericWeekdayStartDateText,
          showGenericWeekendStartDateText:
            course.showGenericWeekendStartDateText,
          genericWeekdayStartDateText: course.genericWeekdayStartDateText,
          genericWeekendStartDateText: course.genericWeekendStartDateText,
          weekdaySessionPeriod: course.weekdaySessionPeriod,
          weekendSessionPeriod: course.weekendSessionPeriod,
          paymentOptions: course.paymentOptions,
          slug: course.slug,
        });
      });
      setCourseList(allData);
      setIsLoading(false);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const Str = require("@supercharge/strings");

  const allCoursesList = matchesMD ? (
    <React.Fragment>
      {
        <Grid container direction="row">
          {coursesList.map((course, index) => (
            <AllCourses
              title={course.title}
              key={`${course.id}${index}`}
              shortDescription={Str(course.shortDescription)
                .limit(500, "...")
                .get()}
              longDescription={course.longDescription}
              features={course.features}
              deliveryMethod={course.deliveryMethod}
              duration={course.duration}
              commencementDate={course.commencementDate}
              price={course.price}
              instructor={course.instructor}
              venue={course.venue}
              sessionDuration={course.sessionDuration}
              lectureDuration={course.lectureDuration}
              projectDuration={course.projectDuration}
              sessionPeriod={course.sessionPeriod}
              studyPeriod={course.studyPeriod}
              category={course.category}
              prerequisites={course.prerequisites}
              tools={course.tools}
              targetAudience={course.targetAudience}
              whatToLearn={course.whatToLearn}
              venueLink={course.venueLink}
              track={course.track}
              status={course.status}
              commencementWeekdaysDate={course.commencementWeekdaysDate}
              commencementWeekendsDate={course.commencementWeekendsDate}
              showGenericWeekdayStartDateText={
                course.showGenericWeekdayStartDateText
              }
              showGenericWeekendStartDateText={
                course.showGenericWeekendStartDateText
              }
              genericWeekdayStartDateText={course.genericWeekdayStartDateText}
              genericWeekendStartDateText={course.genericWeekendStartDateText}
              channel={course.channel}
              programme={course.programme}
              weekdaySessionPeriod={course.weekdaySessionPeriod}
              weekendSessionPeriod={course.weekendSessionPeriod}
              paymentOptions={course.paymentOptions}
              image={course.image}
              courseId={course.id}
              slug={course.slug}
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
          {coursesList.map((course, index) => (
            <AllCourses
              title={course.title}
              key={`${course.id}${index}`}
              shortDescription={Str(course.shortDescription)
                .limit(500, "...")
                .get()}
              longDescription={course.longDescription}
              features={course.features}
              deliveryMethod={course.deliveryMethod}
              duration={course.duration}
              commencementDate={course.commencementDate}
              price={course.price}
              venue={course.venue}
              instructor={course.instructor}
              sessionDuration={course.sessionDuration}
              lectureDuration={course.lectureDuration}
              projectDuration={course.projectDuration}
              sessionPeriod={course.sessionPeriod}
              studyPeriod={course.studyPeriod}
              category={course.category}
              prerequisites={course.prerequisites}
              tools={course.tools}
              targetAudience={course.targetAudience}
              whatToLearn={course.whatToLearn}
              venueLink={course.venueLink}
              track={course.track}
              status={course.status}
              commencementWeekdaysDate={course.commencementWeekdaysDate}
              commencementWeekendsDate={course.commencementWeekendsDate}
              showGenericWeekdayStartDateText={
                course.showGenericWeekdayStartDateText
              }
              showGenericWeekendStartDateText={
                course.showGenericWeekendStartDateText
              }
              genericWeekdayStartDateText={course.genericWeekdayStartDateText}
              genericWeekendStartDateText={course.genericWeekendStartDateText}
              channel={course.channel}
              programme={course.programme}
              weekdaySessionPeriod={course.weekdaySessionPeriod}
              weekendSessionPeriod={course.weekendSessionPeriod}
              paymentOptions={course.paymentOptions}
              image={course.image}
              courseId={course.id}
              slug={course.slug}
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
                      variant={matchesSM ? "subtitle2" : "h2"}
                      align="left"
                      style={{ marginTop: "10rem" }}
                      //justifyContent="center"
                      //alignItems="center"
                    >
                      <span
                        style={{
                          marginLeft: matchesSM ? 20 : 5,
                        }}
                      >
                        {" "}
                        We are old students of Adeolu Secondary School, <br />
                      </span>{" "}
                      <span style={{ marginLeft: matchesSM ? 20 : 50 }}>
                        Tolu School Village, Lagos, bonded together
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 20 : 90 }}>
                        to make positive impacts on our
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 20 : 110 }}>
                        Alma Mata, our Community
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 20 : 180 }}>
                        and our Members
                      </span>
                      <br />
                      {/* <span style={{ marginLeft: matchesSM ? 20 : 130 }}></span> */}
                      {/* <span style={{ marginLeft: matchesSM ? 20 : 100 }}>
                        experts from professionals
                      </span> */}
                    </Typography>
                  ) : (
                    // <Typography
                    //   variant={matchesSM ? "subtitle2" : "h2"}
                    //   align="left"
                    //   style={{ marginTop: "16rem" }}
                    //   //justifyContent="center"
                    //   //alignItems="center"
                    // >
                    //   <span
                    //     style={{
                    //       marginLeft: matchesSM ? 20 : 5,
                    //     }}
                    //   >
                    //     {" "}
                    //     E-Shield Africa is an online/e-commerce
                    //     Marketplace(B2B). <br />
                    //   </span>{" "}
                    //   <span style={{ marginLeft: matchesSM ? 20 : 20 }}>
                    //     Our business is to provide a trusted and unified online
                    //   </span>
                    //   <br />
                    //   <span style={{ marginLeft: matchesSM ? 20 : 50 }}>
                    //     portal for multiple manufacturers, distributors
                    //   </span>
                    //   <br />
                    //   <span style={{ marginLeft: matchesSM ? 20 : 130 }}>
                    //     and vendors. We connect them to
                    //   </span>
                    //   <br />
                    //   <span style={{ marginLeft: matchesSM ? 20 : 130 }}>
                    //     retailers for trade and services.
                    //   </span>
                    // </Typography>
                    // <Typography></Typography>
                    <Typography
                      variant={matchesSM ? "subtitle2" : "h2"}
                      align="left"
                      style={{ marginTop: "16rem", fontSize: "1.2rem" }}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <span
                        style={{
                          marginLeft: matchesSM ? 7 : 5,
                        }}
                      >
                        {" "}
                        We are old students of Adeolu Secondary School, <br />
                      </span>{" "}
                      <span style={{ marginLeft: matchesSM ? 20 : 60 }}>
                        Tolu School Village, Lagos, bonded together
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 50 : 110 }}>
                        to make positive impacts on our
                      </span>
                      <br />
                      <span style={{ marginLeft: matchesSM ? 70 : 120 }}>
                        and our Members
                      </span>
                    </Typography>
                  )}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* </section> */}

        <HomeAboutUs />
        <HomeMembershipSection />
        <HomeConnectionsSection />
        <HomeProjectSectionSection />
        <HomeEventsSection />
        <HomeNoticeBoardSection />
        {/* <HomeContactUs /> */}
        {isLoading && (
          <CircularProgress
            size={100}
            color="inherit"
            style={{ marginTop: 250, marginLeft: 650 }}
          />
        )}
        {!isLoading && <Grid item>{allCoursesList}</Grid>}

        <Grid item className={classes.footer}>
          <UpperFooter />
        </Grid>
      </Grid>
    </>
  );
};

export default Marketplace;
