import React from 'react';

const Header = () => {
    return (
        <div className="text-center my-3">
            <h2 className="display-3 text-white fw-normal">Red Arrow Aircraft</h2>
            <h6 className="text-white">Build your own aircraft management team</h6>
            <h2 className="text-danger">
            Budget
                <span className="badge bg-danger ms-2">$ 99999</span>
            </h2>
        </div>
    );
};

export default Header;