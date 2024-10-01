import FormButton from "../../componets/FormButton";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <div>
      <Link to="/admin/users/roles">
        <FormButton
          text="Add a user"
          type="submit"
        ></FormButton>
      </Link>
    </div>
  );
};

export default UserList;
