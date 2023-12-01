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
        <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjExNjAtMDM2LnBuZw.png" alt="ChapterPulse Logo" className="w-24 h-24 mr-2" />
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
                  <Link href="./components/random-manga">Manga</Link>
                </button>
              </li>
              <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="./components/manga-list">Your List</Link>
                </button>
              </li>
              <li className = "mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="./components/search-manga">Search for Manga</Link>
                </button>
              </li>
              <li className = "mr-5 transition duration-300 ease-in-out transform hover:scale-105">
                <button className="inline-block p-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <Link href="./components/profile">Your Profile</Link>
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

//Notes:
//Profile, Search, List and Manga pages are empty right now but should be in a 'Components' or 'Pages' folder
//I'm not sure if I should make the log in feature the first required page or not. Like if it should be the starting one or if I should make it so that you can access the other pages without logging in.
//I'm also not sure if I should make the log in page a pop up or not. I think it would be better if it was a pop up but I'm not sure how to do that.
//I also wanna give the website a logo but I'm not sure how to incorporate that into the website. Both functionality and design wise.
//But either way, if I can do these things, I think the website will be pretty much done.
//If worst comes to worst and I can't get the API in time, I'll ask Aaron in person if I can either not use an API or just hard code manga in that link to MAL as examples
//Like I wanted to do a carousel of manga on the home page but I can't do that without the API so I'll just hard code some manga in there as examples and link them to MAL (need to figure out how to do that)
//I also need to ask Aaron about Vercel and the log in feature. My Vercel account is made with my github account so I'm not sure if I can make it so that you can log in with your own account or not using github in my deployment (it doesn't work when deployed)
//Other than that though, this should be ezpz, I just need to figure out how to do these things and then I'm done.
// I'm not sure how strict Aaron will be on marking in terms of features or design so maybe I'll check with him.
//HUGE NOTE: MARKING IS BASED ON THE SELF-REFLECTION, NOTE THE ACTUAL PROJECT. SO LONG AS SOMETHING IS THERE, IT'S FINE. :D
//The only thing I'm worried about is the API. I'm not sure if I'll be able to get it in time. I'll try my best though.
//But so long as something is there, it's okay since the marking for the project is just the self-reflection.


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