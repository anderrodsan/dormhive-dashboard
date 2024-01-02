"use client";

import { useUser } from "@/lib/store/user";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect } from "react";

export default function SessisonProvider() {
	const setUser = useUser((state) => state.setUser);

    const supabase = createClient();

	useEffect(() => {
		readSession();
		// eslint-disable-next-line
	}, []);

	const readSession = async () => {
		const { data: userSesssion } = await supabase.auth.getSession();

		if (userSesssion.session) {
			const { data } = await supabase
				.from("profiles")
				.select("*")
				.eq("id", userSesssion.session?.user.id)
				.single();
			setUser(data);
		}
	};

	return <></>;
}