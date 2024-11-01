import React from 'react'

import './styles.css';

function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    };

    return (
        <div className='item' onClick={handleRemove}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <span>{repo.description}</span> <br />
            <a href={repo.html_url} rel='noreferrer' target='blank'>Ver repositório</a>
            <a href="#" rel='noreferrer' className='remover'>Remover</a>
            <hr />
        </div>
    )
}

export default ItemRepo

