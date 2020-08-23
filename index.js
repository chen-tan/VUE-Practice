alert('欢迎来到阿坛的界面');

var div=document.getElementsByTagName('div')[0];
console.log(div);
div.onclick=function(e){
    console.log('xxx');
    var tar=e.target;
    tar.className='change';
}