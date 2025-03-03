import { SignUpForm } from "@/components/auth/SignUpForm";
import { Landmark } from "lucide-react";
import Link from "next/link";

interface SignUpPageProps {
  logo: {
    href: string;
    icon: React.ReactNode;
  };
  heading?: string;
  subheading?: string;
  loginText?: string;
  loginUrl?: string;
}

const SignUpPage = ({
  logo = {
    href: "/",
    icon: <Landmark />,
  },
  heading = "Fincance APP",
  subheading = "Sign up to your account.",
  loginText = "Already have an account?",
  loginUrl = "/signin",
}: SignUpPageProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <Link href={logo.href} className="m-7 h-10 w-auto">
                {logo.icon}
              </Link>
              <p className="mb-2 text-2xl font-bold">{heading}</p>
              <p className="text-muted-foreground">{subheading}</p>
            </div>
            <div>
              <SignUpForm />
            </div>
            <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
              <p>{loginText}</p>
              <Link href={loginUrl} className="font-medium text-primary">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
