"use client"

import * as React from "react"

import { createClient } from "@/utils/supabase/client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { UUID } from "crypto"
import { Trash2 } from "lucide-react"
import { Group } from "@/lib/types/Groups"
import { useRouter } from "next/navigation"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"


export default function DeleteGroup({ 
    group
}: {
    group: Group
}) {

    const router = useRouter();

    const handleDelete = async () => {

        const supabase = createClient();

        const { error } = await supabase
            .from('groups')
            .delete()
            .eq('id', group?.id);
    
        if (error) {
            console.error('Error deleting a group:', error);
        }
        else {
            router.refresh()
        }

    }

    return(
        <AlertDialog>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <AlertDialogTrigger asChild>
                                <Trash2 size={16} className="hover:scale-125 cursor-pointer"/>
                        </AlertDialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={10} className="text-xs">Delete Group</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. "{group?.name}" will permanently delete this group and its' subgroups.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}