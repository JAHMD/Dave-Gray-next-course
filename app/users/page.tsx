import { getAllUsers } from "@/lib/getAllUsers";
import Link from "next/link";

const Users = async () => {
	const users = await getAllUsers();

	return (
		<section>
			<div className="flex flex-col gap-y-4">
				{users.map((user: { name: string; id: string | number }) => (
					<Link href={`/users/${user.id}`} key={user.id}>
						{user.name}
					</Link>
				))}
			</div>
		</section>
	);
};

export default Users;
