"use client";
import { useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// EmailJS configuration
const EMAILJS_PUBLIC_KEY =  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const EMAILJS_SERVICE_ID =process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_USER_TEMPLATE_ID =  process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID!;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Initialize EmailJS on the client side
    emailjs.init(EMAILJS_PUBLIC_KEY);
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email to admin
      const adminEmailResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone_number: formData.phoneNumber,
          message: formData.message,
          to_name: "Aditya Swain",
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (adminEmailResponse.status === 200) {
        // Only send confirmation email if admin email was successful
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_USER_TEMPLATE_ID,
            {
              to_name: formData.fullName,
              email: formData.email,
              from_name: "Aditya Swain",
              message_content: formData.message,
              contact_number: formData.phoneNumber,
              reply_to: "adityaswain817@gmail.com",
            },
            EMAILJS_PUBLIC_KEY
          );
          console.log("User confirmation email sent successfully");
        } catch (userEmailError: any) {
          console.error(
            "User confirmation email error:",
            userEmailError?.text || userEmailError
          );
        }

        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error: any) {
      console.error("Email send error:", error.text || error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

        <div className="bg-gray-700 rounded-lg p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="mt-1 block w-full rounded-md bg-gray-600 border-gray-500 text-white shadow-sm focus:border-green-500 focus:ring-green-500 px-4 py-2"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md bg-gray-600 border-gray-500 text-white shadow-sm focus:border-green-500 focus:ring-green-500 px-4 py-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                className="mt-1 block w-full rounded-md bg-gray-600 border-gray-500 text-white shadow-sm focus:border-green-500 focus:ring-green-500 px-4 py-2"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-600 border-gray-500 text-white shadow-sm focus:border-green-500 focus:ring-green-500 px-4 py-2"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-400 text-center">
                Message sent successfully! Please check your email for
                confirmation.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-400 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://github.com/Aditya-Swain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-swain-647563289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
