import React from 'react';
//imports spinner icon from font awesome to display loading screen
export const Loading = () => {
    return (
        <div className="col">
            <i className="fa fa-refresh fa-spin fa-3x fa-fw text-primary" />
            <p>Loading....</p>
        </div>
    );
}