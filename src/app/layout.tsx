import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuoteKit NG — Quotes, invoices & receipts made simple",
  description: "Create polished business quotations, invoices and receipts in minutes. Made for Nigerian small businesses.",
  applicationName: "QuoteKit NG",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
