import React, { useState, useEffect } from "react";
import { axiosReq } from "../../services/axiosDefaults";
import { Container } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const { data } = await axiosReq.get(`/schools/${id}/reviews/`);
        setReviewsData(data.results);
      } catch (error) {
        setError("Error fetching reviews data");
      } finally {
        setLoading(false);
      }
    };

    fetchReviewsData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Container className="overflow-hidden p-4">
        <h2>Reviews</h2>
        <ul>
          {Array.isArray(reviewsData) && reviewsData.length > 0 ? (
            reviewsData.map((review) => (
              <>
                <ReviewCard key={review.id} {...review} />
              </>
            ))
          ) : (
            <p>No reviews found</p>
          )}
        </ul>
      </Container>
    </>
  );
};

export default Reviews;
