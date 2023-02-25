import React, { Component } from 'react';
import { scrollToTop } from '../../utils';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener('scroll', function () {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 600) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div id="scroll-to-top" className="init">
        {is_visible && (
          <div onClick={() => scrollToTop()}>
            <i className=""></i>
          </div>
        )}
      </div>
    );
  }
}
