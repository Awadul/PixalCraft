/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";
import SupabaseComments from "../Comments/supabase-comments";

const BlogDetails = ({ blogPost }) => {
  const messageRef = React.useRef(null);
  
  // Default blog post if none provided
  const post = blogPost || {
    title: "The Rise of Large Language Models: Transforming AI and Human Interaction",
    content: "Large Language Models (LLMs) have emerged as one of the most transformative technologies of the 21st century...",
    image: "/img/blog/b1.jpg",
    tags: ["LLMs", "AI", "Technology"],
    date: "15 Dec 2022",
    author: "Alex Morgan",
    readTime: "8 min read"
  };

  // Format date if it's an object
  const formattedDate = typeof post.date === 'object' && post.date.day && post.date.month
    ? `${post.date.day} ${post.date.month} 2022`
    : post.date || "15 Dec 2022";

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="blog-meta mb-30">
                        <div className="tags mb-20">
                          {post.tags && post.tags.map((tag, index) => (
                            <Link key={index} href="/articles">
                              <a className="tag">{tag}</a>
                            </Link>
                          ))}
                        </div>
                        <div className="info">
                          <span className="date">
                            <i className="far fa-clock"></i> {formattedDate}
                          </span>
                          <span className="author">
                            <i className="far fa-user"></i> by {post.author}
                          </span>
                          <span className="read-time">
                            <i className="far fa-eye"></i> {post.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <h4 className="extra-title">
                        {post.title}
                      </h4>
                      
                      <div className="spacial">
                        <p>
                          {post.content}
                        </p>
                      </div>

                      {post.id === 1 && (
                        <>
                          <h6>- The Evolution of Language Models</h6>
                          <p>
                            The journey of Large Language Models began with simple rule-based systems in the 1950s and 1960s. 
                            These early attempts at natural language processing relied on hand-crafted rules and dictionaries, 
                            making them rigid and limited in scope. The breakthrough came with the introduction of statistical 
                            approaches in the 1990s, which used probability models to predict word sequences.
                          </p>

                          <h6>- Transformer Architecture Revolution</h6>
                          <p>
                            The real game-changer was the introduction of the Transformer architecture in 2017. This innovation 
                            enabled models to process entire sequences of text simultaneously, rather than word by word, 
                            dramatically improving their understanding of context and relationships between words. The attention 
                            mechanism allowed models to focus on relevant parts of the input, leading to more coherent and 
                            contextually appropriate outputs.
                          </p>

                          <ul>
                            <li>
                              <span>01</span> Pre-training on massive text datasets enables broad language understanding
                            </li>
                            <li>
                              <span>02</span> Fine-tuning for specific tasks improves performance and reduces resource requirements
                            </li>
                            <li>
                              <span>03</span> Multi-modal capabilities allow processing of text, images, and other data types
                            </li>
                            <li>
                              <span>04</span> Few-shot learning enables adaptation to new tasks with minimal examples
                            </li>
                            <li>
                              <span>05</span> Ethical considerations guide responsible development and deployment
                            </li>
                          </ul>

                          <div className="quotes text-center">
                            <p>
                              {`"The rise of LLMs isn't just about technological progress; it's about redefining the relationship 
                              between human intelligence and artificial intelligence in ways we're only beginning to understand."`}
                            </p>
                          </div>

                          <h6>- Future Implications and Challenges</h6>
                          <p>
                            {`As we look toward the future, LLMs will continue to evolve in sophistication and capability. 
                            We're already seeing the emergence of models that can handle multiple modalities - text, images, 
                            audio, and video - opening new possibilities for human-AI interaction. However, this rapid advancement 
                            also brings significant challenges that we must address collectively.`}
                          </p>
                          <p>
                          {`  The democratization of AI through LLMs means that powerful tools are becoming accessible to 
                            individuals and small organizations worldwide. This accessibility has the potential to level the 
                            playing field in many industries, enabling innovation from unexpected quarters. However, it also 
                            raises questions about responsible use, potential misuse, and the need for appropriate safeguards.`}
                          </p>

                          <h6>- Real-World Applications and Impact</h6>
                          <p>
                            {`LLMs are already transforming industries across the board. In healthcare, they're helping doctors 
                            analyze medical literature and assist with diagnosis. In education, they're providing personalized 
                            tutoring and content creation. In business, they're automating customer service and content generation. 
                            The creative industries are being revolutionized as LLMs help writers, designers, and developers 
                            work more efficiently and creatively.`}
                          </p>

                          <p>
                          {`The key to successful LLM implementation lies in understanding their limitations and working with 
                          them as collaborative tools rather than replacements for human expertise. The most successful 
                          applications combine human creativity and judgment with AI capabilities, creating a synergy that 
                          enhances rather than diminishes human potential.`}
                        </p>

                        </>
                      )}

                      {post.id === 2 && (
                        <>
                          <h6>- The Convergence of AI and Web3</h6>
                          <p>
                            {`The intersection of Artificial Intelligence and Web3 represents one of the most exciting frontiers 
                            in technology today. While AI brings intelligence and automation to digital systems, Web3 provides 
                            the infrastructure for decentralized, trustless interactions. This combination is creating entirely 
                            new paradigms for how we build, interact with, and govern digital systems.`}
                          </p>

                          <h6>- Decentralized AI Marketplaces</h6>
                          <p>
                            {`One of the most promising applications is the creation of decentralized AI marketplaces where 
                            developers can monetize their AI models and users can access them through smart contracts. This 
                            democratizes access to AI capabilities while ensuring fair compensation for creators. The blockchain 
                            infrastructure provides transparency and trust in these transactions, while AI ensures the services 
                            are intelligent and adaptive.`}
                          </p>

                          <h6>- AI-Driven DAOs and Governance</h6>
                          <p>
                            {`Decentralized Autonomous Organizations (DAOs) are being enhanced with AI capabilities that can 
                            analyze proposals, predict outcomes, and automate decision-making processes. This creates more 
                            efficient and intelligent governance systems that can scale beyond human limitations while maintaining 
                            democratic principles.`}
                          </p>
                        </>
                      )}

                      {post.id === 3 && (
                        <>
                          <h6>- AI-Powered Design Tools</h6>
                          <p>
                            {`Modern AI tools are revolutionizing the design process by automating repetitive tasks and providing 
                            intelligent suggestions. From color palette generation to layout optimization, AI is helping designers 
                            focus on creativity while handling the technical aspects of design. These tools learn from user 
                            preferences and can suggest improvements based on best practices and current trends.`}
                          </p>

                          <h6>- Personalized User Experiences</h6>
                          <p>
{`                            AI enables truly personalized interfaces that adapt to individual users in real-time. By analyzing 
                            user behavior, preferences, and context, AI can dynamically adjust layouts, content, and interactions 
                            to create optimal experiences for each user. This level of personalization was previously impossible 
                            and represents a fundamental shift in how we think about user interface design.`}
                          </p>

                          <h6>- Accessibility and Inclusion</h6>
                          <p>
                            {`AI is making digital experiences more accessible to people with disabilities. From automatic 
                            caption generation to voice-controlled interfaces, AI tools are breaking down barriers and creating 
                            more inclusive digital environments. This not only improves accessibility but also enhances the 
                            overall user experience for everyone.`}
                          </p>
                        </>
                      )}

                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                        <div className="tags">
                          {post.tags && post.tags.map((tag, index) => (
                            <React.Fragment key={index}>
                              <a href="#0">{tag}</a>
                              {index < post.tags.length - 1 && ","}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="author">
                      <div className="info">
                        <h6>
                          <span>Author: </span> {post.author}
                        </h6>
                        <p>
                          {post.author} is a technology writer and AI researcher with over 10 years of experience 
                          in artificial intelligence and machine learning. Specializing in emerging technologies, 
                          {post.author} provides insights into how AI is reshaping industries and transforming 
                          human-computer interaction.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href={`/articles`}>
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div>

              <SupabaseComments blogId={post.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
