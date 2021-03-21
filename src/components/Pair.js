import React from "react"
import { Button, Row, Col } from 'react-bootstrap'

export default function Pair() {
    return (
        <div>
            <Row>
                <Col>
                    XXX-YYY
                </Col>
                <Col>
                    <Row>
                        1 XXX = $123
                    </Row>
                    <Row>
                        1 YYY = $123
                    </Row>
                </Col>
                <Col>
                    <Row>
                        1 XXX-YYY =
                    </Row>
                    <Row>
                        0.2XXX + 0.8YYY
                    </Row>
                </Col>
                <Col>
                    1 XXX-YYY = $123
                </Col>
                <Col>
                    <div className="btn-group">
                        <Button variant="primary" onClick={() => console.log("edit")}>Edit</Button>
                        <Button variant="dark" onClick={() => console.log("remove")}>Remove</Button>
                    </div>
                </Col>
            </Row>
            <hr></hr>
        </div>
    );
}