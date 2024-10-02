import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Table } from "react-bootstrap";
import ProductListDetails from "./ProductListDetails";
import TablePagination from "../../componets/TablePagination";
import FormButton from "../../componets/FormButton";
import { productList } from "../Test/Data";
import { RowsPerPageEnum } from "../../enums/Enum";

const AllProductList = () => {
  const [selectedProductList, setSelectedProductList] = useState(null);
  const [paginatedProductList, setPpaginatedProductList] = useState(
    productList.slice(0, RowsPerPageEnum.MAX_TABLE_ROWS)
  );

  const rowsPerPage = RowsPerPageEnum.MAX_TABLE_ROWS;

  const handleRowClick = (productList) => {
    setSelectedProductList(productList);
    console.log(productList);
  };

  const handlePageChange = (paginatedData) => {
    setPpaginatedProductList(paginatedData);
  };

  return (
    <div className="p-4">
      <Row className="mb-2">
        <Col>
          <h2>All Product List</h2>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="d-flex justify-content-end">
          <Link to="/admin/product/list/add">
            <FormButton text="+ Add a product List" type="submit"></FormButton>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Vendor</th>
                <th>Ststus</th>
                <th>Description</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProductList.map((productList) => (
                <tr key={productList.id}>
                  <td
                    onClick={() => handleRowClick(productList)}
                    style={{ cursor: "pointer" }}
                  >
                    {productList.id}
                  </td>
                  <td className="table-cell">{productList.name}</td>
                  <td className="table-cell">{productList.vendorId}</td>
                  <td className="table-cell">
                    {/*{productList.isActive}*/}Active
                  </td>
                  <td className="table-cell">{productList.description}</td>

                  <td>
                    <Link
                      to={`/admin/product/list/update/${productList.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="outline-secondary" size="sm">
                        <i className="bi bi-pencil"></i>
                      </Button>{" "}
                    </Link>
                    <Button variant="outline-danger" size="sm">
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <TablePagination
            data={productList}
            rowsPerPage={rowsPerPage}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>

      {selectedProductList && (
        <Row className="">
          <Col>
            <ProductListDetails productListDetails={selectedProductList} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default AllProductList;
