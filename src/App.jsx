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
                    <li>
                        <a href="#contact-form">Contact Form</a>
                    </li>
                </ul>
            </nav>
            <header>
                <h1>Welcome to Our Courier Company</h1>
                <h3>The World's Best Courier Company</h3>
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
                        our customers. Our team of professionals is committed to
                        ensuring that your packages are delivered on time and in
                        perfect condition. We offer a wide range of services,
                        including express delivery, same-day delivery,
                        international shipping, and customized solutions to meet
                        your unique needs. Contact us today to experience the
                        best courier services in the world!{" "}
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
                    <section id="contact-form" className="contact-form">
                        <h3>Send us a message</h3>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                            ></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </section>
                </section>
            </main>
            <footer>
                <p>
                    &copy; 2024 The Best Courier Company. All rights reserved.
                </p>
                <p>&reg; Registered Trademark of The Best Courier Company.</p>
                {/* created by Rowan Wood for fun */}
                <p>Created by Rowan Wood for fun</p>
            </footer>
        </div>
    );
}

export default App;
