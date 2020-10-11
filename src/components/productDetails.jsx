import React,{useEffect, useState} from 'react';
import { Button, Grid,TextField,Typography } from '@material-ui/core';
import { useLocation, useParams } from 'react-router-dom';
import {addTocart} from "../redux"
import{useSelector,useDispatch}from "react-redux"
import history from '../history';
const ProductDetails = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const user = useSelector(state => state.user)
    const [quantity, setQuantity] = useState(state.quantity)
    const dispatch=useDispatch()
 let indexx = 0;
  user.filter((el, index) => {
    if (el.id === id) {
      indexx = index;
    }
    return null;
  });
    useEffect(() => {
        state.quantity = quantity
        
    }, [quantity, state.quantity]
          
    )
    const handleClick = () => {
        dispatch(addTocart({ el:state, indexx }))
      history.push(`/${id}`)
        
    }
 
    return (
        <Grid container direction="row"justify="center" alignItems="center" className="product" >
            <Grid item sm={1} md={2} ></Grid>
            <Grid container item sm={10} md={8}>
                <Grid item xs={12} md={6}>
             <div className="product-pic">
   <img src={state.image} alt={state.title}/>
                    </div> 
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="product-action">   <h5>{state.title}</h5>
                        <p>Price:${state.price},00</p> 
                        <div>

            <TextField id="outlined-number"label="Quantity"
            type="number" value={quantity}
         onChange={(e)=> setQuantity(e.target.value)}
          variant="outlined"
        />
                            <Button onClick={handleClick}>Add To Cart</Button>
                        </div>
                    </div> 
                </Grid>
            </Grid>
            <Grid item sm={1} md={2}></Grid>
            <Grid item sm={1} md={2}></Grid>
            <div className="product-details">
                <h4>Product Details:</h4>
                <Typography color="textSecondary">
                {state.details}
                </Typography>
            </div>
            <hr style={{width:"75%"}}/>
      </Grid>
    );
}

export default ProductDetails;
