
let n = 1;
初始化(n);
setInterval(()=>{//箭头函数中是没有function()的，
    $(`.img > img:nth-child(${x(n)}`).removeClass('current').addClass('active')
    $(`.img > img:nth-child(${x(n+1)}`).addClass('current').removeClass('enter');
    $(`.img > img:nth-child(${x(n)}`).one('transitionend',function(x){
        $(x.currentTarget).addClass('enter').removeClass('active')
    })
    n++;
},1000)
function x(y){
    if(y>3){
        y = y % 3;
        if(y ===0){
            y = 3;
        }
    }
    return y
}
function 初始化(){
    $(`.img > img:nth-child(${(n)})`).addClass('current').siblings().addClass('enter');
}




















































/*初始化()
let n=1;
setInterval(()=>{ 
    $(`.img > img:nth-child(${y(n)})`).addClass('active').removeClass('current')
    
    $(`.img > img:nth-child(${y(n+1)}`).addClass('current').removeClass('enter')
    $(`.img > img:nth-child(${y(n)})`).one('transitionend',function(x){
        $(x.currentTarget).addClass('enter').removeClass('active')
    })
    n++;
},2000)
function y(x){
   if(x>3){
       x=x % 3;
       if(x===0){
           x=3
       }
   }
   return x
}
function 初始化(){
    $('.img > img:nth-child(1)').addClass('current');
    $('.img > img:nth-child(2)').addClass('enter');
    $('.img > img:nth-child(3)').addClass('enter');
}*/