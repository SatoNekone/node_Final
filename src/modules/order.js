export default class orderAction{
    
}





function loadProducts(state) {
  let newState = {...state}
  if(localStorage.getItem("Cart") != null) {
	newState = JSON.parse(localStorage.getItem("Cart"));
  } 
  return newState;
}