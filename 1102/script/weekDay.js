function getWeekDateSwitch( w ){
    let date; 
    switch(w){
        case 0: date='일'; break; 
        case 1: date='월'; break; 
        case 2: date='화'; break; 
        case 3: date='수'; break; 
        case 4: date='목'; break; 
        case 5: date='금'; break; 
        case 6: date='토'; break; 
        default : date='요일은 0~6사이의 숫자만 가능'
    }

    return date;
}