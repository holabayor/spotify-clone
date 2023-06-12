"use client";

import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { }, []);
    return (
        <>
            ModalProvider
        </>
    );
};

export default ModalProvider;