/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';

export const onRenderBody = ({ setPreBodyComponents, setBodyAttributes }) => {
    setBodyAttributes({
        style: {
            cursor: 'none',
        },
    });
    setPreBodyComponents([
        <div   
            id='cursor-div'
            key='cursor-div'
            className='cursor cursor--small'
        />,
        <canvas
            id='cursor-canvas'
            key='cursor-canvas'
            className='cursor cursor--canvas'
        />,
    ]);
};