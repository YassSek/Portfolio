const contactBtn = document.getElementById('contact');
const aboutBtn = document.getElementById('about');
const blocAbout = document.getElementById('blocAbout');
const blocContact = document.getElementById('blocContact');

aboutBtn.addEventListener('click', () =>{
    if(blocAbout.style.display=="block"){
        blocAbout.style.display="none";
    }else{
        blocAbout.classList.add('slideAbout'); 
        blocAbout.style.display="block";
    }

   document.addEventListener('scroll',()=>{
        if(window.scrollY>50){
            blocAbout.style.display="none";  
        } 
    })
})

contactBtn.addEventListener('click', () =>{
    if(blocContact.style.display=="block"){
        blocContact.style.display="none";
    }else{
        blocContact.classList.add('slideContact')
        blocContact.style.display="block";
    }
    document.addEventListener('scroll',()=>{
        if(window.scrollY>50){
            blocContact.style.display="none";
        } 
    })
})