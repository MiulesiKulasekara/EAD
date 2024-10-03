import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { Form, Row, Col } from "react-bootstrap";
import { uservalidationSchema } from "../../schema/ValidationSchema";
import FormInput from "../../componets/FormInput";
import FormButton from "../../componets/FormButton";
import { UserStatusEnum } from "../../enums/Enum";

const AddUser = () => {
  const location = useLocation();

  const roleNum = location.state.roleNum;

  var userRole = "a User";

  if (roleNum === 1) {
    userRole = "a Customer";
  } else if (roleNum === 2) {
    userRole = "a Vender";
  } else if (roleNum === 3) {
    userRole = "an Admin";
  } else {
    userRole = "a CSR";
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        companyName:"",
        email: "",
        password: "",
        confirmPassword: "",
        role: location.state.roleNum,
        status: UserStatusEnum.INACTIVE,
      },

      validationSchema: uservalidationSchema(roleNum),

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
      <h3 className="mb-4">{`Add ${userRole}`}</h3>
      <Form onSubmit={handleSubmit}>
      {(roleNum === 1 || roleNum === 3 || roleNum === 4) && (
          <Row>
            <Col>
              <FormInput
                label="First Name"
                id="firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                onBlur={(e) => {
                  manageBlur("firstName");
                  handleBlur(e);
                }}
                onFocus={() => {
                  handleFocus("firstName");
                }}
                onChange={handleChange}
                isFocused={isFocusStates.firstName}
                placeholder="Enter First Name"
                error={touched.firstName && errors.firstName}
                errorMessage={errors.firstName}
              />
            </Col>
            <Col>
              <FormInput
                label="Last Name"
                id="lastName"
                name="lastName"
                type="text"
                value={values.lastName}
                onBlur={(e) => {
                  manageBlur("lastName");
                  handleBlur(e);
                }}
                onFocus={() => {
                  handleFocus("lastName");
                }}
                onChange={handleChange}
                isFocused={isFocusStates.lastName}
                placeholder="Enter Last Name"
                error={touched.lastName && errors.lastName}
                errorMessage={errors.lastName}
              />
            </Col>
          </Row>
        )}

        {/* Conditionally display Company Name if roleNum is 2 */}
        {roleNum === 2 && (
          <FormInput
            label="Company Name"
            id="companyName"
            name="companyName"
            type="text"
            value={values.companyName}
            onBlur={(e) => {
              manageBlur("companyName");
              handleBlur(e);
            }}
            onFocus={() => {
              handleFocus("companyName");
            }}
            onChange={handleChange}
            isFocused={isFocusStates.companyName}
            placeholder="Enter Company Name"
            error={touched.companyName && errors.companyName}
            errorMessage={errors.companyName}
          />
        )}

        {/* Email (always displayed) */}
        <FormInput
          label="Email address"
          id="email"
          name="email"
          type="email"
          value={values.email}
          onBlur={(e) => {
            manageBlur("email");
            handleBlur(e);
          }}
          onFocus={() => {
            handleFocus("email");
          }}
          onChange={handleChange}
          isFocused={isFocusStates.email}
          placeholder="Enter email"
          error={touched.email && errors.email}
          errorMessage={errors.email}
        />

        {/* Password and Confirm Password (always displayed) */}
        <Row className="mt-3">
          <Col>
            <FormInput
              label="Password"
              id="password"
              name="password"
              type="password"
              value={values.password}
              onBlur={(e) => {
                manageBlur("password");
                handleBlur(e);
              }}
              onFocus={() => {
                handleFocus("password");
              }}
              onChange={handleChange}
              isFocused={isFocusStates.password}
              placeholder="Enter password"
              error={touched.password && errors.password}
              errorMessage={errors.password}
            />
          </Col>
          <Col>
            <FormInput
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onBlur={(e) => {
                manageBlur("confirmPassword");
                handleBlur(e);
              }}
              onFocus={() => {
                handleFocus("confirmPassword");
              }}
              onChange={handleChange}
              isFocused={isFocusStates.confirmPassword}
              placeholder="Enter password again"
              error={touched.confirmPassword && errors.confirmPassword}
              errorMessage={errors.confirmPassword}
            />
          </Col>
        </Row>

        {/* Conditionally display Company Name if roleNum is 2 */}
        {roleNum === 2 && (
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
        )}

        <FormButton className="mt-2" text={`Add ${userRole}`} type="submit" />
      </Form>
    </div>
  );
};

export default AddUser;
