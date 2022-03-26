import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pageMeta }) => {
  const meta = {
    title: "The Blogging platform for all",
    description: "Start your blog, share ideas and connect with the community",
    type: "website",
    ...pageMeta,
  };

  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* open graph meta tag */}
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="Blog for all" />

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
