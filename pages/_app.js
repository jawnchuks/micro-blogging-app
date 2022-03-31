import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider as AuthProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
