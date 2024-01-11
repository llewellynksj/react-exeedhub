import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../services/axiosDefaults";
import { useState } from "react";
import SchoolCard from "./SchoolCard";

const SchoolDetail = () => {
  const { id } = useParams();
  const [school, setSchool] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: school }] = await Promise.all([
          axiosReq.get(`/schools/${id}`),
        ]);
        setSchool({ results: [school] });
        console.log(school);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <>
      <Container>
        <SchoolCard {...school.results[0]} />
      </Container>
    </>
  );
};

export default SchoolDetail;
