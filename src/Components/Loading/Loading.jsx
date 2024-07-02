import React from 'react';

const Loading = () => {
    return <>
        <section className='position-fixed top-0 end-0 start-0 bottom-0 bg-main d-flex justify-content-center align-items-center loading'>
            <i className='fa fa-spinner fa-spin text-white'></i>
        </section></>
}

export default Loading;
