const sneakersthumb=document.querySelector('.sneakersthumb');
const trekersthumb=document.querySelector('.trekersthumb');
const canvasthumb=document.querySelector('.canvasthumb');
const shoethumb=document.querySelector('.shoethumb');
const sneakers =document.querySelector('.sneakers')
const trekers =document.querySelector('.trekers');
const canvas =document.querySelector('.canvas');
const shoe=document.querySelector('.shoe');
const collections=document.querySelector('.store-shoes')



sneakersthumb.addEventListener('click', e=>{
    canvas.style.display='none'
    trekers.style.display='none'
    shoe.style.display='none'
    sneakers.style.display='block'
    canvasthumb.style.border='none';
    canvasthumb.style.opacity='1'
    trekersthumb.style.border='none'
    shoethumb.style.border='none'
    sneakersthumb.style.border='3px solid hsl(12, 88%, 59%)'
    sneakersthumb.style.opacity='0.4'
    trekersthumb.style.opacity='1'
    shoethumb.style.opacity='1'
}) 

trekersthumb.addEventListener('click' , e=>{
    sneakers.style.display='none'
    canvas.style.display='none'
    shoe.style.display='none'
    trekers.style.display='block'
    sneakersthumb.style.border='none'
    canvasthumb.style.border='none'
    canvasthumb.style.opacity='1'
    shoethumb.style.border='none'
    shoethumb.style.opacity='1'
    sneakersthumb.style.opacity='1'
    trekersthumb.style.border='3px solid hsl(12, 88%, 59%)';
    trekersthumb.style.opacity='0.4'

})
canvasthumb.addEventListener('click', e=>{
    canvas.style.display='block'
    trekers.style.display='none'
    shoe.style.display='none'
    sneakers.style.display='none'
    canvasthumb.style.border='3px solid hsl(12, 88%, 59%)';
    canvasthumb.style.opacity='0.4'
    trekersthumb.style.border='none'
    shoethumb.style.border='none'
    sneakersthumb.style.border='none'
    trekersthumb.style.opacity='1'
    shoethumb.style.opacity='1'
    sneakersthumb.style.opacity='1'
})
shoethumb.addEventListener('click', e=>{
    canvas.style.display='none'
    trekers.style.display='none'
    shoe.style.display='block'
    sneakers.style.display='none'
    canvasthumb.style.border='none';
    canvasthumb.style.opacity='1'
    trekersthumb.style.border='none'
    shoethumb.style.border='3px solid hsl(12, 88%, 59%)';
    sneakersthumb.style.border='none'
    trekersthumb.style.opacity='1'
    shoethumb.style.opacity='0.4'
    sneakersthumb.style.opacity='1'
})


const minus=document.querySelector('.minus');
const add =document.querySelector('.add')
const times =document.querySelector('.times')
let stopi=0
 let count=0;
 add.addEventListener('click', ()=>{
   count++
   if (count<=5 && count>0){
    times.textContent=count;
   }
  
 })
 
 
 minus.addEventListener('click', ()=>{
      count--
      if(count>=0 && count<=5){
   times.textContent=count;
      } 
   
 });

 const cart =document.querySelector('.cart')
 const cartProfile =document.querySelector('.cart-profile')
  
 cart.addEventListener('click', e=>{
        cartProfile.style.display='block' 
 })
cartProfile.addEventListener('click',e=>cartProfile.style.display='none')

// adding to the cart
// const addcart = document.querySelector('.addcart')
//  const newcart=()