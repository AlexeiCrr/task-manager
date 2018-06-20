import React from 'react';
import { Link } from 'react-router-dom';

// Export a stateless functional component
// description, amount, createdAt

const ExpenseListItem =   ({dispatch, id, description, amount, createdAt}) => {
   return (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>

    </div>
   );
}

export default ExpenseListItem;