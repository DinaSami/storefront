import React , {useEffect} from 'react';
import './Categories.css';
import { useSelector, useDispatch} from 'react-redux'
import { switchCategory, switchProducts } from '../../store/action/index';
import {getCategories,getProducts} from '../../store/action/index'

const Categories = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  },[])

  return (
    <div>
      <h2>Browse Our Categories</h2>
   
      {state.categories.allCategories.map((category, i) => {
        return (
          <button key={i} onClick={() => { dispatch(switchCategory(category.name,category.description));}} title={category.name}>{category.name}</button>
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