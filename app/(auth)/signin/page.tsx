import { SigninForm } from "@/components/SigninForm";
import { Landmark } from "lucide-react";

interface SigninPageProps {
  logo: {
    href: string;
    icon: React.ReactNode;
  };
  heading?: string;
  subheading?: string;
}

const SigninPage = ({
  logo = {
    href: "/",
    icon: <Landmark />,
  },
  heading = "Fincance APP",
  subheading = "Signin to your account.",
}: SigninPageProps) => {
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
              <SigninForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
