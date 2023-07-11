import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="py-2 px-1">
        <nav className="nav flex justify-between">
          <Link href="/">Home</Link>
          <Link href="/new">New To Do Item</Link>
        </nav>
      </header>
    </>
  );
};