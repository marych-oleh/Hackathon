import React, { useEffect, useRef } from 'react';
import './PopupList.scss';
// items = [{title: "", body: <body>}]
function PopupList({ className, items, initiallyOpened = false, headerColor = "white"}) {
	const classNames = ['popup-list__element', className];
	const popupList = useRef();
	useEffect(() => {
		const listBodyContainers = popupList.current.querySelectorAll(
			'.popup-list__body-container'
		);
		if (initiallyOpened == false) {
			listBodyContainers.forEach((e) => (e.style.height = 0));
		} else {
			listBodyContainers.forEach(
				(e) => (e.style.height = e.firstElementChild.offsetHeight + 'px')
			);
		}
		window.addEventListener('resize', function () {
			listBodyContainers.forEach((listBodyContainer) => {
				if (listBodyContainer.offsetHeight == 0) return;
				listBodyContainer.style.height =
					listBodyContainer.firstElementChild.offsetHeight + 'px';
			});
		});
	}, [items]);
	function handleListElement(e) {
		const listElement = e.target.closest('.popup-list__element');
		const arrow = listElement.firstElementChild.firstElementChild;
		const listBodyContainer = listElement.lastElementChild;
		const listBody = listBodyContainer.firstElementChild;
		arrow.classList.toggle("active");
		if (listBodyContainer.offsetHeight == 0) {
			listBodyContainer.style.height = listBody.offsetHeight + 'px';
		} else {
			listBodyContainer.style.height = 0;
		}
	}
	return (
		<div ref={popupList} className="popup-list">
			{items.length == 0 ?
				''
			:	items.map((item, idx) => {
					return (
						<div key={idx} className={classNames.join(' ')}>
							<div style={{backgroundColor: headerColor}}
								onClick={(e) => handleListElement(e)}
								className="popup-list__title"
							>
								<div
									className={
										initiallyOpened ?
											'popup-list__arrow active'
										:	'popup-list__arrow'
									}
								></div>
								{item.title}
							</div>

							<div className="popup-list__body-container">
								<div className="popup-list__body">{item.body}</div>
							</div>
						</div>
					);
				})
			}
		</div>
	);
}

export default PopupList;
