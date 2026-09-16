/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 const MOD=1000000007n;
    function modPow(base, exp){
        let result=1n;
        while(exp>0n){
            if(exp & 1n){
                result=result*base%MOD;
            }
            base=base*base%MOD;
            exp>>=1n;
        }
        return result;
    }
var numberOfSets = function(n, k) {
    const N=BigInt(n+k-1);
    let R=BigInt(2*k);
    if(R>N-R){
        R=N-R;
    }
    let num=1n;
    let deno=1n;

    for(let i=1n;i<=R;i++){
        num=num *(N-R+i)%MOD;
        deno=deno * i %MOD;
    }
    const inDeno=modPow(deno,MOD-2n);
    return Number(num*inDeno %MOD);
};