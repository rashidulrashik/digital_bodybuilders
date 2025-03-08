import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <div className="container mt-4">{children}</div>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// app/layout.js
// app/layout.js
import Layout from "./components/Layout";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
