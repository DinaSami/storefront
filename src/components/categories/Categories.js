import React from 'react';
import './Categories.css';
import {useSelector,useDispatch} from 'react-redux'
import {switchCategory,switchProducts} from '../../store/action/index';

const Categories = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return(
    <div>
      <h2>Browse Our Categories</h2>
      {state.categories.categories.map((category,i) => {
        return(
        
          <button key={i} onClick={() => { dispatch(switchCategory(category.name)); dispatch(switchProducts(category.name));}} title={category.name}>{category.displayName}</button>
        )
      })}
    </div>
  )
}

// const mapStateToProps = (state) =>{
//   return{
//     activeCategory: state.categories.activeCategory,
//     categories: state.categories.categories
//   }
// }

// const mapDispatchToProps = {
//   switchCategory,
//   switchProducts,
// }

export default Categories;