import React from "react";
import ErrorComponent from "../components/error";
import FormComponent from "../components/form";
import LoaderComponent from "../components/loader";
import useLoadStock from "../hooks/load-stock";

function OrderForm() {
  const { data, isFetching, isError } = useLoadStock({});
  if (!isFetching) <LoaderComponent />;
  if (isError) <ErrorComponent />;
  return (
    <>
      <section className="h-full gradient-form md:h-screen">
        <div className="container py-12 px-6 h-full mx-auto">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 flex items-center lg:rounded-l-lg rounded-t-lg lg:rounded-br-none bg-gradient-to-b from-pink-500 via-pink-600 to-pink-800">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h1 className="text-4xl font-bold">Current Stock</h1>
                      <p className="text-lg mt-2">
                        The below is the status of current stock. Please order
                        accordingly!
                      </p>
                      <div className="flex justify-left mt-12">
                        <div className="mr-24">
                          <h4 className="text-7xl font-semibold">
                            {data?.milk || 0}
                          </h4>
                          <h2 className="text-xl pl-3">Liters of Milk</h2>
                        </div>
                        <div>
                          <h4 className="text-7xl font-semibold">
                            {data?.skins || 0}
                          </h4>
                          <h2 className="text-xl">Skins</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <FormComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderForm;
