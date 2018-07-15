$(window).ready(function(){
    console.log('Helloy')
    $('.close_info').click(function(event){
        event.preventDefault();
        $('.tech_info').slideUp(500);
    })
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'catalog.php', true);
    xhr.send();
   
    xhr.onreadystatechange = function(){
       if(xhr.readyState != 4 || xhr.status !=200){
           console.log('Error');
           return;
       } else{
           console.log(JSON.parse(xhr.responseText))
           JSON.parse(xhr.responseText).forEach(function(values) {
            if(values['general'] =='true'){
                $('.general_news').append('<div class="general_img"><img src="'+values['img']+'"></div>\n<div class="general_description"><a class="artical" href="'+values['src']+'">'+values['alt']+'</a><p>'+values['data']+'</p></div>')
                }else{
                    $('.other_news').append('<div class="news"><img src="'+values['img']+'"><a class="artical" href="'+values['src']+'">'+values['alt']+'</a><p>'+values['data']+'</p></div>')
                }
            })
        }    
        
        }
})