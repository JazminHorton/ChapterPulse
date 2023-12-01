import Link from "next/link";

export default function Home() {

  const containerStyle = {
    backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fanime-library%2F2&psig=AOvVaw3WVu8ZaMsK309-bEee8uID&ust=1701477594489000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCwi4-A7YIDFQAAAAAdAAAAABAE")',
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
//2. create home page
//3. create profile page
//4. create reading list page
//5. add functionality to pages (adding manga to reading lists, searching for manga, etc.)
//6. add styling to pages
//Note: I have to wait for the API from MAL before I can add the manga data to the pages.
//So until then, I'll just add some filler data to the pages and then replace it with the API data later.
//Make the pages and then write the code for the API data without the API data. like "" instead of the actual data.