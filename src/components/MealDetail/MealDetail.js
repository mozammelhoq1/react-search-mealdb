import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MealDetail = () => {
  const { mealDetails } = useParams();
  const [meal, setMeal] = useState({});
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetails}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [mealDetails]);
  return (
    <Col lg={8} className="mx-auto">
      <Card className="align-items-center pb-2 border-0 shadow rounded-3">
        <Card.Img variant="top" src={meal.strMealThumb} />
        <Card.Body>
          <Card.Title>{meal.strMeal}</Card.Title>
          <Card.Text>
            <b>{meal.strArea} food</b>
          </Card.Text>
          <Card.Text>
            <i>Category : {meal.strCategory}</i>
          </Card.Text>
          <Card.Text>{meal.strInstructions}</Card.Text>
        </Card.Body>
        <Button className="w-25 " variant="outline-warning" size="sm">
          <Link className=" text-decoration-none   text-dark" to="/home">
            Confirmed
          </Link>
          <FontAwesomeIcon className="ms-2   text-dark" icon={faCircleCheck} />
        </Button>
      </Card>
    </Col>
  );
};

export default MealDetail;
