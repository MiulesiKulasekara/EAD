import { useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { updateproductListvalidationSchema } from "../../schema/ValidationSchema";
import FormInput from "../../componets/FormInput";
import FormButton from "../../componets/FormButton";

export const UpdateProductList = () => {
  const { id } = useParams();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        vendorId: "",
        isActive: "",
      },

      validationSchema: updateproductListvalidationSchema,

      onSubmit: async (values) => {
        try {
          console.log(values);
          //resetForm();
        } catch (error) {
          console.log(error);
        }
      },
    });

  //input focus
  const [isFocusStates, setIsFocusStates] = useState({
    email: false,
    password: false,
  });

  const handleFocus = (field) => {
    setIsFocusStates((prev) => ({ ...prev, [field]: true }));
  };

  const manageBlur = (field) => {
    setIsFocusStates((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Update Product List</h3>
      <Form onSubmit={handleSubmit}>
        {" "}
        <Row>
          <Col>
            <FormInput
              label="Name"
              id="name"
              name="name"
              type="text"
              value={values.name}
              onBlur={(e) => {
                manageBlur("name");
                handleBlur(e);
              }}
              onFocus={() => {
                handleFocus("name");
              }}
              onChange={handleChange}
              isFocused={isFocusStates.name}
              placeholder="Enter Name"
              error={touched.name && errors.name}
              errorMessage={errors.name}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput
              id="isActive"
              label="Status"
              name="isActive"
              type="select"
              value={values.isActive}
              onBlur={(e) => {
                manageBlur("isActive");
                handleBlur(e);
              }}
              onFocus={() => {
                handleFocus("isActive");
              }}
              onChange={handleChange}
              isFocused={isFocusStates.isActive}
              options={[
                { value: "true", label: "Active" },
                { value: "false", label: "Deactive" },
              ]}
              error={touched.isActive && errors.isActive}
              errorMessage={errors.isActive}
            />
          </Col>

          <Col><FormInput
              label="Verdor"
              id="vendorId"
              name="vendorId"
              type="vendorId"
              value={values.vendorId}
              onBlur={(e) => {
                manageBlur("vendorId");
                handleBlur(e);
              }}
              onFocus={() => {
                handleFocus("vendorId");
              }}
              onChange={handleChange}
              isFocused={isFocusStates.vendorId}
              placeholder="Enter Vendor"
              error={touched.vendorId && errors.vendorId}
              errorMessage={errors.vendorId}
            /></Col>
        </Row>
        <Row>
          <Col>
            <FormInput
              label="Description"
              id="description"
              name="description"
              type="textarea"
              value={values.description}
              onBlur={(e) => {
                manageBlur("description");
                handleBlur(e);
              }}
              onFocus={() => {
                handleFocus("description");
              }}
              onChange={handleChange}
              isFocused={isFocusStates.description}
              placeholder="Enter Description"
              rows={5}
              error={touched.description && errors.description}
              errorMessage={errors.companyName}
            />
          </Col>
        </Row>
        <FormButton className="mt-2" text="Update Product List" type="submit" />
      </Form>
    </div>
  );
};

export default UpdateProductList;
