import React from 'react';
import './SimpleCart.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteCart } from '../../store/action/index';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: blue[500],
    },
});

const SimpleCart = () => {
    const state = useSelector(state => state);
    const classes = useStyles();
    const dispatch = useDispatch();
console.log('caaaaaaaaaaaart',state.cart.cart);
    if (state.cart.cart.length > 0) {
        return (
            <>
                {/* <h1>selected products in your cart</h1> */}
                <Card className={classes.root} variant="outlined" id='card'>
                    <CardContent>
                        {state.cart.cart.map((product, i) => {
                            return (
                                <Typography key={i} variant="body4" component="p" color="primary">
                                    <CardHeader
                                        avatar={<Avatar className={classes.avatar}>{product.count}</Avatar>}
                                        title={product.name}
                                    />
                                    <IconButton aria-label="delete" component="span" onClick={()=>dispatch(deleteCart(product))}> <DeleteIcon /></IconButton>
                                </Typography>
                            )
                        }
                        )}
                    </CardContent>
                </Card>
            </>
        )
    } else {
        return (
            <div>
                <h1>Add products to your cart</h1>
            </div>

        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart.cart,
//     }
// }

// const mapDispatchToProps = {
// }

export default SimpleCart;