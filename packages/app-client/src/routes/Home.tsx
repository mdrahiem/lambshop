import type { FC } from "react";
import React, { Fragment } from "react";
import { useMutation } from "@tanstack/react-query";
import { setInitData } from "../api/post";
import { Link } from "react-router-dom";

const Home: FC = () => {
  // const { data, refetch } = useQuery(
  //   ["load"],
  //   () =>
  //     fetch("http://localhost:8080/yak-shop/load").then((resp) => resp.json()),
  //   {
  //     enabled: false,
  //   }
  // );

  const addTodoMutation = useMutation(() => setInitData());

  // const initData = trpc.useQuery(["load"]) as IReturnData;
  return (
    // <div className="mt-10 text-3xl mx-auto max-w-6xl">
    //   {/* <div>{JSON.stringify(initData.data)}</div> */}
    //   {/* {query.data?.map((todo) => (
    //     <li key={todo.id}>{todo.title}</li>
    //   ))} */}
    //   {/* {JSON.stringify(data)} */}
    //   <button onClick={() => addTodoMutation.mutate()}>Load data</button>
    //   {/* <Products /> */}
    // </div>
    <div className="relative overflow-hidden bg-gray-100 h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-gray-100 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-screen w-48 translate-x-1/2 transform text-white lg:block"
            fill="#F3F4F6"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <img
            className="absolute right-0 hidden h-screen text-white lg:block"
            src="https://xebia.com/wp-content/themes/xebia-theme/images/wave-long-v2.svg"
            style={{
              bottom: "-200px",
              position: "fixed",
              objectFit: "cover",
              left: "-80px",
              rotate: "0deg",
              zIndex: 0,
              opacity: "0.15",
            }}
          />

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex items-center relative z-10">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-pink-600 xl:inline">
                  The Yakshop
                </span>
                <span className="block text-3xl text-black">
                  Healthy & Delicious
                </span>{" "}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Yak is a multi-purpose species with a lower ecological footprint
                than cattle and raising them fits with out commitment to
                regenerative agriculture. Our yak have a diet of grasses from
                Oregon mountain pastures at 4,000 feet elevation during the
                growing season. In the winter, they receive free-choice non-GMO,
                organic alfalfa, grass and minerals.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="order"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-800 md:py-4 md:px-10 md:text-lg"
                  >
                    Order now
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-contain sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://i.ibb.co/LrrCyZ9/yakshop-bg.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default Home;
