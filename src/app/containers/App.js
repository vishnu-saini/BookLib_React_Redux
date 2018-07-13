import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import '../App.css';
import { Header } from "../components/Header";
import { StudentComponent } from "../components/StudentComponent";
import { BookComponent } from "../components/BookComponent";
import { Footer } from "../components/Footer";
import { addStudent } from "../actions/StudentActions";
import { addBook } from "../actions/BookActions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    var menuItems = ["Home", "Contacts", "Practice Demos"];
    return (
      <Router>
        <div className="App">
          <Header webSiteName="React Practice" menuItems={menuItems} />
          <Route path={"/students"} render={(props) => <StudentComponent students={this.props.students} />} />
          <Route path={"/books"} render={(props) => <BookComponent books={this.props.books} />} />
          <Footer />
        </div>
      </Router>
    );
  }

  componentDidMount() {
    fetch('http://localhost:8080/booklib/api/book?page=1&limit=5&authorid=1')
      .then(response => response.json())
      .then(data => {
        data.data.books.forEach(function (book) {
          this.props.addBook(book);
        }, this);
      });

    fetch('http://localhost:8080/booklib/api/student')
      .then(response => response.json())
      .then(data => {
        console.log("hii checking data",data);
        data.data.students.forEach(function (student) {
          console.log("hii checking student",student);
          this.props.addStudent(student);
        }, this);
      });
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.student,
    books: state.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => {
      dispatch(addStudent(student))
    },
    addBook: (book) => {
      dispatch(addBook(book))
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);

