import { Navbar } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 left-0 w-full">
          <Navbar userEmail={"test@xyz.com"} />
        </div>
        {children}
      </body>
    </html>
  );
}
