import React from "react";

import axiosInstance from "../../Services/axiosInstance";
import { useFormik } from "formik";
import "./LogIn.scss";

export default function LogIn() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const response = await axiosInstance({
        method: "post",
        url: "/login",
        data: values,
        header: { "Content-Type": "application/json" },
        params: { username: values.username, password: values.password },
      });

      const accessToken = response?.data?.accessToken;
      console.log(accessToken);
    },
  });

  return (
    <div className="form-wrapper">
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

        <button className="button-85" type="submit">
          Log in
        </button>
        <span className="text-signup">
          {" "}
          <button className="button-85-mini">Forgot password?</button>
        </span>
      </form>
    </div>
  );
}
