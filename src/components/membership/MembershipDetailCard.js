import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Snackbar from "@material-ui/core/Snackbar";
import Grid from "@material-ui/core/Grid";

import ButtonArrow from "./../ui/ButtonArrow";
import UserLogin from "./../users/UserLogin";
import LoginForm from "../authForms/LoginForm";
import UserSignUp from "./../users/UserSignUp";
import SignUpForm from "../authForms/SignUpForm";
import UserPasswordReset from "./../users/UserPasswordReset";

import history from "../../history";

import api from "./../../apis/local";

import { baseURL } from "./../../apis/util";

import theme from "./../ui/Theme";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 325,
    maxWidth: "100%",
    //height: 440,
    //height: 500,

    //marginLeft: "0.1%",
    borderRadius: 0,
    marginTop: "4em",
    padding: 0,
    // "&:hover": {
    //   border: "solid",
    //   borderColor: theme.palette.common.grey,
    // },
  },
  rootMobile: {
    maxWidth: "100%",
    //height: 440,
    //height: 800,
    width: "100%",

    marginLeft: "0px",
    //borderRadius: 30,
    marginTop: "2em",
    marginBottom: "3em",
    padding: 0,
    backgroundColor: "#FFFFFF",

    "&:hover": {
      //border: "solid",
      //borderColor: theme.palette.common.grey,
    },
  },
  mediaMobile: {
    height: "100%",
    width: "100%",
    //marginLeft: "100px",
  },
  media: {
    height: 400,
    width: 400,
  },

  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginTop: "55px",
    marginLeft: "160px",
    border: `2px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  connectButton: {
    borderRadius: 10,
    height: 40,
    width: 160,
    marginLeft: 80,
    marginTop: 30,
    marginBottom: 15,
    color: "white",
    backgroundColor: theme.palette.common.green,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
      color: "white",
    },
  },
  dialog: {
    //maxWidth: 325,
    maxWidth: 500,
    //height: 450,
    marginLeft: "10px",
    borderRadius: 30,
    //marginTop: "10em",
    padding: 0,
    marginTop: -20,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "250px",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  secondRow: {
    marginLeft: "0.7",
    width: 550,
    border: "1px dotted",
    padding: 20,
  },
  imageColumn: {
    //marginLeft: 5,
    width: 380,

    border: "1px dotted",
    //padding: 5,
  },
  secondRowMobile: {
    marginLeft: 0,
    marginTop: 30,
    width: 380,
    border: "1px dotted",
    padding: 10,
  },
  footer: {
    width: "100%",
    marginTop: "10rem",
  },
  thirdRow: {
    marginLeft: "0.9%",
    width: 350,
    border: "1px dotted",
    padding: 20,
  },
  thirdRowMobile: {
    marginLeft: 10,
    marginTop: 30,
    width: 380,
    border: "1px dotted",
    padding: 20,
  },

  secondColumn: {
    marginTop: 50,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "22%",
  },
  secondColumnMobile: {
    marginTop: 50,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  thirdColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  thirdColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  forthColumn: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  forthColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  fifthColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  fifthColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
  sixthColumn: {
    marginTop: 20,
    marginBottom: 50,
    border: "1px dotted",
    padding: 20,
    width: "98%",
  },
  sixthColumnMobile: {
    marginTop: 15,
    marginBottom: 50,
    border: "1px dotted",
    padding: 10,
    width: "98%",
  },
}));

export default function MembershipDetailCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [openForgotPasswordForm, setOpenForgotPasswordForm] = useState(false);
  const [currencyName, setCurrencyName] = useState();
  const [countryName, setCountryName] = useState();
  const [stateName, setStateName] = useState();
  const [price, setPrice] = useState();
  const [minQuantity, setMinQuantity] = useState();
  const [memberName, setMemberName] = useState();
  const [memberEmail, setMemberEmail] = useState();
  const [memberRole, setMemberRole] = useState();
  const [set, setSet] = useState();
  const [loading, setLoading] = useState();

  // const { token, setToken } = useToken();
  // const { userId, setUserId } = useUserId();
  const [expanded, setExpanded] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMDUp = useMediaQuery(theme.breakpoints.up("md"));

  //const imageUrl = `${baseURL}/images/categories/${props.image}`;
  const imageUrl = `${baseURL}/images/membership/${props.membership.image}`;

  const Str = require("@supercharge/strings");

  //   useEffect(() => {
  //     setPrice(props.membership.price);
  //   }, [props.membership]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/users/${props.user}`);
      const user = response.data.data.data;
      allData.push({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
      setMemberEmail(allData[0].email);
      setMemberName(allData[0].name);
      setMemberRole(allData[0].role);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/categories/${props.category}`);
      const category = response.data.data.data;
      allData.push({
        id: category._id,
        name: category.name,
        email: category.email,
        role: category.role,
      });
      setSet(allData[0].name);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleBookingsOpenDialogStatus = () => {
    setOpen(false);
  };
  const handleLoginDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpenLoginForm(false);
  };

  const handleLoginDialogCloseStatus = () => {
    // history.push("/categories/new");
    setOpenLoginForm(false);
  };

  const handleSuccessfulLoginDialogOpenStatusWithSnackbar = () => {
    // history.push("/categories/new");
    setOpenLoginForm(false);
    setAlert({
      open: true,
      message: "You have successfully logged in",
      backgroundColor: "#4BB543",
    });
  };

  const handleSuccessfulCreateSnackbar = (message) => {
    // history.push("/categories/new");
    setOpen({ open: false });
    setAlert({
      open: true,
      message: message,
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedSnackbar = (message) => {
    setAlert({
      open: true,
      message,
      backgroundColor: "#FF3232",
    });
    setOpen({ open: false });
  };
  const handleFailedLoginDialogOpenStatusWithSnackbar = (message) => {
    // history.push("/categories/new");
    setAlert({
      open: true,
      message: message,

      backgroundColor: "#FF3232",
    });
    setOpenLoginForm(true);
  };

  const handleSuccessfulSignUpDialogOpenStatusWithSnackbar = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
    setAlert({
      open: true,
      message: "You have successfully signed up",
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedSignUpDialogOpenStatusWithSnackbar = (message) => {
    // history.push("/categories/new");
    setAlert({
      open: true,
      message: message,

      backgroundColor: "#FF3232",
    });
    setOpenSignUpForm(true);
  };

  const handleMakeOpenLoginFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
    setOpenLoginForm(true);
  };
  const handleMakeOpenForgotPasswordFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenForgotPasswordForm(true);
    setOpenLoginForm(false);
  };
  const handleMakeCloseForgotPasswordFormDialogStatus = () => {
    // history.push("/categories/new");
    setOpenForgotPasswordForm(false);
    setOpenLoginForm(false);
  };
  const handleMakeOpenSignUpDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(true);
    setOpenLoginForm(false);
  };

  const handleMakeCloseSignUpDialogStatus = () => {
    // history.push("/categories/new");
    setOpenSignUpForm(false);
  };

  // const handleLogOutDialogOpenStatus = () => {
  //   // history.push("/categories/new");
  //   setOpenLogOut(false);
  // };
  const renderLoginForm = () => {
    return (
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openLoginForm}
        //onClose={() => [setOpenLoginForm(false), history.push("/")]}
        onClose={() => [setOpenLoginForm(false)]}
      >
        <DialogContent>
          <LoginForm
            handleLoginDialogOpenStatus={handleLoginDialogOpenStatus}
            handleMakeOpenSignUpDialogStatus={handleMakeOpenSignUpDialogStatus}
            handleMakeCloseSignUpDialogStatus={
              handleMakeCloseSignUpDialogStatus
            }
            handleLoginDialogCloseStatus={handleLoginDialogCloseStatus}
            handleMakeOpenForgotPasswordFormDialogStatus={
              handleMakeOpenForgotPasswordFormDialogStatus
            }
            handleSuccessfulLoginDialogOpenStatusWithSnackbar={
              handleSuccessfulLoginDialogOpenStatusWithSnackbar
            }
            handleFailedLoginDialogOpenStatusWithSnackbar={
              handleFailedLoginDialogOpenStatusWithSnackbar
            }
            handleFailedSignUpDialogOpenStatusWithSnackbar={
              handleFailedSignUpDialogOpenStatusWithSnackbar
            }
            setToken={props.setToken}
            setUserId={props.setUserId}
          />
        </DialogContent>
      </Dialog>
    );
  };

  const renderSignUpForm = () => {
    return (
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openSignUpForm}
        //onClose={() => [setOpenSignUpForm(false), history.push("/")]}\
        onClose={() => [setOpenSignUpForm(false)]}
      >
        <DialogContent>
          <UserSignUp
            token={props.token}
            handleMakeOpenSignUpDialogStatus={handleMakeOpenSignUpDialogStatus}
            handleMakeCloseSignUpDialogStatus={
              handleMakeCloseSignUpDialogStatus
            }
            handleMakeOpenLoginFormDialogStatus={
              handleMakeOpenLoginFormDialogStatus
            }
            handleSuccessfulSignUpDialogOpenStatusWithSnackbar={
              handleSuccessfulSignUpDialogOpenStatusWithSnackbar
            }
            handleFailedSignUpDialogOpenStatusWithSnackbar={
              handleFailedSignUpDialogOpenStatusWithSnackbar
            }
            setToken={props.setToken}
            setUserId={props.setUserId}
          />
        </DialogContent>
      </Dialog>
    );
  };

  const renderForgotPasswordForm = () => {
    return (
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openForgotPasswordForm}
        //onClose={() => [setOpenForgotPasswordForm(false), history.push("/")]}
        onClose={() => [setOpenForgotPasswordForm(false)]}
      >
        <DialogContent>
          <UserPasswordReset
            token={props.token}
            userId={props.userId}
            handleMakeOpenSignUpDialogStatus={handleMakeOpenSignUpDialogStatus}
            handleMakeCloseSignUpDialogStatus={
              handleMakeCloseSignUpDialogStatus
            }
            handleMakeOpenLoginFormDialogStatus={
              handleMakeOpenLoginFormDialogStatus
            }
            handleMakeCloseForgotPasswordFormDialogStatus={
              handleMakeCloseForgotPasswordFormDialogStatus
            }
          />
        </DialogContent>
      </Dialog>
    );
  };

  const getCurrencyCode = () => {
    if (currencyName) {
      if (currencyName.toLowerCase() === "naira") {
        return <span>&#8358;</span>;
      } else {
        return;
      }
    }
  };

  const buttonContent = () => {
    return <React.Fragment>Connect With Me</React.Fragment>;
  };

  return (
    <>
      {matchesMDUp ? (
        <Grid container direction="column" className={classes.root}>
          <Grid item container direction="row">
            <Grid item>
              <Card>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt={props.membership.title}
                  image={imageUrl}
                  //   title={props.name}
                  crossOrigin="anonymous"
                />
              </Card>
            </Grid>
            <Grid item className={classes.secondRow}>
              <Box>
                <Typography
                  variant="h4"
                  style={{ fontSize: "2.0em", textAlign: "center" }}
                >
                  {memberName}
                  {/* <span style={{ fontSize: 20, marginLeft: 0 }}>
                    ({props.membership.title})
                  </span> */}
                </Typography>
                <Typography variant="h5" style={{ textAlign: "center" }}>
                  <ReactMarkdown>{props.membership.title}</ReactMarkdown>
                </Typography>

                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.membership.headline}</ReactMarkdown>
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    fontSize: "2.0em",
                    textAlign: "center",
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                >
                  {set}
                </Typography>

                {props.membership.membershipNo !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Membership Number:</strong>
                    </span>
                    {props.membership.membershipNo}
                  </Typography>
                )}
                {props.membership.website !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Website:</strong>
                    </span>
                    {props.membership.website}
                  </Typography>
                )}

                {props.membership.facebookPage !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Facebook Profile:</strong>
                    </span>
                    {props.membership.facebookPage}
                  </Typography>
                )}
                {props.membership.instagramPage !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Instagram Profile:</strong>
                    </span>
                    {props.membership.instagramPage}
                  </Typography>
                )}
                {props.membership.youtubeChannel !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>YouTube Channel:</strong>
                    </span>
                    {props.membership.youtubeChannel}
                  </Typography>
                )}
                {props.membership.twitterHandle !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Twitter Handle:</strong>
                    </span>
                    <span style={{ marginLeft: 3, textAlign: "center" }}>
                      {props.membership.twitterHandle}
                    </span>
                  </Typography>
                )}
                {props.membership.linkedInProfile !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>LinkedIn Profile:</strong>
                    </span>
                    <span style={{ marginLeft: 3, textAlign: "center" }}>
                      {props.membership.linkedInProfile}
                    </span>
                  </Typography>
                )}
                {props.membership.location !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Business Address:</strong>
                    </span>
                    {props.membership.location}
                  </Typography>
                )}
                {props.membership.contactEmail !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Contact Email:</strong>
                    </span>
                    {props.membership.contactEmail}
                  </Typography>
                )}
                {props.membership.contactPhoneNumber !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Contact Phone Number:</strong>
                    </span>
                    {props.membership.contactPhoneNumber}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item className={classes.thirdRow}>
              <Box>
                <Typography>
                  <strong>Bio:</strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.membership.bio}</ReactMarkdown>
                </Typography>
              </Box>
              {props.canAddMeToNetwork && (
                <Button
                  component={Link}
                  // to="/mobileapps"
                  // to={`/categories/${categoryId}/${productId}`}
                  //to={`/membership/${slug}`}
                  varaint="outlined"
                  className={classes.connectButton}
                  // onClick={() => <MembershipDetail />}
                >
                  {/* <span style={{ marginRight: 10 }}>Show Details </span> */}
                  {loading ? (
                    <CircularProgress size={30} color="inherit" />
                  ) : (
                    buttonContent()
                  )}
                  {/* <ButtonArrow
            height={10}
            width={10}
            fill={theme.palette.common.blue}
          /> */}
                </Button>
              )}
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            style={{ width: "100%" }}
            justifyContent="center"
          >
            <Grid
              item
              className={classes.secondColumn}
              style={{ marginLeft: "2%" }}
            >
              <Box>
                <Typography>
                  <strong>Profession:</strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.membership.profession}</ReactMarkdown>
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              className={classes.secondColumn}
              style={{ marginLeft: "0.5%" }}
            >
              <Box>
                <Typography>
                  <strong>Experiences:</strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.membership.experiences}</ReactMarkdown>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              className={classes.secondColumn}
              style={{ marginLeft: "0.5%" }}
            >
              <Box>
                <Typography>
                  <strong>Achievements:</strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.membership.achievements}</ReactMarkdown>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              className={classes.secondColumn}
              style={{ marginLeft: "0.5%" }}
            >
              <Box>
                <Typography>
                  <strong>Qualifications:</strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                ></Typography>
                <ReactMarkdown>{props.membership.qualification}</ReactMarkdown>
              </Box>
            </Grid>
          </Grid>
          <Grid item className={classes.thirdColumn}>
            <Box>
              <Typography>
                <strong>Description:</strong>
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  marginTop: 20,
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                <ReactMarkdown>{props.membership.description}</ReactMarkdown>
              </Typography>
            </Box>
          </Grid>
          {/* <Grid item className={classes.forthColumn}>
            <Box>
              <Typography>
                <strong>Course Content:</strong>
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  marginTop: 20,
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                {props.membership.contents}{" "}
              </Typography>
            </Box>
          </Grid> */}
          {/* <Grid item className={classes.fifthColumn}>
            <Box>
              <Typography>
                <strong>Capstone Project:</strong>
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  marginTop: 20,
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                {props.membership.capstoneProject}{" "}
              </Typography>
            </Box>
          </Grid> */}
          {/* <Grid item className={classes.sixthColumn}>
            <Box>
              <Typography>
                <strong>
                  What you need to become the NextChamp in this Course:
                </strong>
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  marginTop: 20,
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                {props.membership.successTips}{" "}
              </Typography>
            </Box>
          </Grid> */}
        </Grid>
      ) : (
        <Grid container direction="column" className={classes.rootMobile}>
          <Grid item container direction="column">
            <Grid item>
              <Card>
                <CardMedia
                  className={classes.mediaMobile}
                  component="img"
                  alt={props.membership.title}
                  image={imageUrl}
                  //   title={props.name}
                  crossOrigin="anonymous"
                />
              </Card>
            </Grid>
            <Grid item className={classes.secondRowMobile}>
              <Box>
                <Typography variant="h5" style={{ fontSize: "2.0em" }}>
                  <ReactMarkdown>{memberName}</ReactMarkdown>
                </Typography>
                <Typography variant="h5">
                  <ReactMarkdown>{props.membership.title}</ReactMarkdown>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.membership.headline}</ReactMarkdown>
                </Typography>

                <Typography
                  variant="h5"
                  style={{ fontSize: "2.0em", marginTop: 10, marginBottom: 10 }}
                >
                  <ReactMarkdown>{set}</ReactMarkdown>
                </Typography>

                {props.membership.membershipNo !== "undefined" && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 10 }}>
                      {" "}
                      <strong>Membership Number:</strong>
                    </span>
                    {props.membership.membershipNo}
                  </Typography>
                )}
                {props.membership.website !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Website:</strong>
                    </span>
                    {props.membership.website}
                  </Typography>
                )}

                {props.membership.facebookPage !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Facebook Profile:</strong>
                    </span>
                    {props.membership.facebookPage}
                  </Typography>
                )}
                {props.membership.instagramPage !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Instagram Profile:</strong>
                    </span>
                    {props.membership.instagramPage}
                  </Typography>
                )}
                {props.membership.youtubeChannel !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Youtube Channel:</strong>
                    </span>
                    <span style={{ marginLeft: 3, textAlign: "center" }}>
                      {props.membership.youtubeChannel}
                    </span>
                  </Typography>
                )}
                {props.membership.twitterHandle !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Twitter Handle:</strong>
                    </span>
                    <span style={{ marginLeft: 3, textAlign: "center" }}>
                      {props.membership.twitterHandle}
                    </span>
                  </Typography>
                )}
                {props.membership.linkedInProfile !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>LinkedIn Profile:</strong>
                    </span>
                    {props.membership.linkedInProfile}
                  </Typography>
                )}
                {props.membership.location !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Business Address:</strong>
                    </span>
                    {props.membership.location}
                  </Typography>
                )}
                {props.membership.contactEmail !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Contact Email:</strong>
                    </span>
                    {props.membership.contactEmail}
                  </Typography>
                )}
                {props.membership.contactPhoneNumber !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Contact Phone Number:</strong>
                    </span>
                    {props.membership.contactPhoneNumber}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item className={classes.thirdRowMobile}>
              <Box>
                {props.membership.bio !== undefined && (
                  <Typography
                    variant="h5"
                    style={{ color: "black", fontSize: 15 }}
                  >
                    <span style={{ marginRight: 20 }}>
                      {" "}
                      <strong>Bio:</strong>
                    </span>
                    <ReactMarkdown>{props.membership.bio}</ReactMarkdown>
                  </Typography>
                )}
                {props.canAddMeToNetwork && (
                  <Button
                    component={Link}
                    // to="/mobileapps"
                    // to={`/categories/${categoryId}/${productId}`}
                    //to={`/membership/${slug}`}
                    varaint="outlined"
                    className={classes.connectButton}
                    // onClick={() => <MembershipDetail />}
                  >
                    {/* <span style={{ marginRight: 10 }}>Show Details </span> */}
                    {loading ? (
                      <CircularProgress size={30} color="inherit" />
                    ) : (
                      buttonContent()
                    )}
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ width: "100%" }}
            justifyContent="center"
          >
            <Grid
              item
              className={classes.secondColumnMobile}
              style={{ marginLeft: "2%" }}
            >
              <Box>
                <Typography>
                  <strong>Profession:</strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.membership.profession}</ReactMarkdown>
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              className={classes.secondColumnMobile}
              style={{ marginLeft: "0.5%" }}
            >
              <Box>
                <Typography>
                  <strong>Experiences:</strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.membership.experiences}</ReactMarkdown>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              className={classes.secondColumnMobile}
              style={{ marginLeft: "0.5%" }}
            >
              <Box>
                <Typography>
                  <strong>Achievements:</strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>{props.membership.achievements}</ReactMarkdown>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              className={classes.secondColumnMobile}
              style={{ marginLeft: "0.5%" }}
            >
              <Box>
                <Typography>
                  <strong>Qualification:</strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <ReactMarkdown>
                    {props.membership.qualification}
                  </ReactMarkdown>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item className={classes.thirdColumnMobile}>
            <Box>
              <Typography>
                <strong>Description:</strong>
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  marginTop: 20,
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                <ReactMarkdown>{props.membership.description}</ReactMarkdown>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
      {renderLoginForm()}
      {renderSignUpForm()}
      {renderForgotPasswordForm()}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </>
  );
}
