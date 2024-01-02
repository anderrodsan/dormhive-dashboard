import { UUID } from "crypto"

import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
import { Profile } from "./Profile"
import { HelpCircle } from "lucide-react"


export type Request = {
    id: UUID
    room: string
    location: string
    title: string
    description: string
    img_url: string
    priority: string
    status: string
    profile: Profile
    created_at: string
}

export const statuses = [
{
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
},
{
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
},
{
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
},
{
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
},
]

export const priorities = [
{
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
},
{
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
},
{
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
},
{
    label: "Unknown",
    value: "unknown",
    icon: HelpCircle,
},
]