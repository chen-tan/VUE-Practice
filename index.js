alert('欢迎来到阿坛的界面');
alert('你点击了红色方块');
var div=document.getElementsByTagName('div');
div.onclick=function(e){
    var tar=e.target;
    tar.className='change';
}