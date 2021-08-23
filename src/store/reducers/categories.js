let categoryList = [
    {
      name: 'electronics',
      displayName: 'ELECTRONICS',
      description: ' new technical products',
      active: false,
    },
    {
      name: 'food',
      displayName: 'FOOD',
      description: ' our delicious food',
      active: false,
    }
  ]
  
  let initialState = {
    categories:categoryList,
    activeCategory: [],
  }
  
  let activatedCategory;
  let newCategories;
  
  export default function CategoriesReducer(state=initialState, action){
    let {type, payload} = action;
  
    switch(type){
      case "SWITCH_ACTIVE_CATEGORY":
      activatedCategory = state.categories.filter(category => category.name === payload)[0];
      newCategories = state.categories;
      return {activeCategory: activatedCategory, categories: newCategories};
      default: return state;
    }
  }
  
