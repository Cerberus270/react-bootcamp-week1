import { useState } from "react";

const useUser = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    const fetchUser = async (username) => {
        await fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setUser(data);
            });
    };





    return {
        user,
        setUser,
        setLoading,
        fetchUser,
        loading
    }
};

export default useUser;
