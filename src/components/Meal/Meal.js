import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Meal.css";
import { useNavigate } from "react-router-dom";

const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;
  const navigate = useNavigate();
  const seeDetails = () => {
    const dynamicPath = `/meal/${idMeal}`;
    navigate(dynamicPath);
  };
  return (
    <>
      <Col>
        <Card className="align-items-center pb-2 border-0 shadow rounded-3">
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>{strInstructions.slice(0, 100)}</Card.Text>
          </Card.Body>
          <Button
            className="w-50"
            variant="outline-warning text-dark"
            size="sm"
            onClick={seeDetails}
          >
            Add This Food
            <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Meal;
