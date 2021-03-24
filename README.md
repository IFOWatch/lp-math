# BSC PancakeSwap LP Tools

A simple react app that will help with calculating the value of LP tokens

## Why?

Tracking the value of LP's seems like it is unfortunately an as-of-yet unsolved problem. Calculating LP value
is one of the most frequently asked questions in any discord or telegram the author has ever seen, and it's
frankly not that hard to do... so I decided to automate it.

## How?

All data comes directly from the PancakeSwap LPs themselves (except for BNB price, which comes from binance).
The formula for calculating the value of an LP looks like:

```
token_0_lp_half = token_0_price * token_0_per_lp
token_1_lp_half = token_1_price * token_1_per_lp
lp_total_value = token_0_lp_half + token_1_lp_half
```

In this formula there are a few knowns and unknowns; for example, token 1 is BNB, so we can get the
price from external API's like https://api.binance.com/api/v3/avgPrice?symbol=BNBBUSD . We can also get the
token per LP values from PancakeSwap's LP contract directly with the following formulas:

```
token_0_per_lp = token_0_lp_reserve / total_supply
token_1_per_lp = token_1_lp_reserve / total_supply
```

Finally, since we know that each half of the LP will have the same value
(i.e. `token_0_lp_half` will always equal `token_1_lp_half`), we can
calculate the value of token_0_price with the following formula:

```
token_0_lp_half = token_1_lp_half
token_0_price = token_0_lp_half / token_0_per_lp
```

## Why are you shilling $BOG?

**Disclaimer: this is not financial advice, DYOR.**

Frankly, I don't have the time or expertise to make a solidity token (yet?), but I'd
like to benefit a little bit from the hours I've put into making
this site. Asking for donations doesn't really work in my experience, so since I'm long (and super bullish) on 
[bogtools.io](https://bogtools.io/), the more of you degens that join me in hodling $BOG,
the better off I'll do, too.