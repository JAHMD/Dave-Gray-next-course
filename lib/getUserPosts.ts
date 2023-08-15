export const getUserPosts = async (
	userId: string | number
): Promise<PostType[]> => {
	const userPosts = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
		{ cache: "no-store" }
	);
	return userPosts.json();
};
