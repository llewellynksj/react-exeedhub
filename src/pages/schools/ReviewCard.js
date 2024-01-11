import { Card } from "react-bootstrap";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MdOutlineStar } from "react-icons/md";

const ReviewCard = (props) => {
  const {
    created_on,
    username,
    title,
    review,
    teaching_quality,
    admin_service,
    child_happiness,
    atmosphere,
    // overall_rating,
  } = props;

  //   const currentUser = useCurrentUser();

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<MdOutlineStar key={i} />);
    }
    return stars;
  };

  return (
    <>
      <Card>
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Body>
          <Card.Title>By: {username}</Card.Title>
          <Card.Text>{review}</Card.Text>
          <Card.Text className="uppercase">Ratings</Card.Text>
          <Card.Text>
            Teaching Quality: {renderStars(teaching_quality)}
          </Card.Text>
          <Card.Text>Admin Service: {renderStars(admin_service)}</Card.Text>
          <Card.Text>Child Happiness: {renderStars(child_happiness)}</Card.Text>
          <Card.Text>Atmosphere: {renderStars(atmosphere)}</Card.Text>
          <Card.Text>Overall Rating: </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{created_on}</Card.Footer>
      </Card>
    </>
  );
};

export default ReviewCard;
