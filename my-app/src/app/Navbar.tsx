import guts from '../../public/guts.jpg'
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div className="w-full items-center justify-evenly">
        <ul className="flex justify-between max-w-screen-sm mx-auto p-8">
          <li><a href="/"className="text-blue-600 hover:text-blue-400 underline">Home</a></li>
          <li><a href="/about"className="text-blue-600 hover:text-blue-400 underline">About me</a></li>
          <li><a href="/contact" className="text-blue-600 hover:text-blue-400 underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
