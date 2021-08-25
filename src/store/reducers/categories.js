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
    allCategories:[],
    filteredCtegories:{} // {name:"food"}
  }
  
  let activatedCategory;
  let newCategories;
  
  export default function CategoriesReducer(state=initialState, action){
    let {type, payload} = action;
    switch(type){
      case "SWITCH_ACTIVE_CATEGORY":
        return {...state,filteredCtegories: payload};
        
        case 'GET':
          return  {...state,allCategories:payload};
         
      default: return state;
    
  }
}

  
