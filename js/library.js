'use strict';

var $ = MONAD();

// DOM Manipulation 
$.fn('html',function(value) {       
    return value.innerHTML;
});

$.fn('text',function(value) {    
    return value.innerText;
});

$.fn('hide',function(value) {
    value.style.display = 'none';
    return value;
});

$.fn('addClass',function(value){
    var args = [];    
    for(var i = 1, len = arguments.length ; i < len; i++ ) {            
        args.push(arguments[i]);
    }                       
    value.classList.add.apply(value.classList,args);
    return value;
});

$.fn('removeClass',function(value){
    var args = [];    
    for(var i = 1, len = arguments.length ; i < len; i++ ) {            
        args.push(arguments[i]);
    }                       
    value.classList.remove.apply(value.classList,args);
    return value;
});

$.fn('hide',function(value){
    value.style.display = 'none';
    return value;
});

$.fn('show',function(value){
    value.style.display = 'block';
    return value;
});

$.fn('log',function(value){
    return value;
});
