import React, { useState, useEffect } from "react";
import { axiosReq } from "../../services/axiosDefaults";
import { Container } from "react-bootstrap";
import SchoolCard from "./SchoolCard";
import { useLocation } from "react-router-dom";

const SchoolFeed = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const { data } = await axiosReq.get("/schools/");
        setSchoolData(data);
      } catch (error) {
        setError("Error fetching school data");
      } finally {
        setLoading(false);
      }
    };

    fetchSchoolData();
  }, [pathname]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Container className="overflow-hidden p-4">
        {schoolData.results.length ? (
          schoolData.results.map((school) => (
            <SchoolCard key={school.id} {...school} />
          ))
        ) : (
          <p>No schools found</p>
        )}
      </Container>
    </>
  );
};

export default SchoolFeed;
