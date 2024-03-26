import React from "react";
import "./App.css";

function App() {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <header>
                <h1>Welcome to Our Courier Company</h1>
                <h3>The Worlds best Courier Company</h3>
            </header>
            <img
                className="hero"
                src="https://via.placeholder.com/1200x300"
                alt="Courier Company"
            />
            <main className="content">
                <section id="services" className="services">
                    <h2>Our Services</h2>
                    <ul>
                        <li>Express Delivery</li>
                        <li>Same-day Delivery</li>
                        <li>International Shipping</li>
                        <li>Customized Solutions</li>
                    </ul>
                </section>
                <section id="about" className="about">
                    <h2>About Us</h2>
                    <p>
                        We are a reliable and efficient courier company
                        dedicated to providing top-notch delivery services to
                        our customers.
                    </p>
                </section>
                <section id="contact" className="contact">
                    <h2>Contact Us</h2>
                    <div className="contact-card">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Contact Person"
                        />
                        <div>
                            <p>
                                For any inquiries or booking requests, feel free
                                to contact us at:
                            </p>
                            <p>
                                Email:{" "}
                                <a href="mailto:info@ourcouriercompany.com">
                                    info@ourcouriercompany.com
                                </a>
                            </p>
                            <p>
                                Phone:{" "}
                                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Our Courier Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
