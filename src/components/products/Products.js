import React from 'react';
import './Products.scss';
// import { switchProducts } from '../../store/action/index';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector,useDispatch} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {switchCart} from '../../store/action/index';
import {getProducts} from '../../store/action/index'
import {useEffect} from 'react'
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 180,
  },
});

const Products = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  },[])
  const classes = useStyles();

  return (
    <div className="products">
      <h2 id='text'>{state.categories.filteredCtegories.name}</h2>
      <h4 id='text'>{state.categories.filteredCtegories.description}</h4>
 
        {state.products.allProducts.map((product, i) => {
          return (
            <>
            {(product.category === state.categories.filteredCtegories.name) &&
          <Card key={i} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493b33ugpent8i3q3ttfasm2rwygvbfd85dnh2sdpji5&rid=200w.gif&ct=g'
              title="Product Picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                ${product.price}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                IN STOCK: {product.inStock}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={()=> dispatch(switchCart(product))}>
                  ADD TO CART
            </Button>
            <Button size="small" color="primary">
                  VIEW DETAILS
            </Button>
          </CardActions>
        </Card>
            
            }
            </>
        )
      })}
  </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.products.products,
//     category: state.categories.activeCategory
//   }
// }

// const mapDispatchToProps = {
//   switchProducts,
// }

export default Products;