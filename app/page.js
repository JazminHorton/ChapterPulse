import Link from "next/link";

export default function Home() {
  return (
    <header className='flex min-h-screen flex-col items-center justify-center p-24'>
      <nav className="bg-black text-white border border-white p-4 rounded-lg text-center">
        <h1 className="text-6xl text-white mb-6">ChapterPulse</h1>
        <div className="group hover:text-green-500">
        </div>
        <ul className="list-none p-0">
          <div className="list-horizontal mt-4">
            <ul className="list-none p-0 flex">
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="/layout">Log in</Link>
                </button>
              </li>
              </ul>
          </div>
        </ul>
      </nav>
    </header>
  );
}

