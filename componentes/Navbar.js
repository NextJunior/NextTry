import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <a href='/'><h1>Ninja List</h1></a>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/sobre"><a>Sobre</a></Link>
      <Link href="/lista-detalles"><a>Ninja Listing</a></Link>
    </nav>
);
}
 
export default Navbar;




