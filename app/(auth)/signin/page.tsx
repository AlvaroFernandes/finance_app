import { Landmark } from "lucide-react";
import { SignInForm } from "@/components/auth/SignInForm";

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
  heading = "Fincance APP",
  subheading = "Sign in to your account.",
  loginText = "Don't have an account?",
  loginUrl = "/signup",
}: SignInPageProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
            <div className="mb-6 flex flex-col items-center">
              <a href={logo.href} className="m-7 h-10 w-auto">
                {logo.icon}
              </a>
              <p className="mb-2 text-2xl font-bold">{heading}</p>
              <p className="text-muted-foreground">{subheading}</p>
            </div>
            <div>
              <SignInForm />
            </div>
            <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
              <p>{loginText}</p>
              <a href={loginUrl} className="font-medium text-primary">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
