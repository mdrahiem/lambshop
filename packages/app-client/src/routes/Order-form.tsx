import React from "react";
import { Link } from "react-router-dom";

function OrderForm() {
  return (
    <section className="h-full gradient-form bg-gray-100 md:h-screen">
      <div className="container py-12 px-6 h-full mx-auto">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 flex items-center lg:rounded-l-lg rounded-b-lg lg:rounded-br-none bg-gradient-to-b from-pink-500 via-pink-600 to-pink-800">
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h1 className="text-4xl font-bold">Current Stock</h1>
                    <p className="text-lg mt-2">
                      The below is the status of current stock. Please order
                      accordingly!
                    </p>
                    <div className="flex justify-left mt-12">
                      <div className="mr-24">
                        <h4 className="text-7xl font-semibold">1000</h4>
                        <h2 className="text-xl pl-3">Liters of Milk</h2>
                      </div>
                      <div>
                        <h4 className="text-7xl font-semibold">54</h4>
                        <h2 className="text-xl">Skins</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <form>
                      <h2 className="text-4xl font-bold">Place your order</h2>
                      <p className="text-lg mt-1 mb-4 text-gray-500">
                        Please enter your order details below
                      </p>
                      <div className="my-3">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="How many liters of milk"
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="number"
                          className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="In how many days"
                        />
                      </div>
                      <div className="text-center pt-1 pb-1">
                        <button
                          className="inline-block px-6 py-4 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Order Now
                        </button>
                        <Link className="text-gray-300" to="/">
                          Back to home
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderForm;
