import React from 'react';
import { Link } from 'react-router-dom';
const CheckoutLink = ({ children }) => {
	return <Link to="/checkout">{children}</Link>;
};

export default CheckoutLink;
