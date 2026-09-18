/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    const n=s.length;

    const first=new Array(26).fill(n);
    const last= new Array(26).fill(-1);

    for(let i=0;i<n;i++){
        const ch=s.charCodeAt(i)-97;

        if(first[ch]===n){
            first[ch]=i;
        }
        last[ch]=i;
    }
    const intervals=[];
    for(let ch=0;ch<26;ch++){
        if(last[ch]===-1){
            continue;
        }
        const start=first[ch];
        let end=last[ch];
        let valid=true;

        for(let i=start;i<=end;i++){
            const curr=s.charCodeAt(i)-97;
            if(first[curr]<start){
                valid=false;
                break;
            }
            end=Math.max(end,last[curr]);
        }
        if(valid){
            intervals.push([start,end]);

        }
    }
    intervals.sort((a,b)=>{
        if(a[1]!==b[1]){
            return a[1]-b[1];
        }
        return (a[1]-a[0]) -(b[1]-b[0]);
    });
    const ans=[];
    let prevEnd=-1;
    for(const [start,end] of intervals){
        if(start>prevEnd){
            ans.push(s.substring(start,end+1));
            prevEnd=end;
        }
    }
    return ans;
};