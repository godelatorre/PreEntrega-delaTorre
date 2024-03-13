import React from 'react';

const ItemListContainer = (props) => {
    console.log(props);

    return (
        <div style={{ marginTop: '50px' }}>
            <h1 className="fst-italic" style={{ color: 'yellow' }}>
  {props.greeting}
</h1>

        </div>
    );
};

export default ItemListContainer;