import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../services/axiosDefaults";
import { useState } from "react";
import SchoolCard from "./SchoolCard";
import AddReviewForm from "./AddReviewForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const SchoolDetail = () => {
  const { id } = useParams();
  const [school, setSchool] = useState({ results: [] });
  // const [reviews, setReviews] = useState({ results: [] });

  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: school }] = await Promise.all([
          axiosReq.get(`/schools/${id}`),
          // axiosReq.get(`/schools/${id}/reviews/`),
        ]);
        setSchool({ results: [school] });
        // setReviews(reviews);
        console.log(school);
        // console.log(reviews);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <>
      <Container className="overflow-hidden p-4">
        <SchoolCard {...school.results[0]} />

        {currentUser && <AddReviewForm {...school.results[0]} />}
      </Container>
    </>
  );
};

export default SchoolDetail;
