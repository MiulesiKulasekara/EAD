import { Button } from "reactstrap";

const FormButton = ({ className, text, type, onClick }) => {
  const buttonStyle = {
    backgroundColor: "#576F72", // Black background
    borderColor: "#576F72", // Black border
    color: "#fff", // White text
  };

  const focusedStyle = {
    boxShadow: "0 0 0 0.2rem rgba(125, 157, 156, 0.5)", 
    borderColor: "#7D9D9C", 
    
  };

  return (
    <>
      <Button
        className={`btn ${className}`}
        type={type}
        style={buttonStyle}
        onClick={onClick}
        onFocus={(e) => {
          e.target.style.boxShadow = focusedStyle.boxShadow; // Apply green outline on focus
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "none"; // Remove outline on blur
        }}
      >
        {text}
      </Button>
    </>
  );
};
export default FormButton;
