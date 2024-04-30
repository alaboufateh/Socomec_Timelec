import type { Metadata } from "next";
import "./globals.scss";
import SlideBar from "@/shared/SlideBar/SlideBar";

export const metadata: Metadata = {
  title: "Socomec_Timelec",
  manifest: "@/app/manifest.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="basis-[5%]">
            <SlideBar />
          </div>
          <div> {children}</div>
        </div>
      </body>
    </html>
  );
}
