import { useContext } from 'react';
import { ThemeContext } from '../App';
import Navbar from '../Components/Navbar';
import '../styles/FAQs.css'
import Footer from '../Components/Footer';

export default function FAQ({ themebtn, toggle }) {
    const { theme } = useContext(ThemeContext);
    const faqs = [
        { question: "What types of tech products do you sell?", answer: "We offer laptops, smartphones, accessories, gaming gear, and smart home devices." },
        { question: "Do you offer international shipping?", answer: "Yes, we provide international shipping to select countries. Shipping costs vary." },
        { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, Apple Pay, Google Pay, and installment options." },
        { question: "How can I track my order?", answer: "Once your order ships, you will receive a tracking number via email or SMS." },
        { question: "What is your return policy?", answer: "We offer a 30-day return policy for unused products in original packaging." },
        { question: "Do your products come with a warranty?", answer: "Yes! Most products come with a 1-year manufacturer warranty." }
    ];

    return (
        <div className='faq'>
            <Navbar themebtn={themebtn} toggle={toggle} />
            <div className={`faqs ${theme}`}>
                <h2>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <details key={index}>
                        <summary>{faq.question}</summary>
                        <p>{faq.answer}</p>
                    </details>
                ))}
            </div>
            <Footer />
        </div>
    );
}
