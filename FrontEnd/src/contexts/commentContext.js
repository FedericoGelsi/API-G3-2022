import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import mock from '../data/data.json';
const CommentContext = createContext();

class Comment {
  constructor(id, text, score, createdAt, userEmail, classId) {
    this.id = id;
    this.text = text;
    this.score = score;
    this.createdAt = createdAt;
    this.userEmail = userEmail;
    this.classId = classId;
  }

  static from(json) {
    return Object.assign(new Comment(), json);
  }
}

const url = "";
async function getComments() {
  try {
    // const response = await fetch(url);
    let comments = [];
    // await response.json().forEach((comment) => {
    //   comments.push(Comment.from(comment));
    // });
    return comments;
  } catch (error) {
    return console.error(error);
  }
}

async function deleteComment(commentId) {
  const options = {
    method: "DELETE",
  };
  try {
    const response = await fetch(url + commentId, options);
    return await response.json();
  } catch (error) {
    return console.error(error);
  }
}

async function createComment(comment) {
  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(comment),
  // };
  // try {
  //   const response = await fetch(url, options);
  //   return await Comment.from(response.json());
  // } catch (error) {
  //   return console.error(error);
  // }
  return new Comment(1, "", 20, new Date(), "alumno@mail.com", 10);
}

async function updateComment(comment) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  };
  try {
    const response = await fetch(url + comment.id, options);
    return await response.json();
  } catch (error) {
    return console.error(error);
  }
}

export function CommentProvider({ children }) {
  const [commentSection, setCommentSection] = useState(mock.comments); //getComments());
  const userContext = useContext(UserContext);
  const addComment = (data) => {
    let newComment = createComment(data);
    setCommentSection([...commentSection, {
      id: 1,
      text: "sadasda",
      createdAt: "Just Now",
      username: "hola@gmail.com",
    }]);
  };

  const deleteComment = (commentId) => {
    // deleteComment(commentId);
    setCommentSection(
      commentSection.filter((comment) => comment.id !== commentId)
    );
  };
  return (
    <CommentContext.Provider
      value={{
        commentSection,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export default CommentContext;
