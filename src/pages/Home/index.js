import React, { useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
<<<<<<< HEAD
  const { dataBlog } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
=======
  // const [dataBlog, setDataBlog] = useState([]);
  const { dataBlogs, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log("state global: ", stateGlobal);
  console.log("data blog global: ", dataBlogs);
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "UPDATE_NAME" });
    }, 3000);

>>>>>>> 74d1ead09a8cca1df3fb1a8cdfe761558a3cacd5
    Axios.get("http://localhost:4000/v1/blog/posts?page=2&perPage=2")
      .then((result) => {
        const responseAPI = result.data;

<<<<<<< HEAD
=======
        // setDataBlog(responseAPI.data);
>>>>>>> 74d1ead09a8cca1df3fb1a8cdfe761558a3cacd5
        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, [dispatch]);
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <p>{name}</p>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlogs.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              image={`http://localhost:4000/${blog.image}`}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
