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
import { CREATE_PROJECT } from "../../actions/types";

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

const renderEstimatedCostField = ({
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

const renderContactPersonField = ({
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
const renderObjectiveField = ({
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

const renderBeneficiaryField = ({
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

const renderDurationField = ({
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

const renderImageLinkField = ({
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
const AddProjectForm = (props) => {
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
  const [projectStatus, setProjectStatus] = useState("yet-to-start");
  const [year, setYear] = useState("2023");
  const [needDonations, setNeedDonations] = useState("false");
  const [projectRefNo, setProjectRefNo] = useState(
    "PR-" + Math.floor(Math.random() * 1000000) + "-" + "OS"
  );

  const dispatch = useDispatch();

  const handleProjectStatusChange = (event) => {
    setProjectStatus(event.target.value);
  };

  const handleNeedDonationsChange = (event) => {
    setNeedDonations(event.target.value);
  };

  const renderWillNeedDonationsField = ({
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
            labelId="willNeedDonations"
            id="willNeedDonations"
            value={needDonations}
            onChange={handleNeedDonationsChange}
            label="Will Need Donations"
            style={{ marginTop: 10, width: matchesMD ? 500 : 300, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>False</MenuItem>
            <MenuItem value={"true"}>True</MenuItem>
          </Select>
          <FormHelperText>Donations are needed for this Project</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProjectStatusField = ({
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
            labelId="status"
            id="status"
            value={projectStatus}
            onChange={handleProjectStatusChange}
            label="Project Status"
            style={{ marginTop: 10, width: matchesMD ? 500 : 300, height: 38 }}
            //{...input}
          >
            <MenuItem value={"yet-to-start"}>Yet To Start</MenuItem>
            <MenuItem value={"on-going"}>In Progress</MenuItem>
            <MenuItem value={"completed"}>Completed</MenuItem>
            <MenuItem value={"cancel"}>Cancel</MenuItem>
            <MenuItem value={"suspended"}>Suspended</MenuItem>
          </Select>
          <FormHelperText>Project Status</FormHelperText>
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
    form.append("willNeedDonations", needDonations);
    form.append("status", projectStatus);
    form.append("objective", formValues.objective);
    form.append("sponsor", formValues.sponsor);
    form.append("video", formValues.video);
    form.append("imageLink", formValues.imageLink);
    form.append("estimatedCost", formValues.estimatedCost);
    form.append("duration", formValues.duration);
    form.append("beneficiary", formValues.beneficiary);
    form.append("contactPersonDetails", formValues.contactPersonDetails);

    form.append("projectRefNo", projectRefNo);
    form.append("createdBy", props.userId);
    if (formValues.thumbnail) {
      form.append("thumbnail", formValues.thumbnail[0]);
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/projects`, form);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_PROJECT,
            payload: response.data.data.data,
          });

          props.handleSuccessfulCreateSnackbar(
            `You have successfully posted a new project!!!`
          );
          props.updateProjectInfoHandler();
          props.handleNewProjectDialogForm();
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
          <Typography variant="h5">New Project Form</Typography>
        </FormLabel>
      </Grid>
      <Box
        component="div"
        id="addProjectForm"
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
              label="Project Objective"
              id="objective"
              name="objective"
              type="text"
              //defaultValue={props.user.name}
              component={renderObjectiveField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Project Sponsor"
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
              label="Project Video Link(YouTube Video Link)"
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
              label="Project Image Link"
              id="imageLink"
              name="imageLink"
              type="text"
              //defaultValue={props.user.name}
              component={renderImageLinkField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Estimated Cost"
              id="estimatedCost"
              name="estimatedCost"
              type="text"
              //defaultValue={props.user.name}
              component={renderEstimatedCostField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Project Duration"
              id="duration"
              name="duration"
              type="text"
              //defaultValue={props.user.name}
              component={renderDurationField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Beneficiaries"
              id="beneficiary"
              name="beneficiary"
              type="text"
              //defaultValue={props.user.name}
              component={renderBeneficiaryField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Wiil Donations be Need"
              id="willNeedDonations"
              name="willNeedDonations"
              type="text"
              //defaultValue={props.user.name}
              component={renderWillNeedDonationsField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Contact Person"
              id="contactPersonDetails"
              name="contactPersonDetails"
              type="text"
              //defaultValue={props.user.name}
              component={renderContactPersonField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>

          <Grid item>
            <Field
              label="Project Status"
              id="status"
              name="status"
              type="text"
              //defaultValue={props.user.name}
              component={renderProjectStatusField}
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
  form: "addProjectForm",
  validate: validate,
})(AddProjectForm);
