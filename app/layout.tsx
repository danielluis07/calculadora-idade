import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | Age calculator app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-lightgrey">{children}</body>
    </html>
  );
}
