import React from 'react';
import ReactLoading from 'react-loading';


const loader = {
    height: '40px',
    width: '40px',
    fill: '#017BFF',
    marginLeft: '45%',
    marginRight: '45%',
    marginTop: '20px',
    
}
 
const Loading = ({ type, color }) => (
    
<div>

    <ReactLoading type={'spinningBubbles'} color={'#017BFF'} height={40} width={40} position={'relative'} style={loader}/> 
</div>
        
);
 
export default Loading;