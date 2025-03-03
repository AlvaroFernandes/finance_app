import { Landmark } from "lucide-react";
import { SignInForm } from "@/components/auth/SignInForm";
import Head from "next/head";
import Link from "next/link";

interface SignInPageProps {
  logo: {
    href: string;
    icon: React.ReactNode;
  };
  heading?: string;
  subheading?: string;
  loginText?: string;
  loginUrl?: string;
}

const SignInPage = ({
  logo = {
    href: "/",
    icon: <Landmark />,
  },
  heading = "Finance APP",
  subheading = "Sign in to your account.",
  loginText = "Don't have an account?",
  loginUrl = "/signup",
}: SignInPageProps) => {
  return (
    <>
      <Head>
        <title>Sign In - Finance APP</title>
        <meta
          name="description"
          content="Sign in to your Finance APP account."
        />
      </Head>
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow-lg">
              <div className="mb-6 flex flex-col items-center">
                <Link href={logo.href} className="m-7 h-10 w-auto">
                  {logo.icon}
                </Link>
                <h1 className="mb-2 text-2xl font-bold">{heading}</h1>
                <p className="text-muted-foreground">{subheading}</p>
              </div>
              <div>
                <SignInForm />
              </div>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>{loginText}</p>
                <Link href={loginUrl} className="font-medium text-primary">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInPage;
