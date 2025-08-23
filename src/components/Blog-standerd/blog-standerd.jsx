/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogStanderd = ({ blogs, currentPage = 1 }) => {
  // Define blogs per page - show exactly 3 per page
  const blogsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get current blogs to display (3 or fewer)
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {currentBlogs.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === currentBlogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem.id}
                >
                  <div className="img">
                    <Link href={`/blog-details/blog-details-dark?id=${blogItem.id}`}>
                      <a>
                        <img src={blogItem.image} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <Link href={`/articles`}>
                          <a className="date">
                            <span className="num">{blogItem.date.day}</span>
                            <span>{blogItem.date.month}</span>
                          </a>
                        </Link>
                        <div className="tags">
                          {blogItem.tags &&
                            blogItem.tags.map((tag, index) => (
                              <Link key={index} href="/articles">
                                {tag}
                              </Link>
                            ))}
                        </div>
                        <h4 className="title">
                          <Link href={`/blog-details/blog-details-dark?id=${blogItem.id}`}>
                            {blogItem.title}
                          </Link>
                        </h4>
                        <p>
                          {blogItem.content
                            ? blogItem.content.substring(0, 250) + "..."
                            : ""}
                        </p>
                        <Link href={`/blog-details/blog-details-dark?id=${blogItem.id}`}>
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  {/* Previous page button */}
                  {currentPage > 1 && (
                    <span>
                      <Link href={`/articles?page=${currentPage - 1}`}>
                        <a>
                          <i className="fas fa-angle-left"></i>
                        </a>
                      </Link>
                    </span>
                  )}

                  {/* Page numbers */}
                  {[...Array(totalPages)].map((_, i) => (
                    <span
                      key={i}
                      className={currentPage === i + 1 ? "active" : ""}
                    >
                      <Link href={`/articles?page=${i + 1}`}>
                        <a>{i + 1}</a>
                      </Link>
                    </span>
                  ))}

                  {/* Next page button */}
                  {currentPage < totalPages && (
                    <span>
                      <Link href={`/articles?page=${currentPage + 1}`}>
                        <a>
                          <i className="fas fa-angle-right"></i>
                        </a>
                      </Link>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
