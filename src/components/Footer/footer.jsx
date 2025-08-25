/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Footer = ({ hideBGCOLOR }) => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false
  });

  // Email validation function
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle form submission
  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Reset status
    setSubscribeStatus({
      message: "",
      isError: false,
      isSubmitting: true
    });
    
    // Validate email
    if (!email) {
      setSubscribeStatus({
        message: "Please enter your email address",
        isError: true,
        isSubmitting: false
      });
      return;
    }
    
    if (!validateEmail(email)) {
      setSubscribeStatus({
        message: "Please enter a valid email address",
        isError: true,
        isSubmitting: false
      });
      return;
    }
    
    try {
      // Check if email already exists
      const { data: existingSubscriber } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .eq('email', email)
        .single();
      
      if (existingSubscriber) {
        setSubscribeStatus({
          message: "You're already subscribed!",
          isError: false,
          isSubmitting: false
        });
        return;
      }
      
      // Insert new subscriber
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, subscribed_at: new Date() }]);
      
      if (error) throw error;
      
      // Success
      setSubscribeStatus({
        message: "Thanks for subscribing!",
        isError: false,
        isSubmitting: false
      });
      setEmail("");
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubscribeStatus({
          message: "",
          isError: false,
          isSubmitting: false
        });
      }, 5000);
      
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setSubscribeStatus({
        message: "Something went wrong. Please try again.",
        isError: true,
        isSubmitting: false
      });
    }
  };

  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Av. Insurgentes Sur 1234, Col. Del Valle, CDMX 03100, Mexico</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>hello@pixelcraft.mx</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+52 (55) 1234-5678</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent Projects</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/project-detailed/?id=1">
                      <a>
                        <img src="/img/Group 1686551828.png" alt="Software Development Project" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-detailed/?id=1">
                      <a>
                        <p>
                          Modern E-commerce Platform with React & Node.js
                        </p>
                      </a>
                    </Link>
                    <Link href="/project-detailed/?id=1">
                      <a>
                        <span className="date">15 Dec 2023</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/project-detailed/?id=2">
                      <a>
                        <img src="/img/portfolio/2.jpg" alt="Mobile App" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-detailed/?id=2">
                      <a>
                        <p>
                          Cross-platform Mobile App for Healthcare
                        </p>
                      </a>
                    </Link>
                    <Link href="/project-detailed/?id=2">
                      <a>
                        <span className="date">28 Nov 2023</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <form onSubmit={handleSubscribe} className="newsletter-form">
                    <div className="subscribe">
                      <input 
                        type="text" 
                        placeholder="Subscribe to our newsletter" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={subscribeStatus.isSubmitting}
                      />
                      <button 
                        type="submit" 
                        className="subs pe-7s-paper-plane"
                        disabled={subscribeStatus.isSubmitting}
                        aria-label="Subscribe"
                      ></button>
                    </div>
                    {subscribeStatus.message && (
                      <div className={`subscribe-message ${subscribeStatus.isError ? 'error' : 'success'}`}>
                        {subscribeStatus.message}
                      </div>
                    )}
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>
                  PIXELCRAFT
                </h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px' }}>
                  {`We've delivered dozens of successful software projects, from web applications to mobile apps, helping businesses transform their digital presence in Mexico and Latin America.`}
                </p>
              </div>

              <div className="social">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>

              <div className="copy-right">
                <p>
                  © 2023, PixelCraft. Crafting digital solutions with passion in Mexico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .newsletter-form {
          width: 100%;
        }
        .subscribe-message {
          margin-top: 10px;
          font-size: 12px;
          text-align: left;
          transition: all 0.3s ease;
        }
        .subscribe-message.success {
          color: #28a745;
        }
        .subscribe-message.error {
          color: #dc3545;
        }
        .subscribe input {
          width: calc(100% - 40px);
        }
        .subscribe .subs {
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border: 0;
          background: transparent;
          color: #75dab4;
          cursor: pointer;
        }
        .subscribe .subs:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
