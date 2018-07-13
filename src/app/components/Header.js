import React from "react";

export const Header = (props) => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">{props.webSiteName}</a>
				</div>
				<ul className="nav navbar-nav">
					{props.menuItems.map((menuItem, i) => <li key={i}><a href="#">{menuItem}</a></li>)}
					<li className="active"><a href="/books">Books</a></li>
					<li className="active"><a href="/students">Students</a></li>

				</ul>
			</div>
		</nav>
	);
}