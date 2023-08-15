import React from "react";

const UserPosts = async ({
	postPromise,
}: {
	postPromise: Promise<PostType[]>;
}) => {
	const posts = await postPromise;

	return (
		<div className="flex flex-col">
			{posts.map((post) => (
				<article key={post.id}>
					<h1 className="text-xl font-bold">{post.title}</h1>
					<p className="text-gray-400">{post.body}</p>
				</article>
			))}
		</div>
	);
};

export default UserPosts;
