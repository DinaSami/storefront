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

  const classes = useStyles();
  return (
    <div className="products">
      <h2 id='text'>{state.categories.activeCategory.displayName}</h2>
      <h4 id='text'>{state.categories.activeCategory.description}</h4>
 
        {state.products.products.map((product, i) => {
          return (
          <Card key={i} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={product.image}
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
                IN STOCK: {product.inventory}
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