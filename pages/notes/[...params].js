import React from 'react';
import { useRouter } from 'next/router';

const Note = () => {
    const router = useRouter();

    const { params } = router.query;
    return (
        <h1>
            Note 
        </h1>
    );
};
export default Note;