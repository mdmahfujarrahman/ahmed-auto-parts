import { useEffect, useState } from "react";

const useToken = user =>{
    const [token, setToken] = useState('')

    useEffect(() =>{
        const email = user?.user?.email
        const currentUser = {email: email}
        if(email){
            fetch(`https://ahmed-auto-parts.vercel.app/user/${email}`)
            .then(res => res.json())
            .then(data => {
                const accessToken = data.token;
                localStorage.setItem("accessToken", accessToken);
                setToken(accessToken);
            })
        }
        
        
    },[user])

    return[token, setToken]
    

}

export default useToken;