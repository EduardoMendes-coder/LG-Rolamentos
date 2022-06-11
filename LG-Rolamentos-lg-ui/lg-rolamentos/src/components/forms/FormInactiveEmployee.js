import "./FormInactiveEmployee.css";
import { useParams } from "react-router";

export default function FormInactiveEmployee() {
  const { id } = useParams();

  return (
    <div className="formInacManager ps-5">
      <form
        className="formIn "
        action={
          "https://lg-rolamentos-api.herokuapp.com/demit-employee/" + id + "/"
        }
        method="post"
      >
        <div className="demitirf text-center">
          <h4 className="pt-3 pb-4">
            Tem certeza que deseja demitir o funcionário {id} ??
          </h4>
          <input
            className="btn-demitir mb-3"
            type="submit"
            value="Demitir"
          ></input>
        </div>
      </form>
    </div>
  );
}
