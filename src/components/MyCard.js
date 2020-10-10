import React, { useState, Fragment } from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

import { MatchDetails } from "../api/Api";

const MyCard = ({ match }) => {
  const [details, setDetails] = useState({});
  const [dialog_open, setDialog] = useState(false);
  const showDetails = (id) => {
    MatchDetails(id)
      .then((data) => {
        console.log("MATCH DATA", data);
        setDetails(data);
        handle_open();
      })
      .catch((err) => console.log("ERROR", err));
  };
  const handle_close = () => {
    setDialog(false);
  };
  const handle_open = () => {
    setDialog(true);
  };

  const getMyCard = () => {
    return (
      <Card style={{ marginTop: 15 }}>
        <CardContent>
          <Grid container justify="center" spacing={4} alignItems="center">
            <Grid item>
              <Typography variant="h5">{match["team-1"]}</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 85 }}
                src={require("../img/vs.png")}
                alt=""
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">{match["team-2"]}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center">
            <Button
              item
              onClick={() => {
                showDetails(match.unique_id);
              }}
              variant="outlined"
              color="secondary"
            >
              Show Details
            </Button>
            <Button
              item
              style={{ marginLeft: 5 }}
              variant="outlined"
              color="primary"
            >
              Start Time {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  };

  const getDialog = () => {
    return (
      <Dialog open={dialog_open} onClose={handle_close}>
        <DialogTitle id="alert-dialog-title">{"MATCH DETAILS.."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>{details.stat}</Typography>
            <Typography>
              Match
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {details.matchStarted ? "Started" : "Still Not Started"}
              </span>
            </Typography>
            <Typography>
              Score
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {details.score}
              </span>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handle_close} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  return (
    <Fragment>
      {getMyCard()}
      {getDialog()}
    </Fragment>
  );
};

export default MyCard;
