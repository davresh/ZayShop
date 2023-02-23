let faBars = document.getElementById('fa-bars')
let btnFaBars = true
faBars.addEventListener('click',()=>{
    if(btnFaBars){
        document.getElementById('header').style.height = '317px'
        btnFaBars = false
    }else{
        document.getElementById('header').style.height = '85px'
        btnFaBars = true
    }
})
let mail = document.querySelectorAll('.inp')
let send = document.getElementById('send')
send.addEventListener('click',()=>{
    mail.forEach(el => {
        if(el.value == ''){
            el.style.border = '1px solid red'
        }
    })
})
