
export const ADD_BOOKMARK = 'ADD_BOOKMARK';

 export function addAction( { title, url}){
   console.log( 'action : ' , title , url );
   return{
       type : ADD_BOOKMARK,
       payload : {
         title,
         url
       }
   }
 }
  