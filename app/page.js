import Link from "next/link";

export default function Home() {

  const containerStyle = {
    backgroundImage: 'url("https://64.media.tumblr.com/3e49ab707747e5b1aff5b530221c1aae/tumblr_o7srycOJ9K1vupf7jo1_640.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24' style={containerStyle}>
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
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="/">Manga</Link>
                </button>
              </li>
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="/">List</Link>
                </button>
              </li>
              </ul>
          </div>
        </ul>
      </nav>
      <footer />
    </main>
  );
}

//Next order of business:
//1. Create a login page (done)
//2. create home page (Almost done, maybe include Header and Footer here)
//3. create profile page (scrapped)
//4. create reading list page (WIP)
//5. add functionality to pages (adding manga to reading lists, searching for manga, etc.)
//6. add styling to pages (WIP)
//Note: I have to wait for the API from MAL before I can add the manga data to the pages.
//So until then, I'll just add some filler data to the pages and then replace it with the API data later.
//Make the pages and then write the code for the API data without the API data. like "" instead of the actual data.