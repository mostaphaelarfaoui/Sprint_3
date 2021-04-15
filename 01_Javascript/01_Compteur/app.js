let  add     = document.getElementById('indecrease'),
     remove  = document.getElementById('decrease'),
     reset   = document.getElementById('reset'),
     value   = document.getElementById('value'),
     integer = 0;
add.addEventListener('click',function(){
    integer +=1;
    value.innerHTML =integer;
    if(integer>=1){
    value.style.color = 'green';
    }   
})
remove.addEventListener('click',function(){
    integer -=1 ;
    value.innerHTML =integer;
    if(integer<0){
    value.style.color = 'red';
    }
})
reset.addEventListener('click',function(){
    integer =0;
    value.innerHTML =integer;
    value.style.color = 'black';
})
