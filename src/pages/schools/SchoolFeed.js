import React, { useState, useEffect } from "react";
import { axiosReq } from "../../services/axiosDefaults";
import { Container } from "react-bootstrap";
import SchoolCard from "./SchoolCard";
import { useParams } from "react-router-dom";

const SchoolList = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const { data } = await axiosReq.get("/schools/");
        setSchoolData(data.results);
      } catch (error) {
        setError("Error fetching school data");
      } finally {
        setLoading(false);
      }
    };

    fetchSchoolData();
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
        <h2>School List</h2>
        <ul>
          {Array.isArray(schoolData) && schoolData.length > 0 ? (
            schoolData.map((school) => (
              <>
                <SchoolCard key={school.id} {...school} />
              </>
            ))
          ) : (
            <p>No schools found</p>
          )}
        </ul>
      </Container>
    </>
  );
};

export default SchoolList;
