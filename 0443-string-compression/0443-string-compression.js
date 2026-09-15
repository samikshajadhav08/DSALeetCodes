/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let read=0;
    let write=0;
    while(read < chars.length){
        let currChar=chars[read];
        let count=0;
        while(read < chars.length && chars[read] === currChar){
            count++;
            read++;
        }
        chars[write]=currChar;
        write++;
        if(count > 1){
            let countStr=String(count);
            for(let i = 0;i < countStr.length; i++){
            chars[write]=countStr[i];
            write++;
            }
        }
    }
    return write;
};