import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'




export default function LoadingStatistics() {

  const cardTitles = ['Tenants', 'Capacity', 'Free Rooms', 'New Tasks'];

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {cardTitles.map((title, index) => (
            <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                >
                    {/* Your SVG paths */}
                </svg>
                </CardHeader>
                <CardContent>
                <div className='pb-2'>
                    <Skeleton className='w-[100px] h-[30px] rounded-full' />
                </div>
                <Skeleton className='w-[100px] h-[10px] rounded-full' />
                </CardContent>
            </Card>
            ))}
    </div>
  )
}
