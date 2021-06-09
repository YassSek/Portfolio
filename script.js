const contactBtn = document.getElementById('contact');
const aboutBtn = document.getElementById('about');
const blocAbout = document.getElementById('blocAbout');
const blocContact = document.getElementById('blocContact');

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



function sendMail(prms){
    let tempParams={
        from_name:document.getElementById("userName").value,
        from_email:document.getElementById("userMail").value,
        message:document.getElementById("userMsg").value 
    };

    emailjs.send("Portfolio_4oj6gqx","template_4nmozz8",tempParams)
    .then((res)=>{ alert("your message has been sent"); console.log(res.status) },
    (error)=>{alert("your message has not been sent");
    })
}