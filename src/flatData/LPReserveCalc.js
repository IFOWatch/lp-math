import React from "react"
import { Alert } from 'react-bootstrap'

const LPReserveCalc = <div>
    This information is determined directly from the PancakeSwap LP Contract:
    <br />
    <br />
    <Alert variant="dark">
        <code>
            token0_per_lp = token0_reserve / lp_total_reserve
            token1_per_lp = token1_reserve / lp_total_reserve
        </code>
    </Alert>
</div>

export default LPReserveCalc;