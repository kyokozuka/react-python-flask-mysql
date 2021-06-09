import Container from 'react-bootstrap/Container';
import Header from '../../organisms/Headers';

const HomeTemplate = (props) => {
  return (
    <Container>
        <Header />
        {props.children}
    </Container>
  )
}

export default HomeTemplate;