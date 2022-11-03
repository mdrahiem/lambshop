import type { FC } from "react";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { setInitData } from "../api/setInit-data";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const addMutation = useMutation(() => setInitData());
  return (
    <div className="relative overflow-hidden  h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10  pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex items-center relative z-10">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-pink-600 xl:inline">
                  The Lambshop
                </span>
                <span className="block text-3xl text-black">
                  Healthy & Delicious
                </span>{" "}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Lamb is a multi-purpose species with a lower ecological
                footprint than cattle and raising them fits with out commitment
                to regenerative agriculture. Our lamb have a diet of grasses
                from Oregon mountain pastures at 4,000 feet elevation during the
                growing season. In the winter, they receive free-choice non-GMO,
                organic alfalfa, grass and minerals.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="order"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-800 md:py-4 md:px-10 md:text-lg"
                    onClick={() => addMutation.mutate()}
                  >
                    Order now
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
        <img
          className="h-56 w-full object-contain sm:h-72 md:h-96 hero-lamb"
          src="https://i.ibb.co/JBTs4nv/New-Project-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
