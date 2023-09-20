// frontend/src/components/CommentArray.js

import React, { useState, useEffect } from 'react';

const CommentArray = ({ currentPage }) => {

    const commentObject = [
          {
            "comment": "Great service! Highly recommended.",
            "username": "Smith",
            "date": "2023-08-27",
            "rating": 9
          },
          {
            "comment": "Exceptional work on our Node.js project.",
            "username": "Johnson",
            "date": "2023-03-17",
            "rating": 9
          },
          {
            "comment": "The team at this server development company is top-notch.",
            "username": "Brown",
            "date": "2023-07-05",
            "rating": 9
          },
          {
            "comment": "Outstanding support and expertise in Node.js.",
            "username": "Davis",
            "date": "2023-06-22",
            "rating": 9
          },
          {
            "comment": "Very satisfied with their services.",
            "username": "Wilson",
            "date": "2023-05-10",
            "rating": 9
          },
          {
            "comment": "Impressive Node.js development skills!",
            "username": "Miller",
            "date": "2023-04-30",
            "rating": 9
          },
          {
            "comment": "Always reliable for server development.",
            "username": "Harris",
            "date": "2023-02-15",
            "rating": 9
          },
          {
            "comment": "Excellent work with Node.js projects.",
            "username": "Clark",
            "date": "2023-06-10",
            "rating": 9
          },
          {
            "comment": "Highly skilled team in Node.js development.",
            "username": "Lewis",
            "date": "2023-07-18",
            "rating": 9
          },
          {
            "comment": "Top-notch server development services!",
            "username": "Walker",
            "date": "2023-04-05",
            "rating": 9
          },
          {
            "comment": "Always a pleasure working with them.",
            "username": "Martin",
            "date": "2023-09-03",
            "rating": 9
          },
          {
            "comment": "Excellent communication and expertise.",
            "username": "Allen",
            "date": "2023-03-08",
            "rating": 9
          }
    ]
    useEffect(() => {
        const interval = setInterval(() => {
            const path = window.location.pathname;
            if(path==="/home"){
                var randomComment = Math.floor(Math.random() * commentObject.length);
                document.getElementById("comment-array-comment").innerHTML = "\"" + commentObject[randomComment].comment + "\"";
                document.getElementById("comment-array-userdate").innerHTML = "~ " + commentObject[randomComment].username + ", " + commentObject[randomComment].date;
            }
        }, 15000);
    },[]);
    
    //add rating with starts out of 10 (5 stars, with halfstars)

  return (
    <>
        <div className="comments" id="comment-array">
            <i id="comment-array-comment">"Excellent communication and expertise."</i>
            <h5 id="comment-array-userdate">~ Allen, 2023-03-08</h5>
        </div>
    </>
  );
};

export default CommentArray;
