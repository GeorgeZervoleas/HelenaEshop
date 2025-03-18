import React from "react";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";  // Import Link

// Import images correctly
import boxerImg from "../images/boxer.jpeg";
import pyjamasImg from "../images/Pyjamas-Ladies.jpg";
import socksImg from "../images/socks.jpeg";
import scarf from "../images/scarf.jpeg";

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Helena</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#" className="nav-link">Men</a></li>
            <li><a href="#" className="nav-link">Women</a></li>
            <li><a href="#shop" className="nav-link">Shop</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">Comfort Meets Style</h2>
        <p className="hero-description">Premium underwear, sleepwear, socks, and other accessories.</p>
        {/* <a href="#shop" className="shop-now-btn">Shop Now</a> */}
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </section>

      {/* Featured Caategories */}
      <section className="categories-section">
        <h3 className="section-title">Shop by Category</h3>
        <div className="categories">
          <div className="category-card">
            <img src={boxerImg} alt="Underwear" />
            <h4>Underwear</h4>
          </div>
          <div className="category-card">
            <img src={pyjamasImg} alt="Sleepwear" />
            <h4>Sleepwear</h4>
          </div>
          <div className="category-card">
            <img src={socksImg} alt="Socks" />
            <h4>Socks</h4>
          </div>
          <div className="category-card">
          <img src={scarf} alt="Accessories" />
            <h4>Accessories</h4>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="shop-section">
        <h3 className="section-title">Best Sellers</h3>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/underwear.jpg" alt="Underwear" className="product-image" />
            <h4 className="product-title">Men’s Boxer Briefs</h4>
            <p className="product-price">$19.99</p>
          </div>
          <div className="product-card">
            <img src="/images/sleepwear.jpg" alt="Sleepwear" className="product-image" />
            <h4 className="product-title">Women’s Pajama Set</h4>
            <p className="product-price">$29.99</p>
          </div>
          <div className="product-card">
            <img src="/images/socks.jpg" alt="Socks" className="product-image" />
            <h4 className="product-title">Cozy Ankle Socks</h4>
            <p className="product-price">$9.99</p>
          </div>
          <div className="product-card">
            <img src="/images/pants.jpg" alt="Pants" className="product-image" />
            <h4 className="product-title">Comfy Joggers</h4>
            <p className="product-price">$34.99</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Helena Eshop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
