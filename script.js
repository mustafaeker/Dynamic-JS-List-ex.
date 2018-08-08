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



/***************** DAILY DYNAMIC TO DO LIST ************************************/

/******* DEFINE DEFAULT DAILY TODOS  **********/ 

var items = ['work todo 1', 'work todo 2', 'work todo 3', 'work todo 4'];

/******* DEFINE DEFAULT DAILY TODOS  *********
var myspandate = document.querySelector('#date');

    var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    var myspantext = date.getDate();
var myspandate = date.getDate();*/ 


/******* CRETAE A TODO FOR LIST  **********/ 

var list = document.querySelector('#mylist');

items.forEach(function (item){
    
    CretaeItem(item);
});



document.querySelector('#add').onclick=function(){
    
  var item = document.querySelector('#txtItem').value;
   
    
    if((item==='') || (item==0)){
     alert('Nothing to Do !');
        return;
    }
    CretaeItem(item);
};

function CretaeItem(item){
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    var span = document.createElement('span');
    var spantext = document.createTextNode ('\u00D7');
    
    li.className='list-group-item';
    li.appendChild(t); /****** "li" is a parent element of this "t" *********/
    list.appendChild(li); /*** list "<ul>" is a parent element of this "li" */
    span.classList.add('close');
    span.appendChild(spantext);
    li.appendChild(span);
      
    span.onclick = function () {
        var li = this.parentElement;
        li.style.display='none';  
        li.classList.remove('checked');   
    }
};



/******* MAKES A TODO'S STATE "COMPLETED" **********/ 

list.addEventListener('click',function(item){
    
    if(item.target.tagName=='LI'){
        item.target.classList.toggle('checked');
        ToggleDeleteButton();
        
    }
    
});


document.querySelector('#deleteAll').onclick=function(){
  
    var elements = document.querySelector('.checked');
    
    elements.forEach(function(item){
        item.style.display='none'
    })
};



function ToggleDeleteButton(){
  var checklist = document.querySelectorAll('.list-group-item.checked');
    
    if(checklist.length>0){
        document.querySelector('#deleteAll').classList.remove('.d-none');
        
    }else{
         document.querySelector('#deleteAll').classList.add('.d-none');
    }
};







