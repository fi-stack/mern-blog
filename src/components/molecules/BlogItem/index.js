import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.scss";
import { Button, Gap } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum rerum
          ipsa neque quasi repellendus fuga exercitationem veritatis ipsum ullam
          dignissimos autem a libero quae doloremque, vitae nam nemo repudiandae
          accusamus?
        </p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
