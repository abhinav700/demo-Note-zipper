import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";
import notes from "../../data/notes";
let noteItems = notes.map((note) => (
  <Accordion>
  <Card style={{ margin: 10 }} key={note._id}>
    <Card.Header style={{ display: "flex" }}>
      <span
        // onClick={() => ModelShow(note)}
        style={{
          color: "black",
          textDecoration: "none",
          flex: 1,
          cursor: "pointer",
          alignSelf: "center",
          fontSize: 18,
        }}
      >
        <Accordion.Toggle
          as={Card.Text}
          variant="link"
          eventKey="0"
        >
          {note.title}
        </Accordion.Toggle>
      </span>

      <div>
        <Button href={`/note/${note._id}`}>Edit</Button>
        <Button
          variant="danger"
          className="mx-2"
         
        >
          Delete
        </Button>
      </div>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <h4>
          <Badge variant="success">
            Category - {note.category}
          </Badge>
        </h4>
        <blockquote className="blockquote mb-0">
        {note.content}
          <footer className="blockquote-footer">
            Created on{" "}
            <cite title="Source Title">
              {note.createdAt.substring(0, 10)}
            </cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
));
const MyNotes = () => {
  return (
    <MainScreen title="welcome to mynotes">
      <Link to="/createnote">
        <Button classaName="my-3" size="sm">
          Create Note
        </Button>
        {noteItems}
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
