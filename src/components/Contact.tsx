import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formspreeUrl = "https://formspree.io/f/xpwrvzpo";

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Pesan Anda telah berhasil dikirim!'); // Notifikasi ke pengguna
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset formulir
      } else {
        // Jika ada masalah dari Formspree
        const data = await response.json();
        alert(`Gagal mengirim pesan: ${data.errors ? data.errors.map((err: any) => err.message).join(', ') : 'Terjadi kesalahan.'}`);
        console.error('Formspree error:', data);
      }
    } catch (error: unknown) { // <--- PERUBAHAN DI SINI: tambahkan ': unknown'
      // Jika ada masalah jaringan atau lainnya
      alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.');

      // Anda bisa memeriksa tipe error jika Anda ingin menangani error tertentu
      if (error instanceof Error) {
        console.error('Network or other error:', error.message);
      } else {
        console.error('An unknown error occurred:', error);
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "mochzuhdi04@gmail.com",
      link: "mailto:mochzuhdi04@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "081949334058",
      link: "tel:081949334058"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bandung",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Mohzu",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/moch-zuhdi-maulana-nabilah-b3219229b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:text-blue-300"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://instagram.com/m.zuhdimaulana",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always excited to discuss new opportunities, collaborate on interesting projects,
                or simply chat about technology and development. Feel free to reach out through any of
                the channels below.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="text-blue-400 group-hover:text-cyan-400 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">{info.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 sm:p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-gray-400 ${social.color} transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;