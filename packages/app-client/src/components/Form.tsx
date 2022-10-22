import { Link } from "react-router-dom";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../api/createOrder";
import { IOrderPayload } from "app-server/types";

const inputClassName =
  "form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const queryClient = useQueryClient();

  const submitFormMutation = useMutation((data) => createOrder(data), {
    onMutate: async (data: IOrderPayload) => {
      reset();
    },
    onError: (err, variables, context) => {},
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(["stock"]);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { customer, days, milk, skins } = data;
    submitFormMutation.mutate({
      customer,
      days: Number(days),
      milk: Number(milk),
      skins: Number(skins),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-4xl font-bold">Place your order</h2>
      <p className="text-lg mt-1 mb-4 text-gray-500">
        Please enter your order details below
      </p>
      <div className="my-3">
        <input
          type="text"
          className={inputClassName}
          placeholder="Your name"
          {...register("customer", { required: true })}
        />
        {errors.customer && (
          <span className="text-red-600 text-sm pt-2">
            Your name is required
          </span>
        )}
      </div>
      <div className="my-3">
        <input
          type="number"
          className={inputClassName}
          placeholder="In how many days you would like to receive"
          {...register("days", { required: true })}
        />
        {errors.customer && (
          <span className="text-red-600 text-sm pt-2">
            Days should be more than 1
          </span>
        )}
      </div>
      <div className="my-3">
        <input
          type="number"
          className={inputClassName}
          placeholder="Number of liters of milk"
          {...register("milk", { required: true })}
        />
        {errors.customer && (
          <span className="text-red-600 text-sm pt-2">
            The value should be more than 1
          </span>
        )}
      </div>
      <div className="my-3">
        <input
          type="number"
          className={inputClassName}
          placeholder="Number of skins"
          {...register("skins")}
        />
      </div>
      <div className="text-center pt-1 pb-1">
        <button
          className="inline-block px-6 py-4 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700"
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          disabled={submitFormMutation.isLoading}
        >
          Order Now
        </button>
        <Link className="text-gray-300" to="/">
          Back to home
        </Link>
      </div>
      {submitFormMutation.isSuccess && (
        <div
          className="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700"
          role="alert"
        >
          <svg
            className="w-5 h-5 inline mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>
            <span className="font-medium">Success!</span> Your order has been
            placed successfully!
          </div>
        </div>
      )}
      {submitFormMutation.isError && (
        <div
          className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
          role="alert"
        >
          <svg
            className="w-5 h-5 inline mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>
            <span className="font-medium">Something went wrong!</span> Please
            check back in sometime
          </div>
        </div>
      )}
    </form>
  );
}

type Inputs = {
  customer: string;
  milk: string;
  skins: string;
  days: string;
};

export default FormComponent;
