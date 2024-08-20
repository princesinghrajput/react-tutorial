import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  }

  const filteredUsers = users.filter(user =>
    user.login.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">GitHub User Finder</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search for users..."
          value={query}
          onChange={handleSearch}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-lg p-4 shadow-lg">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="rounded-full w-24 h-24 mx-auto"
            />
            <h2 className="text-xl font-bold text-center mt-4">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-500 mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
