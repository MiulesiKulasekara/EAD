import { Row, Col, Card } from "react-bootstrap";

const ProductListDetails = ({ productListDetails }) => {
  return (
    <div>
      <Card className="mt-2">
        <Card.Body>
          <Row>
            <Col>
              <h2>{productListDetails.name}</h2>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <h5>Vendor</h5>
              <p>{productListDetails.vendorId}</p>
            </Col>
            <Col md={2}>
              <h5>Status</h5>
              <p>Active</p>
            </Col>
            <Col>
              <h5>Description</h5>
              <p>
                {productListDetails.description}
                
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductListDetails;
