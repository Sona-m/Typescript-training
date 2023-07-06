import React from 'react';

type ListsProps<T> = {
    items: T[];
}

const Lists = <T extends {}>({ items }: ListsProps<T>) => {
    return (
        <div>
            {items.map((item) => <li key={item.toString()}>{item.toString()}</li>)}
        </div>
    );
}

export default Lists;




