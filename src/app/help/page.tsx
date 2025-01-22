import ReportForm from '@/components/Report';
import Nav from '../components/Nav';

const Help = () => {
  return (
    <div>
      <Nav />
      <div className="bg-gray-100 min-h-screen p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800">Help & FAQs</h1>
        </header>

        <section className="mb-16">
  <h2 className="text-3xl font-medium text-gray-700 mb-6">How can we assist you?</h2>
  
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-2xl font-semibold text-gray-800">Need Help with Your Order?</h3>
    <p className="text-gray-600 mt-2">If you are experiencing any issues with your order, or if you have any questions about our products, please feel free to reach out to us. We're here to assist you and ensure you have the best shopping experience possible!</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-2xl font-semibold text-gray-800">Delivery Issues</h3>
    <p className="text-gray-600 mt-2">If you have not received your order or there was a delay in delivery, please contact us immediately. Well work to resolve any delivery-related issues as quickly as possible.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-gray-800">Need Help with Returns?</h3>
    <p className="text-gray-600 mt-2">If you need assistance with returning or exchanging an item, dont hesitate to get in touch with our customer support team. We want to make sure youre completely satisfied with your purchase.</p>
  </div>
</section>


        <section className="mb-16">
          <h2 className="text-3xl font-medium text-gray-700 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-4">If you need further assistance, feel free to contact us:</p>
          <ul className="list-none space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Email:</strong> support@mkfoods.com
            </li>
            <li className="text-lg text-gray-700">
              <strong>Phone:</strong> +1 123 456-7890
            </li>
            <li className="text-lg text-gray-700">
              <strong>Address:</strong> Metroville Karachi, Pakistan.
            </li>
          </ul>
        </section>

        {/* Report Form Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-medium text-gray-700 mb-6">Report an Issue</h2>
          <p className="text-gray-600 mb-4">If you have an issue or need assistance, please use the form below to send us a message:</p>
          <ReportForm />
        </section>
      </div>
    </div>
  );
};

export default Help;
