'use client'; // This directive tells Next.js this component uses client-side features

import { useState } from 'react';

export default function Contact() {
    // State management for form data - think of this as the component's memory
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // State for form submission status - helps provide user feedback
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or empty

    // Form validation function - ensures data quality before submission
    const validateForm = () => {
        const errors = {};

        // Name validation - checking for presence and reasonable length
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        }

        // Email validation using regex pattern - ensures proper email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        // Subject validation - ensures meaningful communication
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 5) {
            errors.subject = 'Subject must be at least 5 characters';
        }

        // Message validation - ensures substantial content
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }

        return errors;
    };

    // Input change handler - updates state as user types
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, // Spread operator preserves existing form data
            [name]: value // Dynamic property assignment updates the specific field
        }));
    };

    // Form submission handler - processes the form when user submits
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents default browser form submission behavior

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            // If validation fails, you could set error state here
            console.log('Validation errors:', errors);
            return;
        }

        setIsSubmitting(true); // Show loading state to user

        try {
            // Simulate API call - replace with your actual form submission logic
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitStatus('success');
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false); // Hide loading state
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-950 text-white px-4 sm:px-8 lg:px-24 py-12">
            <section id="contact" className="w-full max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                        Send me a message and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-lime-400 mb-6">
                                Let's Connect
                            </h2>

                            {/* Contact methods with icons and descriptions */}
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center border border-lime-400/20">
                                        <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Email</h3>
                                        <p className="text-gray-400">grv.9604@gmail.com</p>
                                        <p className="text-sm text-gray-500 mt-1">I'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center border border-lime-400/20">
                                        <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Location</h3>
                                        <p className="text-gray-400">Chennai, Tamil Nadu, India</p>
                                        <p className="text-sm text-gray-500 mt-1">Available for remote work</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center border border-lime-400/20">
                                        <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Social Media</h3>
                                        <p className="text-gray-400">LinkedIn • GitHub • Twitter</p>
                                        <p className="text-sm text-gray-500 mt-1">Follow my journey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-gray-900 rounded-2xl p-8 border border-lime-400/20">
                        <h2 className="text-2xl font-bold text-lime-400 mb-6">
                            Send Message
                        </h2>

                        {/* Success/Error Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-400/10 border border-green-400/20 rounded-lg">
                                <p className="text-green-400 font-medium">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-400/10 border border-red-400/20 rounded-lg">
                                <p className="text-red-400 font-medium">
                                    ✗ Something went wrong. Please try again.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email Input Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Subject Input Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                    placeholder="What's this about?"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-200"
                                    placeholder="Tell me about your project or what you'd like to discuss..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-lime-400 to-emerald-400 text-black font-semibold py-3 px-6 rounded-lg hover:from-lime-500 hover:to-emerald-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}