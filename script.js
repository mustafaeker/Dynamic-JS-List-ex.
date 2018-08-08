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


var items = ['work to do 1', 'work to do 2', 'work to do 3', 'work to do 4'];

/******* DEFINE DEFAULT DAILY TODOS  *********
var myspandate = document.querySelector('#date');

    var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    var myspantext = date.getDate();
var myspandate = date.getDate();*/


/******* CRETAE A TODO FOR LIST  **********/

function CreateItem(item) {
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    var span = document.createElement('span');
    var spantext = document.createTextNode('\u00D7');

    li.className = 'list-group-item';
    li.appendChild(t); /****** "li" is a parent element of this "t" *********/
    list.appendChild(li); /*** list "<ul>" is a parent element of this "li" */
    span.classList.add('close');
    span.appendChild(spantext);
    li.appendChild(span);

    span.onclick = function () {
        var li = this.parentElement;
        li.style.display = 'none';
        li.classList.remove('checked');
    }
};


var list = document.querySelector('#mylist');

items.forEach(function (item) {

    CreateItem(item);
});

document.querySelector('#add').onclick = function () {

    var item = document.querySelector('#txtItem').value;


    if ((item === '') || (item == 0)) {
        alert('Nothing to Do !');
        return;
    }
    CreateItem(item);
};







/******* TODO'S STATE "COMPLETED" **********/

list.addEventListener('click', function (item) {

    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked');
        ////////// DELETE BUTTON APPEAR/DISAPPEAR ///////
        var checkList = document.querySelectorAll('.checked');
        console.log(checkList.length)

        if (checkList.length > 0) {
            document.querySelector('#deleteAll').classList.remove('d-none');
        } else {
            document.querySelector('#deleteAll').classList.add('d-none');
        }
    }

});



