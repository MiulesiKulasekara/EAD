import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Form, Row, Col } from "react-bootstrap";
import { uservalidationSchema } from "../../schema/ValidationSchema";
import FormInput from "../../componets/FormInput";
import FormButton from "../../componets/FormButton";
import { UserStatusEnum, UserRoleEnum } from "../../enums/Enum";
import {
  useUpdateUserMutation,
  useGetUserByIdQuery,
} from "../../core/services/user/user";

const UpdateUser = ({ user }) => {
  const userId = user.id;

  const navigate = useNavigate();

  const [updateUser, { isLoading, isError, isSuccess }] =
    useUpdateUserMutation();

  const { data: userData } = useGetUserByIdQuery({ userId });

  var userRole = "a User";

  if (user.role === UserRoleEnum.CUSTOMER) {
    userRole = "a Customer";
  } else if (user.role === UserRoleEnum.VENDOR) {
    userRole = "a Vender";
  } else if (user.role === UserRoleEnum.ADMIN) {
    userRole = "an Admin";
  } else if (user.role === UserRoleEnum.CSR) {
    userRole = "a CSR";
  } else {
    var userRole = "a User";
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    //resetForm,
  } = useFormik({
    initialValues: {
      status: userData?.status,
    },

    //validationSchema: uservalidationSchema,

    onSubmit: async (values) => {
      const payload = { status: Number(values.status) };
      try {
        const response = await updateUser({
          userId: userId,
          body: payload,
        }).unwrap();
        navigate("/admin/users")
      } catch (error) {
        console.log(error);
      }
    },

    enableReinitialize: true,
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
      <h3 className="mb-4">{`Update ${userRole} Status`}</h3>
      {user.role === UserRoleEnum.VENDOR ? (
        <p
          className="mb-4"
          style={{ color: "red" }}
        >{`You are updating ${user.companyName} - ${userRole}`}</p>
      ) : (
        <p
          className="mb-4"
          style={{ color: "red" }}
        >{`You are updating ${user.firstName} ${user.lastName} - ${userRole}`}</p>
      )}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <FormInput
              id="status"
              label="Status"
              name="status"
              type="select"
              value={values.status}
              onBlur={(e) => {
                manageBlur("status");
                handleBlur(e);
              }}
              onFocus={() => {
                handleFocus("status");
              }}
              onChange={handleChange}
              isFocused={isFocusStates.status}
              options={[
                { value: UserStatusEnum.PENDING, label: "Pending" },
                { value: UserStatusEnum.ACTIVE, label: "Active" },
                { value: UserStatusEnum.INACTIVE, label: "Inactive" },
              ]}
              error={touched.status && errors.status}
              errorMessage={errors.status}
            />
          </Col>
        </Row>

        <FormButton
          className="mt-2 mb-4"
          text={`Update ${userRole}`}
          type="submit"
        />
      </Form>

      {isLoading && <p>Updating user...</p>}
      {isError && <p>Error updating user</p>}
      {isSuccess && <span style={{color:"green"}}>User updated successfully!</span>}
    </div>
  );
};

export default UpdateUser;
