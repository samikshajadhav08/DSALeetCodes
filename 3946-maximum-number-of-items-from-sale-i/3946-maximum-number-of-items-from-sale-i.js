/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
     const factors = items.map(([factor]) => factor);
    const prices = items.map(([, price]) => price);
    const top = Math.max(...factors);
    const have = Array(top + 1).fill(0), gains = Array(top + 1).fill(0);  
    for (const factor of factors) have[factor]++;
    for (let factor = 1; factor <= top; factor++)
        for (let multiple = factor; multiple <= top; multiple += factor)  
            gains[factor] += have[multiple];

    const cheapest = Math.min(...prices);
    const best = Array.from({length: budget + 1}, (_, money) => Math.floor(money / cheapest));  
    for (const [factor, price] of items) {
        const gain = gains[factor];
        if (gain > Math.floor(price / cheapest))  
            for (let money = budget; money >= price; money--)  
                best[money] = Math.max(best[money], best[money - price] + gain);
    }
    return best[budget];
};