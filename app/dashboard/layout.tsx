import Header from "@/components/Header";
import Navbar from "@/components/navigation/navbar";
import Sidebar from "@/components/navigation/SideBar";
import { ScrollArea } from "@/components/ui/scroll-area";


export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    

    return (  
      <section className='flex h-screen'>
        <div className="hidden md:block">
          <Sidebar />
        </div>  
        <div className='flex flex-col w-full'>
          <div className="">
            <Navbar />
          </div>
          
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <ScrollArea className="h-full px-5 pt-3 lg:pt-0">
                {children} 
            </ScrollArea>
          </div>           
        </div>
      </section>
    )
  }