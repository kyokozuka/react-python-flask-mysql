import Nav from 'react-bootstrap/Nav';
// import './header.css';

const Header = () => {
	return (
		<Nav className='header' variant="pills" defaultActiveKey="/">
			<Nav.Item>
				<Nav.Link href="/">home</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Header;