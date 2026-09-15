/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n=s.length;
    let lastEnd=0;
    let count=0;

    for(let i=0;i<2*n;i++){
        let left=Math.floor(i/2);
        let right=left+i%2;
        while(left>=0 && right < n && s[left] === s[right]){
            if(right-left+1 >= k){
                const end=right+1;
                if(left >=lastEnd){
                    lastEnd=end;
                    count++;
                } else{
                    lastEnd=Math.min(lastEnd,end);
                }
                break;
            }
            left--;
            right++;
        }
    }
    return count;
};