import React, { Component } from 'react';

export default class CartFooter extends Component {

  render() {
	if (this.props.count > 0) {
	  return (
	    <div>
		  <div className="cart-total">
			<span className="pull-left">總計</span>
			<span>${this.props.total}</span>
		  </div>
		  <div className="cart-checkout">
		    <a href="#">結帳</a>
		  </div>
		</div>
	  );
    } else {
	  return <div></div>;
	}	
  }
}