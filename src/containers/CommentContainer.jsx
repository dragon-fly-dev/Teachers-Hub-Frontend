/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "../components/Comment/Comment.jsx";
import fetchCommentsAction from "../redux/actions/fetchCommentsAction.jsx";
import postCommentAction from "../redux/actions/postCommentAction.jsx";

const CommentsContainer = (props) => {
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.fetchCourseCommentsReducer);
  useSelector((state) => state.addCommentReducer);
  const [commentBody, setCommentBody] = useState();

  useEffect(() => {
    dispatch(fetchCommentsAction(props.courseId));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentBody((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCommentAction(props.courseId, commentBody));
  };

  return (
      <div>
        <Comment data={commentData} onChange={handleChange} onSubmit={handleSubmit} />
      </div>
  );
};
export default CommentsContainer;
