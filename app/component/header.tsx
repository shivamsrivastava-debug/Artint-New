import Link from "next/link";

function Header() {
  return (
    <div className="fixed top-0">
      <Link href="#experience">Experience</Link>
      <Link href="#vision">Vision</Link>
      <Link href="#collection">Collection</Link>
      <Link href="#visualRealms">Visuals-Realms</Link>
      <Link href="commision">CommisionArT</Link>
      <Link href="#future">Future</Link>
      <Link href="#footer">Footer</Link>
    </div>
  );
}

export default Header;
