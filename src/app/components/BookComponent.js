import React from "react";

export const BookComponent = (props) => {
	console.log("I am in book component");
	console.log(props.books);
	return (
		<div className="container">
			<h2>Books</h2>
			<table className="table">
				<thead>
					<tr>
						<th>ISBN</th>
						<th>Book Name</th>
						<th>Category</th>
						<th>Publisher</th>
						<th>Issued</th>
						<th>Available</th>
					</tr>
				</thead>
				<tbody>
					{props.books.map((book, i) =>
						<tr key={i}>
							<td>{book.isbn}</td>
							<td>{book.name}</td>
							<td>{book.category}</td>
							<td>{book.publisherName}</td>
							<td>{book.noOfBooksIssued}</td>
							<td>{book.noOfBooksAvailable}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);

}