import React from "react";
import BlogStanderd from "../components/Blog-standerd/blog-standerd";
import blogs from "../data/blog1.json";
import { useRouter } from "next/router";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const BlogDark = () => {
  const router = useRouter();
  const { page } = router.query;
  const currentPage = parseInt(page) || 1;
  
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("dark");
    return () => {
      document.querySelector("body").classList.remove("dark");
    };
  }, []);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <section className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="cont text-center">
                <h1 className="mb-10 color-font">Our Blog</h1>
                <p>
                  All the latest news, insights, and updates from our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogStanderd blogs={blogs} currentPage={currentPage} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogDark;
