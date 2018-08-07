/******simple item default item adding method*******
***********(not in use just for example)************
 var items = ['work todo 1','work todo 2','work todo 3','work todo 4'];

var list = document.querySelector('#old-list');
var html=' ';

items.forEach(function(item){
    
    html+='<li class="list-group-item">'+item+'</li>';
     
});

list.innerHTML=html;

**************************************************/

 var items = ['work todo 1','work todo 2','work todo 3','work todo 4'];

var list = document.querySelector('#old-list');


items.forEach(function(item){
    
    var li =document.createElement('li');
    var t =document.createTextNode(item);
    var span = document.createElement('span');
    var spantext = document.createTextNode ('\u00D7');
    
    li.className='list-group-item';
    li.appendChild(t); /****** "li" is a parent element of this "t" *********/
    list.appendChild(li); /*** list "<ul>" is a parent element of this "li" */
    span.classList.add('close');
    span.appendChild(spantext);
    li.appendChild(span);
    
});


list.addEventListener('click',function(item){
    
    if(item.target.tagName='li'){
        item.target.classList.toggle('checked');
        
    }
    
})









