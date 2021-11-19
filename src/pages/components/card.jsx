import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function UserCard({title, subheader}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            D
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
    </Card>
  );
} 