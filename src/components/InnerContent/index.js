import React from 'react';

const InnerContent = ({match}) => {
    return (
        <div className = "container-center">
            <h1>{match.params.pageId}</h1>
        </div>
    );
};

export default InnerContent;