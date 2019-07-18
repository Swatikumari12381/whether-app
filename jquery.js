console.log("file loaded");
var header=$("#heading");
console.log(header.text);
header.css('color','red');
header.css('background','black');
var list=$(".listitem");
console.log(list.text);
list.css('color','white');
list.css('background','blue')
var button=$("#superbutton");
button.on('click',function(){
    console.log("clicked");
});
var input=$("#superinput");
var output=$("#output");
console.log(output);
input.on('keyup',function(){
    var value=$(this).val();
    output.html(value);
});
var text=$("#text");
var oupt=$("otput");
console.log(oupt);
input.on('keyup',function(){
    var value=$(this).val();
    oupt.html(value);
});
var button=$("#supbutton");
button.on('click',function(){
    console.log("clicked");
});