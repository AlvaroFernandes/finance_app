"use client";

import { FormikHelpers, useFormik } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { signIn } from "next-auth/react";
import { SignInSchema } from "@/schemas";
import { SignInAction } from "@/actions/SignIn";

interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInForm: React.FC = () => {
  const formik = useFormik<SignInFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: async (
      values: SignInFormValues,
      { setSubmitting }: FormikHelpers<SignInFormValues>
    ) => {
      console.log("Submitted values:", values);
      SignInAction(values);
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
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center space-x-2"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Sign in with Google</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => signIn("apple")}
          className="w-full flex items-center justify-center space-x-2"
        >
          <IoLogoApple className="w-5 h-5" />
          <span>Sign in with Apple</span>
        </Button>
      </div>
    </div>
  );
};
