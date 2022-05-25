import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DiscountIcon from '@mui/icons-material/Discount';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
export const policies = [
	{
		icon: <LocalShippingIcon></LocalShippingIcon>,
		title: 'Free Delivery',
		subtitle: 'Free Shipping On All Order',
	},
	{
		icon: <CurrencyExchangeIcon></CurrencyExchangeIcon>,
		title: 'Money Return',
		subtitle: 'Back Guarantee in 7 days',
	},
	{
		icon: <DiscountIcon></DiscountIcon>,
		title: 'Member Discount',
		subtitle: 'On every order over $130.00',
	},
	{
		icon: <AssignmentReturnIcon></AssignmentReturnIcon>,
		title: 'Return Policy',
		subtitle: ' Support 24 hours a day',
	},
];
