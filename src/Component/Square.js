import React from 'react';

class Square extends React.Component {
    
    render() {
        let { value } = this.props;
        return(
            <button className='square'  onClick={() => this.props.onClick() }>
                { value }
            </button>
        )
    }
}

 export default Square;

