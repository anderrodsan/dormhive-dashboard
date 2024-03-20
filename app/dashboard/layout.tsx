import Header from "@/components/Header";
import Navbar from "@/components/navigation/navbar";
import Sidebar from "@/components/navigation/SideBar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-full">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col w-full">
        <div className="">
          <Navbar />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 px-5 pt-3 lg:pt-0 pb-5 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
