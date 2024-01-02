import { UUID } from "crypto";



export type Iuser = {
	id: UUID;
	email: string;
	username: string;
	avatar_url: string;
} | null;

export type Idorm = {
    id: UUID
    name: string
    description?: string | null
    capacity: number
    members: number
} | null;

export type Ialert = {
    id: string
    title: string
    date: string
    text: string
    image: string
    creator: string
    role: string
}