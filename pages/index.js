import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { PencilIcon } from "@heroicons/react/solid";
import Layout from "../sections/Layout";

import React from "react";

const Home = () => {
  const { session, loading } = useSession();

  return (
    <div>
      <Layout
        pageMeta={{
          title: "My awesome blog",
          description: "This is a new description",
        }}
      >
        {/* Hero section */}
        <section className="flex flex-col items-center justify-center space-y-10 mt-12 sm:mt-24 md:mt-32">
          {/* Headlines */}
          <div className="space-y-4 mx-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-7xl font-bold capitalize">
              <span className="block">The blogging platform</span>
              <span className="block">For all</span>
            </h1>
            <h2 className="text-xl sm:text-2xl">
              Start your blog, share ideas and connect with the community
            </h2>
          </div>
          {/* CTA button */}
          {loading ? null : !session ? (
            <button
              type="button"
              onClick={signIn}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rouned-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitesspace-nowrap"
            >
              Get started
            </button>
          ) : (
            <Link href="/">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rouned-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitesspace-nowrap flex justify-center items-center space-x-2">
                <PencilIcon className="w-6 h-6 flex-shrink-0" />
                <span>Write a blog post</span>
              </a>
            </Link>
          )}
        </section>
      </Layout>
    </div>
  );
};

export default Home;
