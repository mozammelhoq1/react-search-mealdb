import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const searchFood = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <Container>
        <Form className="d-flex mb-5 justify-content-center">
          <FormControl
            type="search"
            placeholder="Search your favorite meal"
            className="me-2 w-50 border border-warning"
            onChange={searchFood}
            aria-label="Search"
          />
          <Button
            variant="warning"
            className="fw-bold d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon icon={faSearch} className="me-3"></FontAwesomeIcon>{" "}
            Search
          </Button>
        </Form>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Restaurant;
