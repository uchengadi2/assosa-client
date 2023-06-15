import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import MembershipDetailCard from "./MembershipDetailCard";

import CallToAction from "./../ui/CallToAction";

import revolutionBackground from "./../../assets/repeatingBackground.svg";
import infoBackground from "./../../assets/infoBackground.svg";

import background from "./../../logistic_assets/cover_image_1.png";
import { Category } from "@material-ui/icons";
import history from "../../history";

import UpperFooter from "../ui/UpperFooter";

import { baseURL } from "./../../apis/util";
import api from "./../../apis/local";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    // height: "100%",
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
  footer: {
    width: "100%",
    marginTop: "10rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 155,
    marginRight: 40,
    fontWeight: 400,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "2.9em",
    marginLeft: "5.5em",
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
    width: 200,
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
}));

function MembershipDetail(props) {
  const params = useParams();
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [contactUsOpen, setContactUsOpen] = useState(false);
  const [becomePartnerOpen, setBecomePartnerOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [isOnPromo, setIsOnPromo] = useState(false);
  const [promoPrice, setPromoPrice] = useState();
  const [promoMinQuantity, setPromoMinQuantity] = useState();
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(null);
  const [membership, setMembership] = useState({});

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const defaultOptions = {
    loop: true,
    autoplay: false,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidyMid slice",
    },
  };

  const slug = params.slug;

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
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/memberships/${slug}`);
      const membership = response.data.data.data;

      console.log("membership length:", membership.length);

      allData.push({
        id: membership._id,
        user: membership.user,
        category: membership.category,
        membershipNo: membership.membershipNo,
        headline: membership.headline,
        title: membership.title,
        description: membership.description,
        profession: membership.profession,
        qualification: membership.qualification,
        experiences: membership.experiences,
        achievements: membership.achievements,
        bio: membership.bio,
        website: membership.website,
        facebookPage: membership.facebookPage,
        instagramPage: membership.instagramPage,
        youtubeChannel: membership.youtubeChannel,
        twitterHandle: membership.twitterHandle,
        linkedInProfile: membership.linkedInProfile,
        location: membership.location,
        canAddMeToNetwork: membership.canAddMeToNetwork,
        contactEmail: membership.contactEmail,
        contactPhoneNumber: membership.contactPhoneNumber,
        createdBy: membership.createdBy,
        dateCreated: membership.dateCreated,
        totalConnection: membership.totalConnection,
        image: membership.image,
        defaultThumbnail: membership.defaultThumbnail,
        status: membership.status,
        slug: membership.slug,
      });

      setMembership({
        id: allData[0].id,
        user: allData[0].user,
        category: allData[0].category,
        membershipNo: allData[0].membershipNo,
        headline: allData[0].headline,
        title: allData[0].title,
        description: allData[0].description,
        profession: allData[0].profession,
        qualification: allData[0].qualification,
        experiences: allData[0].experiences,
        achievements: allData[0].achievements,
        bio: allData[0].bio,
        website: allData[0].website,
        facebookPage: allData[0].facebookPage,
        instagramPage: allData[0].instagramPage,
        youtubeChannel: allData[0].youtubeChannel,
        twitterHandle: allData[0].twitterHandle,
        linkedInProfile: allData[0].linkedInProfile,
        location: allData[0].location,
        canAddMeToNetwork: allData[0].canAddMeToNetwork,
        contactEmail: allData[0].contactEmail,
        contactPhoneNumber: allData[0].contactPhoneNumber,
        createdBy: allData[0].createdBy,
        dateCreated: allData[0].dateCreated,
        totalConnection: allData[0].totalConnection,
        image: allData[0].image,
        defaultThumbnail: allData[0].defaultThumbnail,
        contents: allData[0].contents,
        capstoneProject: allData[0].capstoneProject,
        passGrade: allData[0].passGrade,
        successTips: allData[0].successTips,
        track: allData[0].track,
        status: allData[0].status,
        slug: allData[0].slug,
      });

      setIsLoading(false);
    };

    //call the function

    fetchData().catch(console.error);
  }, [slug]);

  const Str = require("@supercharge/strings");

  const membershipData = matchesMD ? (
    <React.Fragment>
      {
        <Grid container direction="row">
          <MembershipDetailCard
            membership={membership}
            id={membership.id}
            user={membership.user}
            category={membership.category}
            membershipNo={membership.membershipNo}
            headline={membership.headline}
            title={membership.title}
            description={membership.description}
            profession={membership.profession}
            qualification={membership.qualification}
            experiences={membership.experiences}
            achievements={membership.achievements}
            bio={membership.bio}
            website={membership.website}
            facebookPage={membership.facebookPage}
            instagramPage={membership.instagramPage}
            youtubeChannel={membership.youtubeChannel}
            twitterHandle={membership.twitterHandle}
            linkedInProfile={membership.linkedInProfile}
            location={membership.location}
            canAddMeToNetwork={membership.canAddMeToNetwork}
            contactEmail={membership.contactEmail}
            contactPhoneNumber={membership.contactPhoneNumber}
            createdBy={membership.createdBy}
            dateCreated={membership.dateCreated}
            totalConnection={membership.totalConnection}
            image={membership.image}
            defaultThumbnail={membership.defaultThumbnail}
            status={membership.status}
            slug={membership.slug}
            key={membership.id}
            token={props.token}
            userId={props.userId}
            setToken={props.setToken}
            setUserId={props.setUserId}
            handleSuccessfulCreateSnackbar={
              props.handleSuccessfulCreateSnackbar
            }
            handleFailedSnackbar={props.handleFailedSnackbar}
          />
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
          <MembershipDetailCard
            membership={membership}
            id={membership.id}
            user={membership.user}
            category={membership.category}
            membershipNo={membership.membershipNo}
            headline={membership.headline}
            title={membership.title}
            description={membership.description}
            profession={membership.profession}
            qualification={membership.qualification}
            experiences={membership.experiences}
            achievements={membership.achievements}
            bio={membership.bio}
            website={membership.website}
            facebookPage={membership.facebookPage}
            instagramPage={membership.instagramPage}
            youtubeChannel={membership.youtubeChannel}
            twitterHandle={membership.twitterHandle}
            linkedInProfile={membership.linkedInProfile}
            location={membership.location}
            canAddMeToNetwork={membership.canAddMeToNetwork}
            contactEmail={membership.contactEmail}
            contactPhoneNumber={membership.contactPhoneNumber}
            createdBy={membership.createdBy}
            dateCreated={membership.dateCreated}
            totalConnection={membership.totalConnection}
            image={membership.image}
            defaultThumbnail={membership.defaultThumbnail}
            status={membership.status}
            slug={membership.slug}
            key={membership.id}
            token={props.token}
            userId={props.userId}
            setToken={props.setToken}
            setUserId={props.setUserId}
            handleSuccessfulCreateSnackbar={
              props.handleSuccessfulCreateSnackbar
            }
            handleFailedSnackbar={props.handleFailedSnackbar}
          />
        </Grid>
      }
    </React.Fragment>
  );

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item style={{ marginTop: "10px" }}>
        {isLoading && (
          <CircularProgress
            size={100}
            color="inherit"
            style={{ marginTop: 250, marginLeft: 650 }}
          />
        )}

        {!isLoading && <Grid item>{membershipData}</Grid>}

        {/*....INFORMATION BLOCK....*/}
      </Grid>
      <Grid item className={classes.footer}>
        <UpperFooter />
      </Grid>
    </Grid>
  );
}

export default MembershipDetail;
