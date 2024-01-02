"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { 
    DialogTrigger, 
    DialogTitle, 
    DialogDescription, 
    DialogHeader, 
    DialogFooter, 
    DialogContent, 
    Dialog, 
    DialogClose
} from "@/components/ui/dialog"

import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Bed, X } from "lucide-react"
import { Group } from "@/lib/types/Groups"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function EditRooms({ 
    group
  }: {
    group: Group
  }) {

  const [room, setRoom] = React.useState<string>('');
  const [startRoom, setStartRoom] = React.useState<string>('');
  const [endRoom, setEndRoom] = React.useState<string>('');
  

  const [assignedRooms, setAssignedRooms] = React.useState<string[]>([]);

  //fetch rooms
  const getRooms = async () => {
    
  }

  // Submit room on enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission on Enter key press
      handleNewRoom();
      handleNewRoomRange();
    }
  };

  // Handle adding new room
  const handleNewRoom = async () => {
    
    if (room !== '' && !assignedRooms.includes(room)) {
      setAssignedRooms([...assignedRooms, room].sort());
    }

    setRoom('');
  }

  const handleNewRoomRange = () => {
    const range = createRoomRange(startRoom, endRoom);
    if (range.length > 0) {
      const updatedRooms = Array.from(new Set([...assignedRooms, ...range])).sort();
      setAssignedRooms(updatedRooms);
      setStartRoom('')
      setEndRoom('')
    }
  };

  // Remove room
  const removeRoom = (room: string) => {
    const updatedRooms = assignedRooms.filter(r => r !== room);
    setAssignedRooms(updatedRooms);
  };

  function createRoomRange(startRoom: string, endRoom: string): string[] {
    const start = parseInt(startRoom, 10);
    const end = parseInt(endRoom, 10);
    
    if (isNaN(start) || isNaN(end) || start > end) {
      return [];
    }
  
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i.toString());
    }
    
    return range;
  }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} variant="secondary">
          <div className="hover:scale-105 flex flex-row">
            <p className="pr-2">{group?.rooms}</p>
            <Bed size={16}/>
          </div>
        </Button>
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
          <DialogHeader>
                <DialogTitle>Rooms</DialogTitle>
                <DialogDescription>Assign the rooms that have access to <span className="font-bold">"{group?.name}"</span>.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <Card className="p-2 space-y-2">
              
              <div className="h-[300px]">
                {assignedRooms.length === 0 ? (
                  <p className="text-sm font-light ">Start adding rooms</p>
                ) : (
                  <div className="">

                    <ScrollArea className="h-[300px]">
                      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
                        {assignedRooms.map((room) => (
                          <Badge key={room} className="flex flex-nowrap flex-row justify-between">
                            <p>{room}</p>
                            <X
                              size={16}
                              className="cursor-pointer hover:scale-110 text-slate-500"
                              onClick={() => removeRoom(room)}
                            />
                          </Badge>
                          
                        ))}
                      </div>
                    </ScrollArea>
                    <button className="text-xs float-right flex flex-row pt-1" onClick={() => setAssignedRooms([])}>Clear All <X size={16}/></button>
                  </div>
                )}
              </div>
              
            </Card>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="singleRoom">
                Room
              </Label>
              <div className="col-span-3 flex flex-row gap-2">
                <Input 
                  name="singleRoom" 
                  type="text"
                  value={room} 
                  placeholder="247"
                  onChange={(e) => setRoom(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e)}
                  />
                <Button onClick={handleNewRoom} size={"sm"}>Add</Button>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right truncate" htmlFor="roomRange">
                Room Range
              </Label>
              <div className="col-span-3 flex flex-row gap-2 items-center">
                <Input name="roomRangeStart"
                type="text"
                value={startRoom} 
                placeholder="Start (200)" 
                onChange={(e) => setStartRoom(e.target.value)}
                />
                <p>-</p>
                <Input 
                  name="roomRangeEnd" 
                  type="text"
                  value={endRoom} 
                  placeholder="End (210)" 
                  onChange={(e) => setEndRoom(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e)}
                />
                <Button size={"sm"} onClick={handleNewRoomRange}>Add</Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <div className="flex flex-row justify-between w-full">
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </div>
              
          </DialogFooter>
        </DialogContent>
      </form>
      
    </Dialog>
  )
}

