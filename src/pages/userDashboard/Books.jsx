import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Navbar from "../components/navbar/Navbar";
// import "./Navbar.jsx";


const BooksUser = () => {
    
    const [books, setBooks] = useState([])

    useEffect(()=> {
        const fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data);
                // console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    },[]);

    const handleDelete = async (id) =>{
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        {/* <Navbar /> */}
           <div className="books">
                {books.map(book =>(
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt=""/>}
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                        <span>{book.price}</span>
                    </div>
                ))}
           </div>
    </div>
  )
}

export default BooksUser;