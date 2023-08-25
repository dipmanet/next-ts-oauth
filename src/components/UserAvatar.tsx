"use client";
import { User } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";

type Props = {
	user: Pick<User, "name" | "image">;
};

const UserAvatar = ({ user }: Props) => {
	return (
		<Avatar className="border-2 border-solid border-[whitesmoke] hover:scale-[1.02] active:scale-100">
			{user?.image ? (
				<div className="relative w-full h-full aspect-square">
					<Image fill src={user.image} alt={"profile image"} referrerPolicy="no-referrer" />
				</div>
			) : (
				<AvatarFallback>
					<span className="sr-only">{user?.name}</span>
				</AvatarFallback>
			)}
		</Avatar>
	);
};

export default UserAvatar;
