import Link from "next/link";

const Navbar = () => {
	return (
		<header>
			<nav className="flex justify-between items-center text-xl font-semibold py-6 container px-[2rem] mx-auto">
				<Link href="/">My app</Link>
				<div className="">
					<Link href="/users">Users</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
