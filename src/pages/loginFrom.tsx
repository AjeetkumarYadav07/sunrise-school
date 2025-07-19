import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../components/ui/button";
import { Link, useLocation } from "react-router-dom";
// interface for LoginFormValues
interface LoginFormValues {
  username: string;
  password: string;
}
// LoginForm Validation using Yup
const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required("User name is required "),
  password: Yup.string().required("password is required"),
});

export const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  // handle Login Form submit
  const handleLogin = (values: LoginFormValues) => {
    const storedata = localStorage.getItem("registeredUsers");
    if (!storedata) {
      alert("no user found . Please register first !");
      return;
    }
    const user = JSON.parse(storedata);

    if (
      user.username === values.username &&
      user.password === values.password
    ) {
      alert(` Welcome Back  ${values.username}  `);
    } else {
      alert("Invalid user and password !");
    }

    // use Location
    const location = useLocation;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Login as A student
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginFormSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div>
              <label
                htmlFor="username"
                className="block font-medium text-gray-700"
              >
                Username:
              </label>
              <Field
                name="username"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-400"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-medium text-gray-700"
              >
                Password:
              </label>
              <Field
                name="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400"
              />
            </div>

            <Button type="submit" className="mt-4">
              Login
            </Button>

            <p>
              <Link to="/register" state={{ from: location.pathname }}>
                Register here
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
