import { Link } from "react-router-dom";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../api/create-order";
import { IOrderPayload } from "app-server/types";
import SuccessAlert from "./success-alert";
import ErrorAlert from "./error-alert";
import useLoadStock from "../hooks/load-stock";

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
  const { data: stockData } = useLoadStock({});

  const submitFormMutation = useMutation(
    (data: IOrderPayload) => createOrder(data),
    {
      onMutate: async () => {
        reset();
      },
      onError: () => {},
      onSettled: () => {
        queryClient.invalidateQueries(["stock"]);
      },
    }
  );

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
      <h2 className="text-4xl font-bold mt-4 md:mt-0">Place your order</h2>
      <p className="text-lg mt-1 mb-4 text-gray-500">
        Please enter your order details below
      </p>
      <div className="my-3">
        <input
          type="text"
          className={inputClassName}
          placeholder="Your name"
          {...register("customer", {
            required: true,
          })}
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
          {...register("days", {
            onChange: (e) => console.log(e),
          })}
        />

        {errors.days && (
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
          {...register("milk", {
            required: true,
            validate: (inputNumber) =>
              stockData?.milk
                ? Number(inputNumber) > 0 &&
                  Number(inputNumber) <= stockData?.milk
                : true,
          })}
        />
        {errors.milk?.type === "required" && (
          <span className="text-red-600 text-sm pt-2">
            The value should be more than 1
          </span>
        )}
        {errors.milk?.type === "validate" && (
          <span className="text-red-600 text-sm pt-2">
            Sorry we don't have that much stock right now. Please check the milk
            stock.
          </span>
        )}
      </div>
      <div className="my-3">
        <input
          type="number"
          className={inputClassName}
          placeholder="Number of skins"
          {...register("skins", {
            validate: (inputNumber) =>
              stockData?.skins
                ? Number(inputNumber) > 0 &&
                  Number(inputNumber) <= stockData?.skins
                : true,
          })}
        />
        {errors.skins?.type === "validate" && (
          <span className="text-red-600 text-sm pt-2">
            Sorry we don't have that much stock right now. Please check the
            skins stock.
          </span>
        )}
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
      {submitFormMutation.isSuccess && <SuccessAlert />}
      {submitFormMutation.isError && <ErrorAlert />}
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
