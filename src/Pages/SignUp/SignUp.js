import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./SignUp.scss";
import axiosInstance from "../../Services/axiosInstance";
export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      const response = axiosInstance({
        method: "post",
        url: "/api/register",
        data: values,
        header: { "Content-Type": "application/json" },
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">USERNAME</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />

      <label htmlFor="password">PASSWORD</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <label htmlFor="email">YOUR E-MAIL</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button className="button-85" type="submit">
        Sign Up
      </button>
      <span className="text-signup">
        Already an user?{" "}
        <Link to="/login" className="link">
          Log in
        </Link>
      </span>
    </form>
  );
}
