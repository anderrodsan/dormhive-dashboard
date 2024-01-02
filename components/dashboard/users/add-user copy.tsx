import * as React from "react"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
  } from "@/components/ui/dialog"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { UserPlus } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area"

  export default function AddUser(){

    // Sign up with password
    const handleNewUser = async (formData: FormData) => {

        const email = formData.get('email') as string
    

        console.log('email: ', email)
        console.log('room: ', value)
    }

    const rooms = [
        {
            value: "101",
            label: "101",
        },
        {
            value: "102",
            label: "102",
        },
        {
            value: "103",
            label: "103",
        },
        {
            value: "104",
            label: "104",
        },
        {
            value: "105",
            label: "105",
        },
        {
            value: "106",
            label: "106",
        },
        {
            value: "107",
            label: "107",
        },
    ]

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

  

    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button size={"sm"} className="text-xs py-[-1]">
                    <UserPlus size={16}/>
                </Button> 
            </DialogTrigger>
            <DialogContent>
                <form action={handleNewUser}>
                    <DialogHeader>
                        <DialogTitle>Add Tenant</DialogTitle>
                        <DialogDescription>
                            Add a new tenant by specifying their email and room.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                name="email"
                                placeholder="Introduce the email..."
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-right">
                                Room
                            </Label>
                            
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-full justify-between"
                                    >
                                    {value
                                        ? rooms.find((room) => room.value === value)?.label
                                        : "Select room..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0 overflow-hidden">
                                    <Command>
                                    <CommandInput placeholder="Search room..." />
                                    <CommandEmpty>No room.</CommandEmpty>
                                    <ScrollArea className="h-[200px]">
                                        <CommandGroup className="">
                                            {rooms.map((room) => (
                                            <CommandItem
                                                key={room.value}
                                                value={room.value}
                                                onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                                }}
                                            >
                                                <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === room.value ? "opacity-100" : "opacity-0"
                                                )}
                                                />
                                                {room.label}
                                            </CommandItem>
                                            ))}
                                        
                                        </CommandGroup>
                                    </ScrollArea>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <Button type="submit">Create</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );

  }