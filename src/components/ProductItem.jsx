import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product: { price, images, title } }) => {
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		setCart([]);
	};

	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>{price}</p>
					<p>{title}</p>
				</div>
				<figure>
					<img src={addToCart} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
