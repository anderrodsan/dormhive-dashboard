import { UUID } from "crypto";
import { Container, Home, Users, Utensils } from "lucide-react";


export type Group = {
    id: UUID;
    name: string;
    icons: string;
    rooms: number;
    members: number;
    parentid: UUID | null;
    dormid: UUID;
    children?: Group[];
    subRows?: Group[];
  }

//Map Group Icons
export const groupIcons = [
  {
    label: "Group",
    value: "default",
    icon: Users,
  },
  {
    label: "Block",
    value: "block",
    icon: Home,
  },
  {
    label: "Floor",
    value: "floor",
    icon: Container,
  },
  {
    label: "Kitchen",
    value: "kitchen",
    icon: Utensils,
  },
]