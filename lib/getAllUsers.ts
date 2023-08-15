export const getAllUsers = async (): Promise<UserType[]> => {
	const users = await fetch("https://jsonplaceholder.typicode.com/users");
	return users.json();
};
