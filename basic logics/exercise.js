"use strict";

const obj = {
  title: "Hello World!",
};

/*
function isEmptyObj(){
    if(obj.title){
        return true
    }else{
        return false
    }
}
*/

function isEmptyObj = () => obj.title ? true : false
isEmptyObj();
