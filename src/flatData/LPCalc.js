import React from "react"
import { Alert } from 'react-bootstrap'

const LPCalc = <div>
    The formula for calculating the total value of an LP is:
    <br />
    <br />
    <Alert variant="dark">
        <code>
            total_lp_value = lp_half_0 + lp_half_1
        </code>
    </Alert>
    Since each half of the LP is always equal (i.e. lp_half_0 will always be equal to lp_half_1),
    we can simplify the formula to:
    <br />
    <br />
    <Alert variant="dark">
        <code>
        total_lp_value = 2 * lp_half_0
        // OR
        total_lp_value = 2 * lp_half_1
        </code>
    </Alert>
    To calculate the value of either half of the LP, we need to determine the reserves of the token in
    the LP, as well as the total supply of LP tokens:
    <br />
    <br />
    <Alert variant="dark">
        <code>
            token0_per_lp = token0_reserve / lp_total_reserve
            token_lp_half = token0_per_lp * token0_value
        </code>
    </Alert>
</div>

export default LPCalc;