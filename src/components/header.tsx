import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/form">Form</Link>
          </li>
          <li>
            <Link href="/calendar">Calendar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
