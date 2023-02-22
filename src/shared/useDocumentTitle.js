import {useEffect, useRef} from 'react';

const UseDocumentTitle = (title, prevailOnUnmount = false) => {
	const defaultTitle = useRef(document.title);

	useEffect(() => {
		document.title = title;
	}, [title]);

	useEffect(() => () => {
		if (!prevailOnUnmount) {
			document.title = defaultTitle.current;
		}
	}, [])
};

export default UseDocumentTitle;
