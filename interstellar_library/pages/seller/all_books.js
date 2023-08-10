import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

// Dynamic Imports
const _Layout = dynamic(() => import('../components/layout/_layout'))
const _Title = dynamic(() => import('../components/layout/_title'))

export default function All_Books() {




    return(
        <>
            <_Layout>
                
            </_Layout>
        </>
    )
}