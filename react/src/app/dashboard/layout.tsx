import { Row } from "@/components/ui/index"
import Sidebar from '@/components/layout/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Row id="layout-row">
          <Sidebar />
          <div id="outlet">{children}</div>
        </Row>
      </body>
    </html>
  );
}
