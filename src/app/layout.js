import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata = {
   title: `${profile.name} | ${profile.role}`,
   description:
      "Portfolio of Mohiuddin Ahmed, a Computer Science and Engineering graduate and web developer from Dhaka, Bangladesh.",
   openGraph: {
      title: `${profile.name} | ${profile.role}`,
      description:
         "CSE graduate from the University of Asia Pacific building responsive web projects.",
      type: "website",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
