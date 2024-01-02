"use client"

import { CalendarIcon } from "@radix-ui/react-icons"


async function getDate() {
    const months = [
      "Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug",
      "Sep", "Oct", "Nov", "Dec"
    ];
  
    const today = new Date();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const date = today.getDate();
  
    return `${date} ${month}, ${year}`;
}

export default async function DateInfo() {

  const currentDate = await getDate();

  return (
    <div className='flex flex-row items-center gap-2 text-slate-500'>
        <CalendarIcon />
        <h3 className='text-sm'>{currentDate}</h3>
    </div>
  )
}


// Shows the time if today, otherwise just the day
export async function formatDate( dateTime: string) {
  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });

    const now = new Date();
    const today = now.getDate();


    if (today == day) {
      // Format as time "20:30"
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      return formattedTime;
    } else {
      // Format as date "30 Jan"
      const formattedDate = `${day} ${month}`;
      return formattedDate;
    }
  };

  const formattedDateTime = formatDate(dateTime);

  return formattedDateTime
};

