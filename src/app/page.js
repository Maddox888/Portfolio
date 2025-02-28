// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Hi, I'm [Your Name] 👋</h1>
      <p className="mt-4 text-lg text-gray-300">
        I’m a BCA student passionate about Web Development & Design.
      </p>
      <div className="mt-6">
        <Link href="/about">
          <a className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            About Me
          </a>
        </Link>
        <Link href="/projects">
          <a className="ml-4 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-700 transition-all">
            My Work
          </a>
        </Link>
      </div>
    </div>
  );
}
