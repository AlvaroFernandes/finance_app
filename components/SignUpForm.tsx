"use client";

import { FormikHelpers, useFormik } from "formik";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { SignUpAction } from "@/actions/SignUp";
import { SignUpSchema } from "@/schemas";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm: React.FC = () => {
  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (
      values: SignUpFormValues,
      { setSubmitting }: FormikHelpers<SignUpFormValues>
    ) => {
      console.log("Submitted values:", values);
      SignUpAction(values);
      setSubmitting(false);
      // TODO: Handle the sign-in logic (e.g., call an API endpoint)
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 block w-full"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
          )}
        </div>
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
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium"
          >
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="mt-1 block w-full"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Sign In
        </Button>
      </form>
      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-4 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* OAuth Sign-In Buttons */}
      <div className="flex flex-col space-y-4">
        <Button
          variant="outline"
          onClick={() => console.log("google")}
          className="w-full flex items-center justify-center space-x-2"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Sign in with Google</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => console.log("apple")}
          className="w-full flex items-center justify-center space-x-2"
        >
          <IoLogoApple className="w-5 h-5" />
          <span>Sign in with Apple</span>
        </Button>
      </div>
    </div>
  );
};
