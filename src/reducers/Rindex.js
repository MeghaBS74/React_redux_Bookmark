
import { ADD_BOOKMARK } from '../actions/Aindex'


export default function bookMarkReducer(state = [] , action)  {
     switch(action.type){
         case ADD_BOOKMARK:
             console.log( 'reducer:', action.payload)
             return [...state, action.payload];
         default:
             return state;
     }
}