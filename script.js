let elm=document.querySelector('.grid')
let cont=document.querySelector('.container')
create.addEventListener('click',()=>{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'test.css';
    link.media = 'all';
    head.appendChild(link);
    cont.innerHTML='';
    cont.classList.add('box')
  setTimeout(()=>{
  cont.innerHTML=` 
        <h2>Create Account Now!</h2>
        <input type='text' placeholder="Name">
        <input type='text' placeholder="Email/Phone">
        <input type='password' placeholder="Password">
        <button class='btn'>Sign Up</button>
    `
    cont.classList.remove('box')
    },1000)
})