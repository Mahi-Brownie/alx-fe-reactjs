import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { searchUser } from "./services/githubService";

function App() {
    const [user, setUser] = useState(null);

    const handleSearch = async (username) => {
        try {
            const res = await searchUser(username);
            setUser(res.data);
        } catch (err) {
            console.error(err);
            setUser(null);
        }
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            <SearchBar onSearch={handleSearch} />
            <UserCard user={user} />
        </div>
    );
}

export default App;
