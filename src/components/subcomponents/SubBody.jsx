import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActions,
  Grid,
  IconButton,

} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/styles";

import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/index";
import { Link, useParams } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minWidth: 250,
    margin: "auto auto",
  },
});
const SubBody = ({ img }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  // let id = useSelector(state => state.id) || 0;
  const res = useSelector(state => state.user);

  let indexx = 0;
  res.filter((el, index) => {
    if (el.id === id) {
      indexx = index;
    }
    return null;
  });

  const list = img.map((el, index) => {
    return (
  
      <Grid item md={4} xs={12} sm={6} key={index}>
        <div style={{ margin: "10px auto" }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="beds"
                height="140"
                image={el.image}
                title={el.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {el.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {el.desc}
                </Typography>
                 <Typography color="textSecondary"  variant="h5" component="h2">
                  ${el.price},00
                </Typography>
              </CardContent>
            </CardActionArea>
            {indexx === 0 ? (
              <CardActions>
                <IconButton disabled>
                  <AddShoppingCartIcon />
                </IconButton>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            ) : (
              <CardActions>
                <IconButton onClick={() => dispatch(addTocart({ el, indexx }))}>
                  <AddShoppingCartIcon />
                  </IconButton>
                  <Button>
                    <Link to={{ pathname: `/product/${index}/${id}`, state: el }} >Learn More</Link>
                    </Button>
              </CardActions>
            )}
            </Card>
           
        </div>
        </Grid>
       
    );
  });
  return (
    <div className="main">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={1} sm={1} xs={1}></Grid>
        <Grid item container md={10} sm={10} xs={10}>
          {list}
        </Grid>
        <Grid item md={1} sm={1} xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default SubBody;
