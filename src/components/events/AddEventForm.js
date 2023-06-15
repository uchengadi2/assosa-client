import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { TextField, Typography } from "@material-ui/core";
import background from "./../../logistic_assets/cover_image_1.png";
import history from "./../../history";
import api from "./../../apis/local";
import { CREATE_EVENT } from "../../actions/types";

const useStyles = makeStyles((theme) => ({
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 10,
    fontSize: "1.1rem",
    backgroundColor: theme.palette.common.blue,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
  root: {
    maxWidth: 600,
    marginTop: 10,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "10em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
}));

const renderHeaderField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      onChange={input.onChange}
      multiline={true}
      minRows={4}
    />
  );
};

const renderEventDateField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderDescriptionField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      multiline={true}
      minRows={8}
      onChange={input.onChange}
    />
  );
};

const renderTitleField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      //   multiline={true}
      //   minRows={1}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderSponsorField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      //   multiline={true}
      //   minRows={1}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderLocationField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      multiline={true}
      minRows={4}
      onChange={input.onChange}
    />
  );
};

const renderThumbnailField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const renderImagesField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const renderExtraImagesField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderVideoField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const AddEventForm = (props) => {
  const classes = useStyles();

  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [loading, setLoading] = useState(null);
  const [status, setStatus] = useState("inactive");
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState();
  const [connectionAvailability, setConnectionAvailability] = useState(false);

  const [type, setType] = useState("party");
  const [eventType, setEventType] = useState("party");
  const [year, setYear] = useState("2023");
  const [eventNo, setEventNo] = useState(
    "EV-" + Math.floor(Math.random() * 1000000) + "-" + "OS"
  );

  const dispatch = useDispatch();

  const handleEventYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const renderEventYearField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="Year"
            id="year"
            value={year}
            onChange={handleEventYearChange}
            label="Event Year"
            style={{ marginTop: 10, width: matchesMD ? 500 : 300, height: 38 }}
            //{...input}
          >
            <MenuItem value={"2020"}>2020</MenuItem>
            <MenuItem value={"2021"}>2021</MenuItem>
            <MenuItem value={"2022"}>2022</MenuItem>
            <MenuItem value={"2023"}>2023</MenuItem>
            <MenuItem value={"2024"}>2024</MenuItem>
          </Select>
          <FormHelperText>Enter the Year of the Event</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderEventTypeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="event Type"
            id="eventType"
            value={eventType}
            onChange={handleEventTypeChange}
            label="Event Type"
            style={{ marginTop: 10, width: matchesMD ? 500 : 300, height: 38 }}
            //{...input}
          >
            <MenuItem value={"party"}>Party</MenuItem>
            <MenuItem value={"eyp"}>End of the Year Party</MenuItem>
            <MenuItem value={"get-together"}>Get Together</MenuItem>
            <MenuItem value={"seminar"}>Seminar</MenuItem>
            <MenuItem value={"conference"}>Conference</MenuItem>
            <MenuItem value={"celebration"}>celebration</MenuItem>
            <MenuItem value={"training"}>Training</MenuItem>
            <MenuItem value={"counselling"}>Counselling</MenuItem>
            <MenuItem value={"ceremony"}>Ceremony</MenuItem>
            <MenuItem value={"anniversary"}>Anniversary</MenuItem>
            <MenuItem value={"thanksgiving"}>Thanksgiving</MenuItem>
            <MenuItem value={"project-commissioning"}>
              Project Commissioning
            </MenuItem>
            <MenuItem value={"others"}>Others</MenuItem>
          </Select>
          <FormHelperText>Enter the Event Type</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  function telephoneCheck(phoneNumber) {
    var found = phoneNumber.search(
      /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/
    );
    if (found > -1) {
      return true;
    } else {
      return false;
    }
  }

  const buttonContent = () => {
    return <React.Fragment>Submit</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");

    const form = new FormData();
    form.append("headline", formValues.headline);
    form.append("title", formValues.title);
    form.append("description", formValues.description);
    form.append("type", eventType);
    form.append("year", year);
    form.append("date", formValues.date);
    form.append("sponsor", formValues.sponsor);
    form.append("video", formValues.video);
    form.append("extraImages", formValues.extraImages);

    form.append("eventNo", eventNo);
    form.append("createdBy", props.userId);
    if (formValues.thumbnail) {
      form.append("thumbnail", formValues.thumbnail[0]);
    }
    if (formValues.images) {
      form.append("images", formValues.images[0]);
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/events`, form);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_EVENT,
            payload: response.data.data.data,
          });

          props.handleSuccessfulCreateSnackbar(
            `You have successfully posted a new event!!!`
          );
          props.updateEventInfoHandler();
          props.handleNewEventDialogForm();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
          setLoading(false);
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar("Something went wrong here!!!");
        console.log("err:", err.message);
        setLoading(false);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
      setLoading(false);
    }
  };

  return (
    <Box className={classes.root}>
      <Grid item container justifyContent="center">
        <FormLabel
          style={{ color: "blue", fontSize: "1.5em" }}
          component="legend"
        >
          <Typography variant="h5">New Event Form</Typography>
        </FormLabel>
      </Grid>
      <Box
        component="div"
        id="userChangeNameForm"
        // onSubmit={onSubmit}
        sx={{
          width: 580,
          //height: 200,
        }}
        noValidate
        autoComplete="off"
        // style={{ marginTop: 20 }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: 15 }}
        >
          <Grid item>
            <Field
              label=""
              id="type"
              name="type"
              type="text"
              component={renderEventTypeField}
              //style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="year"
              name="year"
              type="text"
              component={renderEventYearField}
              //style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Enter the Date of the Event"
              id="date"
              name="date"
              type="date"
              component={renderEventDateField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Title"
              id="title"
              name="title"
              type="text"
              //defaultValue={props.user.name}
              component={renderTitleField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Headline"
              id="headline"
              name="headline"
              type="text"
              //defaultValue={props.user.name}
              component={renderHeaderField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Description"
              id="description"
              name="description"
              type="text"
              //defaultValue={props.user.name}
              component={renderDescriptionField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Event Location"
              id="location"
              name="location"
              type="text"
              //defaultValue={props.user.name}
              component={renderLocationField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Event Sponsor"
              id="sponsor"
              name="sponsor"
              type="text"
              //defaultValue={props.user.name}
              component={renderSponsorField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Thumbnail"
              id="thumbnail"
              name="thumbnail"
              type="file"
              //defaultValue={props.user.name}
              component={renderThumbnailField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Event YouTube Video ID"
              id="video"
              name="video"
              type="text"
              //defaultValue={props.user.name}
              component={renderVideoField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Extra Event Images Link"
              id="extraImages"
              name="extraImages"
              type="text"
              //defaultValue={props.user.name}
              component={renderExtraImagesField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Images"
              id="images"
              name="images"
              type="file"
              //defaultValue={props.user.name}
              component={renderImagesField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Button
            variant="contained"
            className={classes.sendButton}
            onClick={props.handleSubmit(onSubmit)}
            // onClick={() => [
            //   props.handleMakeChangeNameDialogForm(),
            //   props.handleSubmit(onSubmit),

            //   history.push("/profile"),
            // ]}
          >
            {loading ? (
              <CircularProgress size={30} color="inherit" />
            ) : (
              buttonContent()
            )}
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

const validate = (formValues) => {
  const errors = {};
  let valid;

  if (!formValues.email) {
    errors.email = "Invalid email";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email)
  ) {
    errors.email = "Invalid email";
  }

  if (!formValues.password) {
    errors.password = "Please enter your password";
  }

  return errors;
};

export default reduxForm({
  form: "userChangeNameForm",
  validate: validate,
})(AddEventForm);
