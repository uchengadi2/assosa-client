import React, { useState, useRef, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ProductDetails from "../products/ProductDetails";
import MembershipDetail from "./MembershipDetail";
import ButtonArrow from "../ui/ButtonArrow";
import theme from "./../ui/Theme";
import api from "./../../apis/local";

import { CREATE_RATE, EDIT_RATE } from "../../actions/types";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { EDIT_MEMBERSHIP } from "../../actions/types";

//import CheckoutPage from "./CheckoutPage";

const useStyles = makeStyles((theme) => ({
  root: {
    //width: 600,
    marginLeft: 15,
  },
  formStyles: {
    width: 600,
  },

  submitButton: {
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
  offDeliveryLocationButton: {
    borderRadius: 10,
    height: 40,
    width: 220,
    marginLeft: 60,
    marginTop: 30,
    color: "white",
    backgroundColor: theme.palette.common.green,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },
  checkout: {
    borderRadius: 10,
    height: 40,
    width: 190,
    marginLeft: 80,
    marginTop: 30,
    color: "white",
    backgroundColor: theme.palette.common.green,
    "&:hover": {
      backgroundColor: theme.palette.common.green,
    },
  },
}));

function MembershipInfo(props) {
  const {
    profession,
    categorySlug,
    targetAudience,
    whatToLearn,
    venueLink,
    categoryId,
    productId,
    status,
    user,
    memberRole,
    membershipId,
    handleFailedSnackbar,
    handleSuccessfulCreateSnackbar,

    slug,
  } = props;

  const params = useParams();

  //const user = params.userId;

  const classes = useStyles();

  const [loading, setLoading] = useState();
  const [showValidate, setShowValidate] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const Str = require("@supercharge/strings");

  const dispatch = useDispatch();

  //get the category slug

  useEffect(() => {
    if (user === props.userId) {
      setShowDetails(true);
      setShowValidate(false);
    } else if (status === "inactive" && user !== props.userId) {
      setShowDetails(false);
      setShowValidate(true);
    } else if (status === "active") {
      setShowDetails(true);
      setShowValidate(false);
    } else if (!props.userId && status === "inactive") {
      setShowDetails(false);
      setShowValidate(true);
    } else if (!props.userId && status === "active") {
      setShowDetails(true);
      setShowValidate(false);
    }
  }, [props]);

  const buttonContent = () => {
    return <React.Fragment>Show Details</React.Fragment>;
  };

  const buttonValidateContent = () => {
    return <React.Fragment>Validate</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    if (!props.userId) {
      handleFailedSnackbar("You are not logged-in. Please login and try again");
      setLoading(false);
      return;
    }
    if (!memberRole) {
      handleFailedSnackbar(
        "You do not sufficient rights to validate a member. Please contact your set admin"
      );
      setLoading(false);
      return;
    }

    if (
      memberRole === "old-student" ||
      memberRole === "student" ||
      memberRole === "others"
    ) {
      handleFailedSnackbar(
        "You do not sufficient rights to validate a member. Please contact your set admin"
      );
      setLoading(false);
      return;
    }

    const data = {
      status: "active",
    };

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(`/memberships/${membershipId}`, data);

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_MEMBERSHIP,
            payload: response.data.data.data,
          });

          //update the user model
          const userData = {
            membershipStatus: "member",
          };
          const res = await api.patch(`/users/${props.userId}`, userData);

          handleSuccessfulCreateSnackbar(
            `Validation is complete and successful!!`
          );
          props.updateUserInfoHandler();

          setLoading(false);
        } else {
          handleFailedSnackbar("Something went wrong, please try again!!!");
          setLoading(false);
        }
      };
      createForm().catch((err) => {
        handleFailedSnackbar();
        console.log("err:", err.message);
        setLoading(false);
      });
    } else {
      handleFailedSnackbar("Something went wrong, please try again!!!");
      setLoading(false);
    }
  };

  return (
    <form id="membershipInfo">
      <Box
        sx={{
          width: 200,
          //height: 450,
        }}
        noValidate
        autoComplete="off"
        className={classes.root}
      >
        <Grid
          item
          container
          style={{ marginTop: 10, marginBottom: 10 }}
          justifyContent="center"
        ></Grid>

        <Typography style={{ width: 300, marginTop: 15 }}>
          <strong>Profession:</strong>&nbsp;
          <ReactMarkdown>
            {Str(profession).limit(500, "...").get()}
          </ReactMarkdown>
        </Typography>
        <br />

        {props.slug && showDetails && (
          <Button
            component={Link}
            // to="/mobileapps"
            // to={`/categories/${categoryId}/${productId}`}
            to={`/membership/${slug}`}
            varaint="outlined"
            className={classes.submitButton}
            onClick={() => <MembershipDetail />}
          >
            {/* <span style={{ marginRight: 10 }}>Show Details </span> */}
            {loading ? (
              <CircularProgress size={30} color="inherit" />
            ) : (
              buttonContent()
            )}
          </Button>
        )}

        {props.slug && showValidate && (
          <Button
            variant="contained"
            className={classes.submitButton}
            onClick={props.handleSubmit(onSubmit)}
          >
            {loading ? (
              <CircularProgress size={30} color="inherit" />
            ) : (
              buttonValidateContent()
            )}
          </Button>
        )}
      </Box>
    </form>
  );
}

export default reduxForm({
  form: "membershipInfo",
})(MembershipInfo);
