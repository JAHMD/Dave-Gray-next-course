import UserPosts from "@/components/UserPosts";
import { getUserData } from "@/lib/getUserData";
import { getUserPosts } from "@/lib/getUserPosts";
import { Suspense } from "react";

const UserPage = async ({
	params: { userId },
}: {
	params: { userId: string | number };
}) => {
	const userData = getUserData(userId);
	const userPosts = getUserPosts(userId);
	const user = await userData;

	return (
		<section>
			<h1>{user.name}</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<UserPosts postPromise={userPosts} />
			</Suspense>
		</section>
	);
};

export default UserPage;
