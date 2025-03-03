import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Finance APP - Manage Your Personal Finances</title>
        <meta
          name="description"
          content="Manage your personal finances efficiently with Finance APP."
        />
      </Head>
      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Finance APP</h1>
            <p className="text-lg mb-8">
              Manage your personal finances efficiently and effectively.
            </p>
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-md shadow-md">
                <h3 className="text-xl font-bold mb-4">Budget Tracking</h3>
                <p>Keep track of your income and expenses with ease.</p>
              </div>
              <div className="p-6 border rounded-md shadow-md">
                <h3 className="text-xl font-bold mb-4">Financial Goals</h3>
                <p>Set and achieve your financial goals with our tools.</p>
              </div>
              <div className="p-6 border rounded-md shadow-md">
                <h3 className="text-xl font-bold mb-4">Reports & Analytics</h3>
                <p>Get detailed reports and analytics on your finances.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-md shadow-md">
                <p>
                  &quot;Finance APP has transformed the way I manage my money.
                  Highly recommend!&quot;
                </p>
                <p className="mt-4 font-bold">- User A</p>
              </div>
              <div className="p-6 border rounded-md shadow-md">
                <p>
                  &quot;The best app for tracking expenses and setting financial
                  goals.&quot;
                </p>
                <p className="mt-4 font-bold">- User B</p>
              </div>
              <div className="p-6 border rounded-md shadow-md">
                <p>
                  &quot;I love the detailed reports and analytics. It helps me
                  stay on top of my finances.&quot;
                </p>
                <p className="mt-4 font-bold">- User C</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <a
              href="/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium"
            >
              Sign Up Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
