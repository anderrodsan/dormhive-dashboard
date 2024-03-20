//id, room, location, title, description, img_url, priority, status, created_at, profile: profiles(email)

export const tasks = [
  {
    id: 1,
    room: 204,
    location: "Block A",
    title: "Broken toilet",
    description: "I have issues in my toilet when flushing",
    img_url: "https://www.svgrepo.com/show/10678/avatar.svg",
    priority: "high",
    status: "todo",
    profile: {
      id: 1,
      email: "john@example.com",
      username: "john",
      full_name: "John Doe",
      avatar_url: "https://www.svgrepo.com/show/61986/avatar.svg",
    },
    created_at: "2023-12-21 19:55:09+00",
  },
  {
    id: 2,
    room: 333,
    location: "Block C",
    title: "Annoying Neighbour",
    description: "My neighbour is really nosiy at night",
    img_url: "https://www.svgrepo.com/show/10678/avatar.svg",
    priority: "medium",
    status: "todo",
    profile: {
      id: 1,
      email: "alice@example.com",
      username: "alice",
      full_name: "Alice Smith",
      avatar_url: "https://www.svgrepo.com/show/10678/avatar.svg",
    },
    created_at: "2023-12-11 19:55:09+00",
  },
  {
    id: 3,
    room: 404,
    location: "Kitchen 2A",
    title: "Kitchen Sink Leak",
    description: "I have issues in my toilet when flushing",
    img_url: "https://www.svgrepo.com/show/10678/avatar.svg",
    priority: "high",
    status: "done",
    profile: {
      id: 1,
      email: "bob@example.com",
      username: "bob",
      full_name: "Bob Johnson",
      avatar_url: "https://www.svgrepo.com/show/63886/avatar.svg",
    },
    created_at: "2024-01-05 19:55:09+00",
  },
];

/**
 * 
 * export type Request = {
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
 */
