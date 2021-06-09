import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HomeTemplate from '../../templates/HomeTemplate';
import { useHome } from './use.js';
// import './home.css';

const Home = () => {
	const { todo, todos, handleChange, handleDelete, handleAdd } = useHome();

	return (
			<HomeTemplate>
				<Form>
					<Form.Group controlId="title">
						<Form.Label>Title: </Form.Label>
						<Form.Control type="text" placeholder="Enter title" value={todo.title} onChange={handleChange('title')} />
					</Form.Group>
					<Form.Group controlId="content">
						<Form.Label>Content: </Form.Label>
						<Form.Control type="textarea" placeholder="Enter Content" value={todo.content} onChange={handleChange('content')}/>
					</Form.Group>
					<Button variant="primary" type="button" onClick={handleAdd}>
						Add
					</Button>
				</Form>
				<br />
				{todos.map(todo => (
					<Card key={todo.id}>
						<Card.Header>
							{todo.title}
							<Button className="delete" variant="outline-danger" value={todo.id} onClick={handleDelete}>delete</Button>
						</Card.Header>
						<Card.Body>{todo.content}</Card.Body>
					</Card>
				))}
			</HomeTemplate>	
	)
}

export default Home;