import React from "react";

class CartItem extends React.Component {
render() {
    const { title, price } = this.props;
    return (
<div>
    <h4 data-testid="shopping-cart-product-name">{ title }</h4>
    <h3 >{ price }</h3>
    <h6 data-testid="shopping-cart-product-quantity">Quantidade</h6>
</div>
    );
}
}

export default CartItem;