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
let buyProduct = document.getElementById('buyProduct')
buyProduct.innerText = localStorage.getItem('val')??0
