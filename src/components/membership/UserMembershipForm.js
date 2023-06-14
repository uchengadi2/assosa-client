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
import { CREATE_MEMBERSHIP } from "../../actions/types";

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
      minRows={4}
      onChange={input.onChange}
    />
  );
};

const renderProfessionField = ({
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

const renderQualificationField = ({
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

const renderExperiencesField = ({
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

const renderAchievementsField = ({
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
      minRows={12}
      onChange={input.onChange}
    />
  );
};

const renderBioField = ({
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

const renderWebsiteField = ({
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

const renderFacebookPageField = ({
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

const renderInstagramPageField = ({
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

const renderYoutubeChannelField = ({
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

const renderTwitterHandleField = ({
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

const renderLinkedInProfileField = ({
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

const renderContactEmailField = ({
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

const renderContactPhoneNumberField = ({
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

const renderImageField = ({
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

const UserMembershipForm = (props) => {
  const classes = useStyles();

  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [loading, setLoading] = useState(null);
  const [status, setStatus] = useState("inactive");
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState();
  const [connectionAvailability, setConnectionAvailability] = useState(false);
  const [membershipNumber, setMembershipNumber] = useState(
    "AD-" + Math.floor(Math.random() * 1000000) + "-" + "OS"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/categories`);
      const workingData = response.data.data.data;
      workingData.map((category) => {
        allData.push({ id: category._id, name: category.name });
      });
      setCategoryList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [props]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConnectionAvailabilityChange = (event) => {
    setConnectionAvailability(event.target.value);
  };

  //get the category list
  const renderCategoryList = () => {
    return categoryList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderCategoryField = ({
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
            labelId="category"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
            style={{ marginTop: 10, width: matchesMD ? 500 : 300, height: 38 }}
            {...input}
          >
            {renderCategoryList()}
          </Select>
          <FormHelperText>Select your Set</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderConnectionAvailabilityField = ({
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
            labelId="canAddMeToNetwork"
            id="canAddMeToNetwork"
            value={connectionAvailability}
            onChange={handleConnectionAvailabilityChange}
            label="Others Can Connect With Me"
            style={{ marginTop: 10, width: matchesMD ? 500 : 300, height: 38 }}
            {...input}
          >
            <MenuItem value={false}>False</MenuItem>
            <MenuItem value={true}>True</MenuItem>
          </Select>
          <FormHelperText>
            Will Be Available for Connections by Others Members
          </FormHelperText>
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

    // if (
    //   !formValues["name"] ||
    //   formValues["name"].replace(/\s/g, "").length === 0
    // ) {
    //   props.handleFailedSnackbar("The category name field cannot be empty");
    //   setLoading(false);
    //   return;
    // }

    const Str = require("@supercharge/strings");

    const form = new FormData();
    form.append("headline", formValues.headline);
    form.append("title", formValues.title);
    form.append("description", formValues.description);
    form.append("profession", formValues.profession);
    form.append("qualification", formValues.qualification);
    form.append("experiences", formValues.experiences);
    form.append("achievements", formValues.achievements);
    form.append("bio", formValues.bio);
    form.append("website", formValues.website);
    form.append("facebookPage", formValues.facebookPage);
    form.append("instagramPage", formValues.instagramPage);
    form.append("youtubeChannel", formValues.youtubeChannel);
    form.append("twitterHandle", formValues.twitterHandle);
    form.append("linkedInProfile", formValues.linkedInProfile);
    form.append("location", formValues.location);
    form.append("canAddMeToNetwork", formValues.canAddMeToNetwork);
    form.append("contactEmail", formValues.contactEmail);
    form.append("contactPhoneNumber", formValues.contactPhoneNumber);
    form.append("category", formValues.category);
    form.append("user", props.userId);
    form.append("status", status);
    form.append("membershipNo", membershipNumber);
    form.append("createdBy", props.userId);
    if (formValues.image) {
      form.append("image", formValues.image[0]);
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/memberships`, form);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_MEMBERSHIP,
            payload: response.data.data.data,
          });

          //update the user model
          const userData = {
            isAMember: true,
            membershipNo: membershipNumber,
            membership: response.data.data.data.id,
          };
          const res = await api.patch(`/users/${props.userId}`, userData);

          props.handleSuccessfulCreateSnackbar(
            `You have successfully completed yor profile!!!`
          );
          props.updateUserInfoHandler();
          props.handleMembershipDialogForm();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
          setLoading(false);
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
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
          <Typography variant="h5">Membership Form</Typography>
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
              id="category"
              name="category"
              type="text"
              component={renderCategoryField}
              //style={{ marginTop: 3, width: 500 }}
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
              label="Bio"
              id="bio"
              name="bio"
              type="text"
              //defaultValue={props.user.name}
              component={renderBioField}
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
              label="Profession"
              id="profession"
              name="profession"
              type="text"
              //defaultValue={props.user.name}
              component={renderProfessionField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Qualification"
              id="qualification"
              name="qualification"
              type="text"
              //defaultValue={props.user.name}
              component={renderQualificationField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Experiences"
              id="experiences"
              name="experiences"
              type="text"
              //defaultValue={props.user.name}
              component={renderExperiencesField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Achievements"
              id="achievements"
              name="achievements"
              type="text"
              //defaultValue={props.user.name}
              component={renderAchievementsField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Website"
              id="website"
              name="website"
              type="text"
              //defaultValue={props.user.name}
              component={renderWebsiteField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Facebook Profile"
              id="facebookPage"
              name="facebookPage"
              type="text"
              //defaultValue={props.user.name}
              component={renderFacebookPageField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Instagram Profile"
              id="instagramPage"
              name="instagramPage"
              type="text"
              //defaultValue={props.user.name}
              component={renderInstagramPageField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Youtube Channel"
              id="youtubeChannel"
              name="youtubeChannel"
              type="text"
              //defaultValue={props.user.name}
              component={renderYoutubeChannelField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Twitter Handle"
              id="twitterHandle"
              name="twitterHandle"
              type="text"
              //defaultValue={props.user.name}
              component={renderTwitterHandleField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="LinkedIn Profile"
              id="linkedInProfile"
              name="linkedInProfile"
              type="text"
              //defaultValue={props.user.name}
              component={renderLinkedInProfileField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Address Location"
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
              label="Contact Email"
              id="contactEmail"
              name="contactEmail"
              type="text"
              //defaultValue={props.user.name}
              component={renderContactEmailField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Contact Phone Number"
              id="contactPhoneNumber"
              name="contactPhoneNumber"
              type="text"
              //defaultValue={props.user.name}
              component={renderContactPhoneNumberField}
              style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="canAddMeToNetwork"
              name="canAddMeToNetwork"
              type="text"
              component={renderConnectionAvailabilityField}
              //style={{ marginTop: 3, width: 500 }}
            />
          </Grid>
          <Grid item>
            <Field
              label="Photo"
              id="image"
              name="image"
              type="file"
              //defaultValue={props.user.name}
              component={renderImageField}
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
})(UserMembershipForm);
