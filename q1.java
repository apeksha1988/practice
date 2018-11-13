/*You are given 3 coins of value 1, 3 and 5.
 You are also given a total which you have to arrive at. 
 Find the minimum number of coins to arrive at it.*/
 
 
 
 class Solution {
    public int coinChange(int[] coins, int amount) {
        if (amount == 0) return 0;
        if (amount <  0) return -1;

        int min = -1;
        for (int coin : coins) {
            int currentMin = coinChange(coins, amount - coin);

            // if amount is less than coin value
            if (currentMin >= 0) {
                min = min < 0 ? currentMin : Math.min(currentMin, min);
            }
        }

        return min < 0 ? -1 : min + 1;
    }
}