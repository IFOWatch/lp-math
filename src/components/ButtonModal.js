import React from "react"
import { Modal, Button } from 'react-bootstrap'

// adapted from https://react-bootstrap.github.io/components/modal/

class ButtonModal extends React.Component {
    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            show: false
        }
    }

    handleClose () {
        this.setState({show: false});
    }

    handleShow () {
        this.setState({show: true});
    }
  
    render() {
        return (
            <>
            <Button variant={this.props.variant || "outline-primary"} onClick={this.handleShow} size="sm">
              {this.props.buttonValue}
            </Button>
      
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.modalHeader}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{this.props.modalBody}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Cool!
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    }
  }

  export default ButtonModal;