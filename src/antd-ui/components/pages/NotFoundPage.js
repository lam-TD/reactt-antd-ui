import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Result} from 'antd';

const NotFoundPage = ({subTitle = 'Sorry, the page you visited does not exist.', to = '/'}) => (
	<Result
		status="404"
		title="404"
		subTitle={subTitle}
		extra={<Button type="primary"><Link to={to}>Back Home</Link></Button>}
	/>
);

export default NotFoundPage;
