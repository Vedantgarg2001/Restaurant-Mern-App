import React from 'react';

const About = () => {
  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Fresh Vegetables, Fresh Life
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are committed to providing the freshest and highest quality vegetables to our customers.
          </p>
        </div>
        
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  {/* Icon */}
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c.943-1.157 1.814-2.583 1.994-4.293A2.501 2.501 0 0012 2c-1.306 0-2.417.835-2.825 2.007C9.44 5.43 10.064 6.946 12 8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12c0 8-8 10-8 10s-8-2-8-10a8 8 0 1116 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Quality Produce</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We source our vegetables from the best farms to ensure the highest quality and freshness.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  {/* Icon */}
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c.943-1.157 1.814-2.583 1.994-4.293A2.501 2.501 0 0012 2c-1.306 0-2.417.835-2.825 2.007C9.44 5.43 10.064 6.946 12 8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12c0 8-8 10-8 10s-8-2-8-10a8 8 0 1116 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Sustainability</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our farming practices are sustainable and environmentally friendly.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  {/* Icon */}
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c.943-1.157 1.814-2.583 1.994-4.293A2.501 2.501 0 0012 2c-1.306 0-2.417.835-2.825 2.007C9.44 5.43 10.064 6.946 12 8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12c0 8-8 10-8 10s-8-2-8-10a8 8 0 1116 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Customer Satisfaction</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We prioritize our customers and strive to meet their needs with every delivery.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
