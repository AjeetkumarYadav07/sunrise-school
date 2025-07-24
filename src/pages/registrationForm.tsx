import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "../components/ui/button";
import * as Yup from "yup";
import { Toaster } from "../components/ui/sonner";
import { addStudent, type Student } from "../firebaseBackend/student.service";
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
    .matches(/[1-9]/ , "Must add number for unique userName")
    .required("UserName is required"),
  email: Yup.string().email("Invalid email")
    .required("Email is required"),
  branch: Yup.string()
    .oneOf(
      ["Arts", "Commerce", "Science"],
      "Please select Arts, Commerce, or Science"
    )
    .required("Branch is required "),
  password: Yup.string()
    .min(7, "Password must be at least 7 digit")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one upercase letter")
    .required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Confirm Password is required"),
});

// const handleSubmit 
 const handleFormSubmit = async (values: RegistrationFormValues) =>{
    const{username , email, branch, password} = values ;

    const student: Student = {
      studentname:username ,
      email ,
      branch ,
      password ,
    }
    try{
       await addStudent(student) ;
       alert("student registration success");
    }
    catch(error){
      console.error("Something is missong " , error);
      alert("Failed to add student ")
    }
 }
export const RegistrationForm: React.FC = () => {
  const initialValues: RegistrationFormValues = {
    username: "",
    email: "",
    branch: "",
    password: "",
    confirmpassword: "",
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Register Your Self as Student{" "}
        </h1>
        <Formik<RegistrationFormValues>
          initialValues={initialValues} // initial values
          validationSchema={RegistrationSchema} // connect <-- Yup
          onSubmit={handleFormSubmit}
               // Save data in localStorage
              //  localStorage.setItem("registeredUsers" , JSON.stringify(values));
              //  console.log('Form Data' , values);
              //  alert("You are Registered sucesfully !")

          
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
                <Field name="branch" as="select">
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
                  
                  Confirm Password:{" "}
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

              <Button type="submit" className="mt-4" > Submit </Button>
              <Toaster/>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
