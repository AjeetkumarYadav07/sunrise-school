import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addTeacher } from "../firebaseBackend/teacher.service";

interface TeachersValue {
  name: string;
  department: string;
  phone: string;
  address: string;
}

const TeachersSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  department: Yup.string()
    .required("Department is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

export const AddTeacher = () => {
  const initialValues: TeachersValue = {
    name: "",
    department: "",
    phone: "",
    address: "",
  };

  const handleSubmit = async (teacher: TeachersValue) => {
    try {
      // console.log("Submitting:", teacher);
      await addTeacher(teacher);
      alert("Data is added successfully");
    } catch (error) {
      // console.error("Firebase Error:", error);
      alert("Failed to add data");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center text-blue-700">
          Teacher Registration
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={TeachersSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Department */}
              {/* Department */}
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Department
                </label>
                <Field
                  name="department"
                  as="select"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Department</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Science">Science</option>
                </Field>
                <ErrorMessage
                  name="department"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <Field
                  name="phone"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <Field
                  name="address"
                  as="textarea"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
