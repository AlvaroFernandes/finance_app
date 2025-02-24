"use client";

import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface SigninFormValues {
  email: string;
  password: string;
}

export const SigninForm: React.FC = () => {
  const formik = useFormik<SigninFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (
      values: SigninFormValues,
      { setSubmitting }: FormikHelpers<SigninFormValues>
    ) => {
      console.log("Submitted values:", values);
      setSubmitting(false);
      // TODO: Handle the sign-in logic (e.g., call an API endpoint)
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 block w-full"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="mt-1 block w-full"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {formik.errors.password}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  );
};
