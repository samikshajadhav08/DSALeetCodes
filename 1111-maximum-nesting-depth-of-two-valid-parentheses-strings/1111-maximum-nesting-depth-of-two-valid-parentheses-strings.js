/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    const n=seq.length;
    let maxDepth=0;
    let depth=0;
    for(const c of seq){
        if(c===')'){
            depth--;
            continue;
        }
        depth++;
        if(depth >maxDepth) maxDepth=depth;
    }
    const r=new Array(n).fill(0);
    const half=maxDepth>>1;

    depth=0;
    for(let i=0;i<n;i++){
        const c=seq[i];
        if(c===')'){
        if(depth>0){
            depth--;
            continue;
        }
        r[i]=1;
        continue;
    }
    if(depth>=half){
        r[i]=1;
        continue;
    }
    depth++;
}
   return r;
};