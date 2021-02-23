import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";
import { Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur
        illo maiores laboriosam molestias illum ab error pariatur, repellendus
        aut consequatur, ullam velit ut iure reprehenderit veniam? Non, dolorem
        impedit.
      </p>
      <Gap height={20} />
      <Link title="Kembali Ke Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
