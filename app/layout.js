import "./globals.css";
import Navbar from "./_components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./_components/footer";

export const metadata = {
  title: "Next Blog",
  description: "Bloging Website with next.js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white selection:bg-purple-300 dark:selection:bg-gray-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
