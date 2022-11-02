function  getCurrentTime(t){

    // let m; 
    // if( t.getMinutes() <= 9 ){
    //      m = '0'+ t.getMinutes();
    // }else{
    //      m = t.getMinutes();
    // }
    
    // let s; 
    // if( t.getSeconds() <= 9 ){
    //      s = '0'+ t.getSeconds();
    // }else{
    //      s = t.getSeconds();
    // }

    // let h; 
    // if( t.getHours() <= 9 ){
    //      h = '0'+ t.getHours();
    // }else{
    //      h = t.getHours();
    // }

    let h = getPad( t.getHours());
    let m = getPad( t.getMinutes());
    let s = getPad( t.getSeconds());
    let currentTime = `${ h } : ${ m } : ${ s }`;
    return currentTime; 
}

function  getPad( num ){
    let return_num; 

    if( num<=9 ){
        return_num = '0' + num; 
        // String  : padStart, padEnd  : 0 보정
    }else{
        return_num = num; 
    }
    
    return return_num;
}