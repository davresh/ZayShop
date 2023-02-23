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
let gender = document.querySelectorAll('.gender')
gender.forEach((el,i) => el.addEventListener('click',()=>{
    gender.forEach(el => el.style.height = '25px')
    if(i == 2){
        el.style.height = '86px'
    }else{
        el.style.height = '65px'
    }
}))
let shope = document.getElementById('shope')
let shopeList = [
    {img:'./img/shop_01.jpg',name:'Oupidatat non',size:'M/L/X/XL',value:'$270.00',pol:'girl all'},
    {img:'./img/shop_02.jpg',name:'Oupidatat non',size:'M/L/X/XL',value:'$370.00',pol:'girl all'},
    {img:'./img/shop_03.jpg',name:'Oupidatat non',size:'M/L/X/XL',value:'$210.00',pol:'girl all'},
    {img:'./img/shop_04.jpg',name:'Oupidatat non',size:'M/L/X/XL',value:'$250.00',pol:'men all'},
    {img:'./img/shop_05.jpg',name:'Oupidatat non',size:'M/L/X/XL',value:'$170.00',pol:'men all'},
    {img:'./img/shop_06.jpg',name:'Oupidatat non',size:'M/L/X/XL',value:'$70.00',pol:'girl all'},
    {img:'./img/shop_07.jpg',name:'Oupidatat non',size:'M/L/X/XL',value:'$165.00',pol:'men all'},
    {img:'./img/shop_08.jpg',name:'Oupidatat non',size:'M/L/X/XL',value:'$100.00',pol:'girl all'},
    {img:'./img/shop_09.jpg',name:'Oupidatat non',size:'M/L/X/XL',value:'$215.00',pol:'girl all'}
]
let localShope = []
let star = []
if(!localStorage.getItem('likeShope')) {
    shopeList.forEach(el => localShope.push(true))
    localStorage.setItem('likeShope',localShope)
}
if(!localStorage.getItem('star')) {
    shopeList.forEach(el => star.push(0))
    localStorage.setItem('star',star)
}
creatBlock(shopeList,'all',shope)
let collection = document.querySelectorAll('.collectionBtn')
collection.forEach(el => el.addEventListener('click',()=>{
    collection.forEach(el => el.style.backgroundColor = '#59AB6E')
    el.style.backgroundColor = 'red'
    if(el.innerText == 'All Lists'){
        creatBlock(shopeList,'all',shope)
    }else if(el.innerText == 'Men'){
        creatBlock(shopeList,'men',shope)
    }else{
        creatBlock(shopeList,'girl',shope)
    }
}))
let buyProduct = document.getElementById('buyProduct')
buyProduct.innerText = localStorage.getItem('val')??0
let like = document.getElementById('like')
like.innerText = localStorage.getItem('likeSole')??0
function creatBlock(arr,you,block){
    block.innerText = ''
    arr.forEach((el,i) => {
        if(el.pol.includes(you)){
            let productShope = document.createElement('div');
            productShope.className = 'productShope';
            //--
            let checkProduct = document.createElement('div');
            checkProduct.className = 'checkProduct';
            let YesNo = document.createElement('div');
            YesNo.className = 'yes-no';
            let wantYouBuy = document.createElement('p');
            wantYouBuy.innerText = 'Ցանկանում եք գնե՞լ';
            YesNo.append(wantYouBuy);
            let inputArr = document.createElement('p');
            let input1 = document.createElement('input');
            input1.type = "button";
            input1.value = 'Այո';
            input1.addEventListener('click',()=>{
                buyProduct.innerText = +buyProduct.innerText + 1
                localStorage.setItem('val',buyProduct.innerText)
                checkProduct.style.display = 'none'
            })
            inputArr.append(input1);
            let input2 = document.createElement('input');
            input2.type = "button";
            input2.value = 'Ոչ';
            input2.addEventListener('click',()=>{
                checkProduct.style.display = 'none'
            })
            inputArr.append(input2);
            YesNo.append(inputArr);
            checkProduct.append(YesNo);
            productShope.append(checkProduct);
            //--
            let photoShope = document.createElement('div');
            photoShope.className = 'photoShope';
            let img = document.createElement('img');
            img.src = el.img;
            photoShope.append(img);
            let backHover = document.createElement('div');
            backHover.className = 'backHover';
            let likeIcon = document.createElement('i');
            likeIcon.className = 'fa-regular fa-heart';
            

            localShope =  localStorage.getItem('likeShope').split(',')
            let check = localShope[i]=='false'?false:true
            if(!check) likeIcon.style.backgroundColor = 'red'
            likeIcon.addEventListener('click',()=>{
                if(check == true){
                    check = false;
                    localShope[i] = check
                    like.innerText = +like.innerText + 1;
                    localStorage.setItem('likeSole',like.innerText)
                    likeIcon.style.backgroundColor = 'red';
                    localStorage.setItem('likeShope',localShope)
                }else{
                    check = true;
                    localShope[i] = check
                    like.innerText = +like.innerText - 1;
                    localStorage.setItem('likeSole',like.innerText)
                    likeIcon.style.backgroundColor = '#59AB6E';
                    localStorage.setItem('likeShope',localShope)
                }
            })
            backHover.append(likeIcon);
            let href = document.createElement('a');
            href.href = '.single.html';
            let faEye = document.createElement('i');
            faEye.className = 'fa-regular fa-eye' ;
            href.append(faEye);
            backHover.append(href);
            let shopeIcon = document.createElement('i');
            shopeIcon.className = 'fa-solid fa-cart-shopping';
            shopeIcon.addEventListener('click',()=>{
                checkProduct.style.display = 'flex'
            })
            backHover.append(shopeIcon);
            photoShope.append(backHover);
            productShope.append(photoShope);
            //--
            let productInfo = document.createElement('div');
            productInfo.className = 'productInfo';
            let h3 = document.createElement('h3');
            h3.innerText = el.name;
            productInfo.append(h3);
            let h2 = document.createElement('h2');
            h2.innerText = el.size;
            productInfo.append(h2);
            let starArr = document.createElement('p');
            let c = []
            star = localStorage.getItem('star').split(',')
            for(let f = 1;f < 6;f++){
                let icon = document.createElement('i')
                icon.className = 'fa-solid fa-star'
                c.push(icon)
                icon.addEventListener('click',()=>{
                    star[i] = f
                    c.forEach(el => el.style.color = 'black')
                    c.forEach((el,g) => {
                        if(g<f){
                            el.style.color = 'red'
                        }
                    })
                   localStorage.setItem('star',star)
                })
                starArr.append(icon)
            }
            c.forEach((el,ic) => {
               if(ic < star[i]) el.style.color = 'red'
            })
            productInfo.append(starArr);
            let dol = document.createElement('p');
            dol.innerText = el.value;
            productInfo.append(dol);
            productShope.append(productInfo);
            block.append(productShope);
        }
    }
    )
}
