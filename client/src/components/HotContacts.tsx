import React from 'react';

const HotContacts = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg hotContacts">
      <h1 className="mb-4 text-3xl font-bold text-blue-700">Council Hot Contacts</h1>
      <p className="mb-6 text-lg text-gray-700">
        Need assistance? Get in touch with key council departments for quick support.
      </p>
      <ul className="divide-y divide-gray-300">
        <li className="py-4">
          <h3 className="text-xl font-semibold text-gray-800">Billing Department</h3>
          <p className="text-gray-600">Phone: +263 123 456 789</p>
          <p className="text-gray-600">Email: billing@masvingo.gov.zw</p>
        </li>
        <li className="py-4">
          <h3 className="text-xl font-semibold text-gray-800">Licensing Department</h3>
          <p className="text-gray-600">Phone: +263 987 654 321</p>
          <p className="text-gray-600">Email: licensing@masvingo.gov.zw</p>
        </li>
        <li className="py-4">
          <h3 className="text-xl font-semibold text-gray-800">Support Desk</h3>
          <p className="text-gray-600">Phone: +263 555 123 456</p>
          <p className="text-gray-600">Email: support@masvingo.gov.zw</p>
        </li>
      </ul>
    </div>
  );
};

export default HotContacts;
