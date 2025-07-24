import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "../components/ui/button";
import * as Yup from "yup";
import { addStudent, type Student } from "../firebaseBackend/student.service";
import { useNavigate } from "react-router-dom";

// Define Typescript interface for values
interface RegistrationFormValues {
  username: string;
  email: string;
  branch: string;
  password: string;
  confirmpassword: string;
}

// Yup validation schema
const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too short")
    .max(20, "Too long")
    .matches(/[1-9]/, "Must add number for unique userName")
    .required("UserName is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  branch: Yup.string()
    .oneOf(["Arts", "Commerce", "Science"], "Please select a valid branch")
    .required("Branch is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .matches(/[a-z]/, "Must contain lowercase letter")
    .matches(/[A-Z]/, "Must contain uppercase letter")
    .required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();

  const initialValues: RegistrationFormValues = {
    username: "",
    email: "",
    branch: "",
    password: "",
    confirmpassword: "",
  };

  // ✅ HandleFormSubmit
  const handleFormSubmit = async (values: RegistrationFormValues) => {
    localStorage.setItem("activeUser" , JSON.stringify(values) );
    console.log("form Data  : "  , values);
     
    const { username, email, branch, password } = values;

    const student: Student = {
      studentname: username,
      email,
      branch,
      password,
    };

    try {
      await addStudent(student);
      alert("Student registration successful");

      // ✅ Navigate only after success
      navigate("/student-panel");
    } catch (error) {
      console.error("Something went wrong", error);
      alert("Failed to add student");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Register Your Self as Student
        </h1>

        <Formik<RegistrationFormValues>
          initialValues={initialValues}
          validationSchema={RegistrationSchema}
          onSubmit={handleFormSubmit}
         

        >
          {() => (
            <Form>
              <div>
                <label
                  htmlFor="username"
                  className="block font-medium text-gray-700"
                >
                  UserName:
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
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email:
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400"
                />
              </div>

              <div>
                <label
                  htmlFor="branch"
                  className="block font-medium text-gray-700"
                >
                  Branch:
                </label>
                <Field
                  name="branch"
                  as="select"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Branch</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Science">Science</option>
                </Field>
                <ErrorMessage
                  name="branch"
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

              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block font-medium text-gray-700"
                >
                  Confirm Password:
                </label>
                <Field
                  name="confirmpassword"
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="confirmpassword"
                  component="div"
                  className="text-red-400"
                />
              </div>

              <Button type="submit" className="mt-4 cursor-pointer">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
