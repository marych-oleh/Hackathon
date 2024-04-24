import React, { useRef, useEffect } from 'react';
import './SelectList.scss';

import { NavLink } from 'react-router-dom';

//before breakpoint it's a select list, and after its a common list
export default function SelectList({ items, title }) {
	const breakPoint = 767.98;
	const bodyRef = useRef(null);
	const contentRef = useRef(null);
	let contentWidth = 0;

	const selectListRef = useRef(null);

	function setHeight(height) {
		setTimeout(function () {
			window.requestAnimationFrame(
				() => (bodyRef.current.style.height = height + 'px')
			);
		}, 0);
	}
	useEffect(() => {
		//initialise height
		if (window.innerWidth < breakPoint) {
			setHeight(0);
		} else {
			setHeight(contentRef.current.offsetHeight);
		}
		// change height and styles depends on the width of screen
		function handleResize() {
			if (window.innerWidth < breakPoint) {
				if (selectListRef.current.classList.contains('big')) {
					selectListRef.current.classList.remove('big');
					const title =
						selectListRef.current.querySelector('.selectList__title');
					if (title.classList.contains('_active')) {
						title.classList.remove('_active');
					}
					setHeight(0);
				}
				if (contentWidth != contentRef.current.offsetHeight) {
					contentWidth = contentRef.current.offsetHeight;
				}
			} else {
				if (!selectListRef.current.classList.contains('big')) {
					selectListRef.current.classList.add('big');
				}
				if (contentWidth != contentRef.current.offsetHeight) {
					contentWidth = contentRef.current.offsetHeight;
					setHeight(contentRef.current.offsetHeight);
				}
			}
		}

		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	function showBody(e) {
		if (e.target.closest('.selectList').classList.contains('big')) return;
		const title = e.target.closest('.selectList__title');
		if (!title.classList.contains('_active')) {
			setHeight(contentRef.current.offsetHeight);
			title.classList.add('_active');
		} else {
			setHeight(0);
			title.classList.remove('_active');
		}
	}
	return (
		<ul ref={selectListRef} className="selectList">
			<div onClick={(e) => showBody(e)} className="selectList__title">
				{title}
			</div>
			<div ref={bodyRef} className="selectList__body">
				<div ref={contentRef} className="selectList__content">
					{items.map((item) => (
						<li key={item.title} className="selectList__element">
							<NavLink to={item.href} className="selectList__link">
								{item.title}
							</NavLink>
						</li>
					))}
				</div>
			</div>
		</ul>
	);
}
