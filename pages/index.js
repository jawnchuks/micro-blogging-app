import Layout from "../sections/Layout";

export default function Home() {
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
          <button
            type="button"
            onClick={null}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rouned-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitesspace-nowrap"
          >
            Get started
          </button>
        </section>
      </Layout>
    </div>
  );
}
