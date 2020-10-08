import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShippingInfo } from "../redux/index";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import history from "../history";
import AddIcon from "@material-ui/icons/Add";
import Checkout from "react-stripe-checkout";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  addQuantity,
  deleteItem,
  reduceQuantity,
  totalReAc,
} from "../redux/index";
import DeleteIcon from "@material-ui/icons/Delete";
import { useParams } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Carts() {
  const { id } = useParams();
  const res = useSelector(state => state.user);
  console.log(res);
  let indexx = 0;
  res.filter((el, index) => {
    if (el.id === id) {
      indexx = index;
    }
    return null;
  });

  const numberofCartItems = useSelector(state => state.user[indexx].cart);
  const totalfromredux = useSelector(state => state.user[indexx].total);

  const dispatch = useDispatch();
  const classes = useStyles();
  let tot = 0;

  useEffect(() => {
    dispatch(totalReAc({ indexx, tot }));
  });

  const cartList = numberofCartItems.map((el, index) => {
    return (
      <div key={index}>
        <h2 id="transition-modal-title">{el.title}</h2>

        <p id="transition-modal-description">{el.desc}</p>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <img src={el.image} alt={el.title} style={{ width: "100px" }} />
          <h5>quantities:{el.quantity}</h5>
          <h4>Price=$ {el.price * el.quantity}</h4>
        </div>

        <div>
          <IconButton
            onClick={() => {
              dispatch(addQuantity({ indexx, index }));
            }}
          >
            <AddIcon style={{ color: "green" }} />
          </IconButton>
          {el.quantity > 1 ? (
            <IconButton
              onClick={() => {
                dispatch(reduceQuantity({ indexx, index }));
              }}
            >
              <RemoveIcon style={{ color: "red" }} />
            </IconButton>
          ) : null}
          <IconButton
            onClick={() => {
              dispatch(deleteItem({ indexx, index }));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  });
  const arrayofPrice = numberofCartItems.map(el => {
    return el.price * el.quantity;
  });
  if (arrayofPrice.length > 0) {
    tot = arrayofPrice.reduce((a, b) => a + b);
  }
  console.log(tot);

  const apikey = process.env.REACT_APP_API_KEYS;
  const handeltoken = (token, address) => {
    dispatch(addShippingInfo({ indexx, shippingInfo: { token, address } }));
    console.log(address, token);
  };
  return (
    <div className={classes.paper}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={() => history.push(`/${id}`)}>
          <CloseIcon />
        </IconButton>
      </div>
      {cartList}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h3>Total: $ {totalfromredux}</h3>
          <Checkout
            style={{ background: "#D1A65F", color: "white" }}
            stripeKey={apikey}
            token={handeltoken}
            billingAddress
            shippingAddress
            amount={totalfromredux * 100}
          />
        </div>
      </div>
    </div>
  );
}
