import FeatureHeader from "@/components/dashboard/FeatureHeader";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Mail } from "lucide-react";


export default async function TasksLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    

    return (
        <section className='w-full h-full'>
            <ScrollArea className='flex-grow'>
                {children}                
            </ScrollArea>
        </section>
    )
  }