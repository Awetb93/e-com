import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, Fade, Modal, Badge, Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import history from "../history";
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

export default function Modals(props) {
 
  const numberofCartItems = useSelector(state => state.user[props.index].cart);

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cartList = numberofCartItems.map((el, index) => {
    return (
      <div key={index}>
        <h2 id="transition-modal-title">{el.title}</h2>
        <p id="transition-modal-description">{el.desc}</p>
        <img src={el.image} alt={el.title} style={{ width: "100px" }} />
      </div>
    );
  });
  return (
    <Badge badgeContent={numberofCartItems.length} color="secondary">
      <ShoppingCartIcon onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {cartList}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => {
                  history.push(`/cart/${props.userId}`);
                  setOpen(false);
                }}
                style={{ background: "#D1A65F", color: "white" }}
              >
                Check out
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </Badge>
  );
}
