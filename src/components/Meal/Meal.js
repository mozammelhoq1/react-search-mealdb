import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Meal.css";

const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  //   const { handleAddToOrder, meal } = props;
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
          >
            Small button
          </Button>
        </Card>
      </Col>
      {/* <div className="meal">
      <img src={strMealThumb} alt="" />
      <h4>{strMeal}</h4>
      <p>{strInstructions.slice(0, 100)}</p>
      <button onClick={() => handleAddToOrder(meal)}>Add this Food</button>
    </div> */}
    </>
  );
};

export default Meal;
