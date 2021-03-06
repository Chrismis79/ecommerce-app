import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name} />
            <ItemDetailsContainer>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} X ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;