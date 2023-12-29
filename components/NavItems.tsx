import Link from "next/link";

const Items = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Skills",
    path: "/#skills",
  },
  {
    id: 3,
    name: "Projects",
    path: "/#projects",
  },
  {
    id: 4,
    name: "Experience",
    path: "/#experience",
  },
  {
    id: 5,
    name: "Contact",
    path: "/#contact",
  },
];

const NavItems = () => {
  return (
    <nav className="flex items-center  flex-col md:flex-row gap-3">
      {Items.map((item) => (
        <div key={item.id}>
          <Link href={item.path}>{item.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default NavItems;
