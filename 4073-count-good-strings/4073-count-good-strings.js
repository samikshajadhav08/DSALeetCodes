/**
 * @param {number} n
 * @return {number}
 */
var countGoodStrings = function(n) {
    const MOD = 1000000007n;

    // Returns [F(n), F(n + 1)]
    function fib(n) {
        if (n === 0n) {
            return [0n, 1n];
        }

        const [a, b] = fib(n / 2n);

        const c = (a * ((2n * b - a + MOD) % MOD)) % MOD;
        const d = (a * a + b * b) % MOD;

        if (n % 2n === 0n) {
            return [c, d];
        }

        return [d, (c + d) % MOD];
    }

    const [fn] = fib(BigInt(n));

    return Number((2n * fn) % MOD);
};