import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export default class Modal extends Component {
  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>,
      document.getElementById('modalRoot'),
    );
  }
}
