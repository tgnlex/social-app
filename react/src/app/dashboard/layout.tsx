import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from '@/components/layout/sidebar.tsx';
import "@/style/app.css";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="layout-row" className="row">
          <Sidebar />
          <div id="outlet">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
