import React, {PropTypes} from 'react';
const Field =(props) =>(
	<div>
	<label>{props.label}</label>
	<input 
		onChange={props.onChange}
		type={props.textarea ? 'textarea' :'text'}
		value={props.value}
	/>
	</div>

	);




Field.defaultProps={

	textarea:false,
}

export default Field;