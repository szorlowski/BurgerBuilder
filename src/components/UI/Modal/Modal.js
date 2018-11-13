import React, {Component} from 'react';
import classes from './Modal.css'
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

  shouldComponentUpdate(nextProps, nexState){
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        {this.props.show ? <div
          className={classes.Modal}
          style={{
            transformed: this.props.show ? 'translateY(0)' : "translateY(-100vh)",
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div> : null}
      </React.Fragment>
    )
  }
}

export default Modal;