import { LoginUserProvider } from "@/contexts/LoginUserContext";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoginUserProvider>{children}</LoginUserProvider>
      </body>
    </html>
  );
}
