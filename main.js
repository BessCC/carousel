let $img = $('.img>img')
let $buttons = $('#button > button');
let current=0;
makeFakePicture();
$('.img').css({transform:'translateX(-300px)'});
click();
let time = setInterval(function(){
   arrivePicture(current+1)
},2000)
$('.window').on('mouseenter',function(){
    window.clearInterval(time);
}).on('mouseleave',function(){
    time = setInterval(function(){
        arrivePicture(current+1)
     },2000)  
})
function click(){
    $('#button').on('click','button',function(e){
        let  button = $(e.currentTarget);
        let  index = button.index();
        arrivePicture(index);
    })
}
function arrivePicture(index){
    if(index > $buttons.length-1){
        index = 0;
    }else if(index < 0){
        index = $buttons.length - 1;
    }
    if(current == $buttons.length-1 && index == 0){
        $('.img').css({transform:`translateX(${-($buttons.length+1)*300}px)`}).one('transitionend',function(){
            $('.img').hide().offset();
            $('.img').css({transform:`translateX(${-(index+1)*300}px)`}).show();
        })   
       }else if(current == 0 && index ==$buttons.length-1 ){
        $('.img').css({transform:'translateX(0)'}).one('transitionend',function(){
            $('.img').hide().offset();
            $('.img').css({transform:`translateX(${-(index+1)*300}px)`}).show();
        })     
       }else{
        $('.img').css({transform:`translateX(${-(index+1)*300}px)`})
       }
       current = index    
}
/*    $buttons.eq(0).on('click',function(){
        if(current==2){
            $('.img').css({transform:'translateX(-1200px)'}).one('transitionend',function(){
                $('.img').hide().offset();
                $('.img').css({transform:'translateX(-300px)'}).show();
            })
        }
        current=0;
    })
    $buttons.eq(1).on('click',function(){
        current=1;
        $('.img').css({transform:'translateX(-600px)'})
    })
    $buttons.eq(2).on('click',function(){
        if(current==0){
            $('.img').css({transform:'translateX(0)'}).one('transitionend',function(){
                $('.img').hide().offset();
                $('.img').css({transform:'translateX(-900px)'}).show();
            })
        }else{
            $('.img').css({transform:'translateX(-900px)'})
            current=2;
        }
        
    })
*/
function makeFakePicture(){
    let firstClone = $img.eq(0).clone(true);
    let lastClone = $img.eq($img.length-1).clone(true);
    $('.img').append(firstClone);
    $('.img').prepend(lastClone);
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