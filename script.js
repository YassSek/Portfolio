const contactBtn = document.getElementById('contact');
const aboutBtn = document.getElementById('about');
const blocAbout = document.getElementById('blocAbout');
const blocContact = document.getElementById('blocContact');

const submitMsg = document.getElementById('submitMsg')

aboutBtn.addEventListener('click', () => {
    if (blocAbout.style.display == "block") {
        blocAbout.style.display = "none";
    } else {
        blocAbout.classList.add('slideAbout');
        blocAbout.style.display = "block";
    }
    document.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            blocAbout.style.display = "none";
        }
    })
})

contactBtn.addEventListener('click', () => {
    if (blocContact.style.display == "block") {
        blocContact.style.display = "none";
    } else {
        blocContact.classList.add('slideContact')
        blocContact.style.display = "block";
    }
    document.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            blocContact.style.display = "none";
        }
    })
})

window.onload = () =>{
    submitMsg.addEventListener('click',() =>{
        event.preventDefault();
        sendMail();})
}



function sendMail(){
    let tempParams={
        from_name:document.getElementById("userName").value,
        from_email:document.getElementById("userMail").value,
        message:document.getElementById("userMsg").value 
    };

    emailjs.send("Portfolio_4oj6gqx","template_4nmozz8",tempParams)
    .then((res)=>{  console.log("your message has been sent",res.status) 
                },
    (error)=>{console.log("your message has not been sent",error);
    })
}
