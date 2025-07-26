import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getStudents } from "../firebaseBackend/student.service";

// interface for LoginFormValues
interface LoginFormValues {
  username: string;
  password: string;
}

// LoginForm Validation using Yup
const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required("User name is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const students = await getStudents();

      const found = students.find(
        (student) =>
          student.studentname === values.username &&
          student.password === values.password
      );

      if (found) {
        alert("Login successful!");
        localStorage.setItem("activeUser", JSON.stringify(found));
        navigate("/student-panel"); // or wherever you want to redirect
      } else {
        alert("Invalid username or password.");
      }
    } catch (error) {
      //console.error("Login error:", error);
      alert("Something went wrong while logging in.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Login as a Student
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginFormSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium text-gray-700">
                Username:
              </label>
              <Field
                name="username"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage name="username" component="div" className="text-red-400" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block font-medium text-gray-700">
                Password:
              </label>
              <Field
                name="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage name="password" component="div" className="text-red-400" />
            </div>

            <Button type="submit" className="mt-4 w-full">
              Login
            </Button>

            <p className="mt-4 text-center">
              <Link to="/register" state={{ from: location.pathname }} className="text-blue-600 hover:underline">
                Register here 
              </Link>
            </p>
            <p className="mt-2 text-center">
              <Link to="/" state={{ from: location.pathname }} className="text-blue-300 hover:underline">
                Back To Home 
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
