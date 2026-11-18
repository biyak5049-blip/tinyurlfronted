
import React, { useState } from "react";
import axios from "axios";

const App = () => {

  const [longurl, setlongurl] = useState("");
  const [shorturl, setshorturl] = useState("");

  async function shortTheURL(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5050/save",
        { longURL: longurl }
      );

      setshorturl(response.data.shortURL);

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-800 to-pink-600 flex items-center justify-center p-5">

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-extrabold text-indigo-700 text-center mb-3">
          TinyURL
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Make your long URLs short and easy to share!
        </p>

        <form onSubmit={shortTheURL} className="flex flex-col gap-5">

          <input
            type="text"
            name="longurl"
            id="longurl"
            placeholder="Paste your long URL here..."
            value={longurl}
            onChange={(e) => setlongurl(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl p-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold p-4 rounded-xl shadow-lg transition duration-300"
          >
            Shorten URL
          </button>

        </form>

        {shorturl && (
          <div className="mt-7 p-5 bg-indigo-50 border border-indigo-100 rounded-xl text-center">

            <h3 className="font-bold text-indigo-800 mb-3">
              Your Short URL:
            </h3>

            <a
              href={shorturl}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 underline break-all"
            >
              {shorturl}
            </a>

          </div>
        )}

        <p className="text-gray-400 text-xs text-center mt-8">
          Simple • Fast • Easy to Share
        </p>

      </div>
    </div>
  );
};

export default App;
