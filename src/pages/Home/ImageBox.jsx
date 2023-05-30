import React from 'react';
import doc1 from '../../assets/header/doc-1.png'
import doc2 from '../../assets/header/doc-2.png'
import doc3 from '../../assets/header/doc-3.png'

const ImageBox = () => {
    return (

        <>
            <div className='md:relative static mt-4 md:-mt-8'>
                <img src={doc1} alt="" className='md:w-48 w-36 absolute md:-top-12 left-10' />
                <img src={doc2} alt="" className='md:w-48 w-36 absolute md:top-4 md:left-40 left-24 -bottom-36 md:bottom-0 -mb-12 md:-mb-0' />
                <img src={doc3} alt="" className='md:w-48 w-36 absolute md:-top-20 md:right-28' />
            </div>
        </>

    );
};

export default ImageBox;