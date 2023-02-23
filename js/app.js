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
let slider = [
    ['Zay eCommerce','Tiny and Perfect eCommerce Template','Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.','./img/banner_img_01.jpg'],
    ['Proident occaecat','Aliquip ex ea commodo consequat','You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.','./img/banner_img_02.jpg'],
    ['Repr in voluptate','Ullamco laboris nisi ut','We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.','./img/banner_img_03.jpg']
]
let sliderPr = document.querySelectorAll('.sliderPr')
let  sliderClick = document.querySelectorAll('.sliderClick')
let use = document.querySelectorAll('.use')
function actionSlider(bt,ind,sl,act){
    bt.forEach(el => el.style.opacity = 0.5)
    bt[ind].style.opacity = 1
    sl[ind].forEach((el,i) => {
        if(i == sl.length){
            act[i].src = el
        }else{
            act[i].innerText = el
        }
    })
}
let sliderNum = 0
sliderClick[0].addEventListener('click',()=>{
    if(sliderNum == 0) sliderNum = 3;
    sliderNum--
    actionSlider(use,sliderNum,slider,sliderPr)
})
sliderClick[1].addEventListener('click',()=>{
    sliderNum++
    if(sliderNum == 3) sliderNum = 0;
    actionSlider(use,sliderNum,slider,sliderPr)
})
use.forEach((el,c) => el.addEventListener('click',()=>{
    actionSlider(use,c,slider,sliderPr)
}))
