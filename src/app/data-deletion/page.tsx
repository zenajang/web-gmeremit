import PublicLayout from "@/components/layout/PublicLayout";

export default function DataDeletionPage() {
  return (
    <PublicLayout className="bg-white">
      <section className="pt-16 lg:pt-20 pb-16 lg:pb-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-10 lg:mb-12">
            Data Deletion Instructions
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              This page is provided in compliance with the <span className="font-semibold text-dark">Meta Platform Terms</span> and <span className="font-semibold text-dark">Meta Developer Policies</span>, and supports user privacy rights under applicable data protection and privacy regulations.
            </p>

            <p>
              GME Remit values the privacy and protection of user information. Our application and services may collect basic customer information such as:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Visa Type</li>
            </ul>

            <p>
              The information collected is primarily used for <span className="font-semibold text-dark">customer inquiries, lead management, service assistance, and communication purposes</span>.
            </p>

            <p>
              Please note that GME Remit does not collect or store sensitive personal documents directly through Meta platforms. Documents such as IDs and supporting requirements are handled separately through our official communication channels when necessary.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-dark mt-12 mb-5">
            Requesting Data Deletion
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              If you would like to request deletion of your personal information associated with GME Remit, you may contact us through our official Facebook pages or customer support channels.
            </p>

            <p className="font-semibold text-dark">
              Please include the following information when submitting your request:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Full Name</li>
              <li>Registered Phone Number</li>
              <li>Registered Email Address</li>
              <li>Other relevant details related to your inquiry</li>
            </ul>

            <p>
              Upon verification, we will process your request within a reasonable timeframe.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-dark mt-12 mb-5">
            Important Notice
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Please note that certain information may be retained when required for:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Legal obligations</li>
              <li>Regulatory compliance</li>
              <li>Fraud prevention</li>
              <li>Internal record-keeping requirements</li>
            </ul>

            <p>
              Only information that is no longer required for legitimate business or legal purposes will be deleted.
            </p>

            <p>
              For further assistance, please contact GME Remit through our official communication channels.
            </p>
          </div>

        </div>
      </section>
    </PublicLayout>
  );
}
