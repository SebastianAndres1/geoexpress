/* MENU NAVEGATION */
const btn = document.getElementById('btn')
const menu = document.getElementById('menu-nav')
let active = false

btn.onclick = ()=>{
    active = !active
    if(active){
        menu.classList.add('prev-nav-active')
        setTimeout(()=>{
            menu.classList.add('nav-active')
        },200) 
        
    }else{
        menu.classList.remove('nav-active')
        setTimeout(()=>{
            menu.classList.remove('prev-nav-active')
        },200)
        
    }
}
/* THEME DARK OR LIGHT MODE */
const btnTheme = document.getElementById('btn-theme')
const configMode = window.matchMedia('(prefers-color-scheme: dark)')
const configStorage = sessionStorage.getItem('theme')
const carousel = document.getElementById('carousel')

if(configStorage === 'dark'){
    document.body.classList.toggle('dark-mode')
    carousel.classList.remove('carousel-dark')
}else if(configStorage === 'light'){
    document.body.classList.toggle('light-mode')
    carousel.classList.add('carousel-dark')
} 

//Listening change of theme the operating system
window.matchMedia('(prefers-color-scheme: dark)').onchange = () =>{
    if(configMode.matches){
        btnTheme.classList.add('active')
        carousel.classList.remove('carousel-dark')
    }else{
        btnTheme.classList.remove('active')
        carousel.classList.add('carousel-dark')
    }
}

if(configMode.matches){//if dark
    btnTheme.classList.add('active')
    carousel.classList.remove('carousel-dark')
    if(document.body.classList.contains('light-mode')){
        btnTheme.classList.remove('active')
        carousel.classList.add('carousel-dark')
    }
}else{
    btnTheme.classList.remove('active')
    carousel.classList.add('carousel-dark')
    if(document.body.classList.contains('dark-mode')){
        btnTheme.classList.add('active')
        carousel.classList.remove('carousel-dark')
    }
}

btnTheme.onclick = () =>{
    let theme
    if(configMode.matches){
        document.body.classList.toggle('light-mode')
        btnTheme.classList.toggle('active')

        carousel.classList.remove('carousel-dark')
        if(document.body.classList.contains('light-mode')){
            carousel.classList.add('carousel-dark')
        }
        theme = document.body.classList.contains('light-mode') ? 'light':'dark'
    }else{
        document.body.classList.toggle('dark-mode')
        btnTheme.classList.toggle('active')

        carousel.classList.add('carousel-dark')
        if(document.body.classList.contains('dark-mode')){
            carousel.classList.remove('carousel-dark')
        }
        theme = document.body.classList.contains('dark-mode') ? 'dark':'light'
    }
    
    sessionStorage.setItem('theme', theme)
}
/* BUTTON UP SCROLL */
const btnUp =document.getElementById('btn-up')
let height = document.getElementById('home').offsetTop;

btnUp.onclick = () =>{
    window.scrollTo(0, 0);
}

window.onscroll = function() {
    let y = window.scrollY;
    if(y>height){
        btnUp.classList.add('btn-up-show');
    }else{
        btnUp.classList.remove('btn-up-show');
    }
}
window.scroll({
    behavior:'smooth'
})



const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    let data = new FormData(form)
    let msgAlert = document.getElementById('alert-msg')
   

    if(data.get('name').indexOf(String) || data.get('lastname').indexOf(String)|| data.get('email').indexOf(String)|| data.get('message').indexOf(String)){
       
        if(data.get('name').length < 4 ){
            msgAlert.style.display = 'block'
            setTimeout(()=>{
                msgAlert.style.display = 'none'
            },3000)
        } else if(data.get('lastname').length < 4){
            msgAlert.style.display = 'block'
            setTimeout(()=>{
                msgAlert.style.display = 'none'
            },3000)
            
        } else if(data.get('email').length < 3){
            msgAlert.style.display = 'block'
            setTimeout(()=>{
                msgAlert.style.display = 'none'
            },3000)
           
        }else if(data.get('messege').length < 4){
            msgAlert.style.display = 'block'
            setTimeout(()=>{
                msgAlert.style.display = 'none'
            },3000)
        }else{
            alert('hola '+ data.get('name'))
        }
        
        
        /*fetch('index.php',{
            method: 'POST',
            body: data
        })
        .then( res => res.json())  
        .then( response =>{

        })*/    

    }
})