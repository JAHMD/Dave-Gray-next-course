export const getUserData = async (
	userId: string | number
): Promise<UserType> => {
	const userData = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);
	return userData.json();
};
