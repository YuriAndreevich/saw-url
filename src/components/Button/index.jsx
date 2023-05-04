import React from 'react'

function Button({ children, onClick }) {
    return (
        <button type="submit" onClick={onClick} style={{ fontFamily: 'Nunito' }}>
            {children}
        </button>
    )
}

export default Button