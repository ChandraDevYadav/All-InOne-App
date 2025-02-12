import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="bg-gray-50 min-h-screen pb-10">
        {/* Header Section */}
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg">
              Your privacy matters to us. Learn how we collect, use, and protect
              your data.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-600 mb-6">
                We value your trust and are committed to protecting your personal
                information. This Privacy Policy explains how we handle your
                data.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Information We Collect
              </h3>
              <p className="text-gray-600 mb-4">
                When you use our services, we may collect information such as your
                name, email address, and payment details.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How We Use Your Data
              </h3>
              <p className="text-gray-600 mb-4">
                Your data helps us provide, improve, and personalize our services
                while ensuring a secure user experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-blue-600 underline"
                >
                  support@example.com
                </a>
                .
              </p>
            </div>

            {/* Image Section */}
            <div>
              <img
                src="/con2.jpg"
                alt="Privacy Illustration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-10">
            <p className="text-sm text-gray-500 text-center">
              Last updated: January 21, 2025
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
