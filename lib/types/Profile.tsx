import { UUID } from "crypto"




export type Profile = {
    id: UUID
    email?: string
    username?: string
    full_name?: string
    avatar_url?: string
}