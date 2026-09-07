import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import "./darkmode.css";

function App() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("");
  const [onPromotion, setOnPromotion] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState("price");
  const [order, setOrder] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const params = new URLSearchParams();

      const numericMin = Number(minPrice);
      const numericMax = Number(maxPrice);

      if (type !== "") params.append("type", type);
      if (onPromotion) params.append("promotion", true);
      if (numericMin !== 0) params.append("min", numericMin);
      if (numericMax !== 0 && numericMax > numericMin)
        params.append("max", numericMax);
      if (sort !== "") params.append("sort", sort);
      if (order !== "") params.append("order", order);

      console.log(params.toString());

      const response = await fetch(
        `http://localhost:3000/product/filter?${params.toString()}`,
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, [type, onPromotion, minPrice, maxPrice, sort, order]);

  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <Form.Select size="lg" onChange={(e) => setType(e.target.value)}>
              <option value="">All Types</option>
              <option value="Toys">Toys</option>
              <option value="House Appliances">House Appliances</option>
              <option value="Electronics">Electronics</option>
            </Form.Select>
          </Col>
          <Col xs={3}>
            <Form.Check
              onChange={(e) => setOnPromotion(e.target.checked)}
              type="checkbox"
              label="Only promotion"
              value={true}
              className="text-white"
            ></Form.Check>
          </Col>
          <Col xs={3}>
            <Form.Label className="text-white">Minimum Price</Form.Label>
            <Form.Control
              onChange={(e) => setMinPrice(e.target.value)}
              type="number"
              label="Minimum Price"
              value={minPrice}
              className=""
            />
            <Form.Label className="text-white">Maximum Price</Form.Label>
            <Form.Control
              onChange={(e) => setMaxPrice(e.target.value)}
              type="number"
              label="Maximum Price"
              value={maxPrice}
              className=""
            />
          </Col>
          <Col xs={3}>
            <Form.Label className="text-white">Sort By</Form.Label>
            <Form.Select
              size="lg"
              value={`${sort}_${order}`}
              onChange={(e) => {
                const [sortType, orderValue] = e.target.value.split("_");
                setSort(sortType);
                setOrder(Number(orderValue));
              }}
            >
              <option value="price_1">Price: Low to High</option>
              <option value="price_-1">Price: High to Low</option>
              <option value="name_1">Name: A to Z</option>
              <option value="name_-1">Name: Z to A</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={4} className="mt-4">
              <Card style={{ width: "18rem", height: "100%" }}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    RM{product.price}
                  </Card.Subtitle>
                  <Card.Text>{product.type}</Card.Text>
                  {product.on_promotion && (
                    <Card.Text className="text-success">
                      Item on promotion!
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
