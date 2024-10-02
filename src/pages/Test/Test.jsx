import { useState } from "react";
import { Form } from "reactstrap";
import { useFormik } from "formik";
import { testvalidationSchema } from "../../schema/ValidationSchema";
import FormInput from "../../componets/FormInput";
import FormButton from "../../componets/FormButton";

const Test = () => {
  const [isFocused, setIsFocused] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
      },

      validationSchema: testvalidationSchema,

      onSubmit: async (values) => {
        try {
          console.log(values.name);
          //resetForm();
        } catch (error) {
          console.log(error);
        }
      },
    });

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          id="name"
          name="name"
          type="text"
          value={values.name}
          onBlur={(e) => {
            setIsFocused(false);
            handleBlur && handleBlur(e);
          }}
          onFocus={(e) => {
            setIsFocused(true); 
          }}
          onChange={handleChange}
          isFocused={isFocused} 
          placeholder="Enter your name here"
          error={touched.name && errors.name}
          errorMessage={errors.name}
        ></FormInput>

        <FormButton className={""} text="Add" type="submit" />
      </Form>
    </>
  );
};

export default Test;
