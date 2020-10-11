import React, { useState,useEffect } from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  makeStyles,
  useMediaQuery,
  Menu,MenuItem
} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import history from "../history";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import { isSignedIn, isSignedOut } from "../redux/index";
import { useDispatch, useSelector } from "react-redux";
import Modals from "./modal";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  title: {
    flexGrow: 0,
    cursor: "Pointer",
  },
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
export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [id, setId] = useState(null);
  const responseGoogle = response => {
      dispatch(isSignedIn(response.profileObj));
      setId(response.profileObj.googleId);
    
    
    
  };
  useEffect(() => {
    if (!id) {
      history.push("/")
    }
  },[id])
  const responseGoogleErorr = (res) => {
    console.log(res)
    
  };
  const responseGoogleOut = (res) => {
    dispatch(isSignedOut(id));
    setId(null);

  };
  const res = useSelector(state => state.user);

  let indexx = 0;
  res.filter((el, index) => {
    if (el.id === id) {
      indexx = index;
    }
    return null;
  });

  const userCart = useSelector(state => state.user[indexx].cart);
  const classes = useStyles();

  const { signIn } = useGoogleLogin({
    //  process.env.REACT_APP_CLIENT_ID,
   // process.env.REACT_APP_LOCAL_CLIENT_ID,
    clientId:process.env.REACT_APP_LOCAL_CLIENT_ID,
    onSuccess: responseGoogle,
    isSignedIn: true,
    onFailure: responseGoogleErorr,
    cookiePolicy: "single_host_origin",
  });
  const { signOut } = useGoogleLogout({
    
    //process.env.REACT_APP_LOCAL_CLIENT_ID
    // process.env.REACT_APP_CLIENT_ID
    clientId:process.env.REACT_APP_LOCAL_CLIENT_ID,

    onLogoutSuccess: responseGoogleOut,
    isSignedIn:false,
    onFailure: responseGoogleErorr,
    cookiePolicy: "single_host_origin",
  });
 const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          {matches ===false?  <IconButton onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
            :null
          }
        
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => {
              if (id) {
                   history.push(`/${id}`)
              }
              else {
                   history.push("/")
              }
           
            }}
          >
            YoFurni
          </Typography>
        

          <div className="nav">
            {matches === false ?
            <>
              { id && <Menu style={{top:"35px",left:"-16px"}}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                  <Link className={classes.menuButton} color="inherit" to={`/beds/${id}`} > Beds </Link></MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link className={classes.menuButton} color="inherit" to={`/chairs/${id}`} >Chairs</Link></MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link className={classes.menuButton} color="inherit" to={`/tables/${id}`} >Tables</Link></MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className={classes.menuButton} color="inherit" to={`/lightening/${id}`} >Lighting</Link></MenuItem>
                  <MenuItem onClick={handleClose}>
                    {userCart.length > 0 ? (
                <Link
                  className={classes.menuButton}
                  color="inherit"
                  to={`/cart/${id}`}
                >
                  Cart
                </Link>
              ) : null}
                  </MenuItem>

                </Menu>}
              </> : <>
          
              {id && (
                <>
                  <Link
                    className={classes.menuButton}
                    color="inherit"
                    to={`/beds/${id}`}
                  >
                    Beds
                </Link>
                  <Link
                    className={classes.menuButton}
                    color="inherit"
                    to={`/chairs/${id}`}
                  >
                    Chairs
                </Link>
                  <Link
                    className={classes.menuButton}
                    color="inherit"
                    to={`/tables/${id}`}
                  >
                    Tables
                </Link>
                  <Link
                    className={classes.menuButton}
                    color="inherit"
                    to={`/lightening/${id}`}
                  >
                    lightening
                </Link>
                </>
              )}
              {userCart.length > 0 ? (
                <Link
                  className={classes.menuButton}
                  color="inherit"
                  to={`/cart/${id}`}
                >
                  Cart
                </Link>
              ) : null}
            </>
            }
          </div>
          {id ? (
            <IconButton
              onClick={() => {
                signOut();
              }}
            >
              <ExitToAppIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => signIn()}>
              <PermIdentityIcon />
            </IconButton>
          )}

          <IconButton>
            {userCart.length > 0 ? (
              <Modals index={indexx} userId={id}/>
            ) : (
              <ShoppingCartIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
