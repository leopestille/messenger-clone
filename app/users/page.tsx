'use client';

import { signOut } from "next-auth/react";

const Users = () => {
    return (
        <button onClick={() => signOut()}>
            Sair
        </button>
    );
}

export default Users;
