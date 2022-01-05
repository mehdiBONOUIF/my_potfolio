// $(document).ready(function(){
//     $('#icon').click(function(){
//      $('ul').toggleClass('show');
//     }); 
// });
let myIcon = document.getElementById('icon');
let myList = document.querySelector('ul');

myIcon.onclick = function(){
    myList.classList.toggle('show');
};
