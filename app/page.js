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
        <a className="flex flex-col items-center justify-center">
          <img
          src="https://i.etsystatic.com/14675479/r/il/4fbb5b/5124235955/il_fullxfull.5124235955_hatu.jpg"
          alt="ChapterPulse Logo"
          className="w-32 h-32 rounded-full mr-4"
        />
        </a>
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
                  <Link href="/layout">Log out</Link>
                </button>
              </li>
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="/manga">Manga</Link>
                </button>
              </li>
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="/mangaList">Your List</Link>
                </button>
              </li>
              <li className = "mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="./pages/SearchManga">Search for Manga</Link>
                </button>
              </li>
              <li className = "mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="/profile">Profile</Link>
                </button>
              </li>
              </ul>
          </div>
        </ul>
      </nav>
    </main>
  );
}

//So I started hardcoding mangainfo into the page, I've tried to make it so that the page will display the manga info from the api, but I'm not sure how to do that
//I might scrap the search page and maybe make a page that just has sections by genre, and then you can click on the genre and it will take you to a page with all the manga in that genre
//but I have a list page, and it looks nice.
//Delete button works, haven't tested the add button yet
//The edit button doesn't work, not sure why
//I've added a profile page, but it's just a placeholder for now. But it looks good so I might keep it
//The manga recommendation page works and looks nice so far.
//Right now I'm just hard coding manga info into the 'manga' and 'list' pages to add content there.
//I've pretty much given up on getting the api to work, I'm just going to hard code the manga info into the pages