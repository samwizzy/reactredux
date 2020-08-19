import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { matchPath } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function NavTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { history, location, match } = props;
  const [value, setValue] = React.useState(location.pathname);

  // const matchLocation = (location, value) => route =>
  //   !!matchPath(location.pathname, { path: route, exact: true })
  //     ? value
  //     : Infinity;
  // const getTabValue = matchLocation(location, value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(value, "value");
  // console.log(getTabValue("/navtabs/:tab/:tabId?"), "getTabValue");

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          aria-label="full width tabs example"
        >
          <Tab
            label="Chats"
            onClick={() => history.push(`/navtabs`)}
            {...a11yProps(0)}
            value="/navtabs"
          />
          <Tab
            label="Tasks"
            onClick={() => history.push(`/navtabs/tasks`)}
            {...a11yProps(1)}
            value="/navtabs/tasks"
          />
          <Tab
            label="Files"
            onClick={() => history.push(`/navtabs/files`)}
            {...a11yProps(2)}
            value="/navtabs/files"
          />
        </Tabs>
      </AppBar>
      <div>
        <TabPanel value={value} index={"/navtabs"} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={"/navtabs/tasks"} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={"/navtabs/files"} dir={theme.direction}>
          Item Three
        </TabPanel>
      </div>
    </div>
  );
}
