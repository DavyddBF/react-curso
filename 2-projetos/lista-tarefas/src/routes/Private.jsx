import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        async function checaLogin() {
            const unsub = onAuthStateChanged(auth, user => {
                if(user) {
                    const userData = {
                        uid: user.uid,
                        email: user.email
                    }

                    localStorage.setItem('@detalheUser', JSON.stringify(userData));

                    setLoading(false);
                    setSigned(true);
                } else {
                    setLoading(false);
                    setSigned(false);
                }
            })

            return () => unsub();
        }

        checaLogin();
    }, []);

    if(loading) {
        return <></>
    }

    if(!signed) {
        return <Navigate to='/' />
    }

    return children;
}