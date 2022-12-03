import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import { createPost } from '../global/actions/action-creator'

const PostForm = ({ user, dispatch }) => {
  const author = user.username ? user.username : "unknown";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick = () => {
    dispatch(createPost(title, content, author))
    setTitle('')
    setContent('')
  }

  return (
    <Container className="border border-info rounded m-1">
      <header className="mt-3">
        <h1 className="font-weight-bold text-info text-uppercase mb-0 h4">
          add post
        </h1>
        <p>
          author: <b>{author}</b>
        </p>
      </header>
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Add post contrent</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button variant="info" type="button" onClick={handleClick}>
          ADD
        </Button>
      </Form>
    </Container>
  );
};

export default PostForm