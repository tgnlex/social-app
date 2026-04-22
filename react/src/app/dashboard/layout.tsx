import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/layout/header.tsx';
import Sidebar from '@/components/layout/sidebar.tsx';
import styles from './layout.module.css';
import "@/style/app.css";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header className={styles.header} />
        <div id="layout-row" className="row">
          <Sidebar className={styles.sidebar} />
          <div id="outlet" className={styles.outlet}>
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
