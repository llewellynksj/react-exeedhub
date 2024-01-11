import { Container } from "react-bootstrap";

const AddReviewForm = (props) => {
  const { school_name } = props;

  return (
    <Container className="overflow-hidden">
      <h2>Add Review - {school_name}</h2>
      <div />
    </Container>
  );
};

export default AddReviewForm;
