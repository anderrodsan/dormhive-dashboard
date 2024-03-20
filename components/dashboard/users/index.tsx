import React from "react";
import { UserTable } from "./UserTable";
import { userColumns } from "./user-columns";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { users } from "@/data/users";

async function getData() {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Fetch data from supabase
  const { data, error } = await supabase
    .from("user_attributes")
    .select("*, profile: profiles(email, username, avatar_url)")
    .eq("dorm_id", "8b67a025-9c62-43bd-b4d8-a5fe852762c3");
  if (error) {
    console.error("Error fetching groups:", error);
    return null;
  }

  // Map the fetched data to restructure it according to the User type
  const transformedData = data.map((item) => ({
    id: item.id,
    room: item.room,
    username: item.profile.username,
    avatar_url: item.profile.avatar_url,
    email: item.profile.email,
  }));

  return transformedData;
}

export default async function UsersList() {
  //const users = await getData();

  return (
    <div className="flex-1 overflow-y-auto">
      <UserTable columns={userColumns} data={users} />
    </div>
  );
}
