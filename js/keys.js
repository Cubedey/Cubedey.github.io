tenxbuy=false
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 16) {
      if (tenxbuy==true) {
        tenxbuy=!tenxbuy
      } 
      render()
  } 
})

var autobuyon=false
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 65) {

   autobuyon=!autobuyon
 

      render()
  } 
})
