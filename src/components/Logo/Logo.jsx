import React from 'react';

const Logo = (props) => {
    return (
        <h2 style={{ color: props.color || '#111' }}>A<span style={{ color: 'var(--theme)' }}><sub>2</sub></span>Z</h2>
    );
}

export default Logo;