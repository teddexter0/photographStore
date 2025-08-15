// app/page.js - CORRECTED VERSION
'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Camera, Heart, Award, Users, ChevronLeft, ChevronRight, Play, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentPortfolio, setCurrentPortfolio] = useState(0)

  const services = [
    {
      title: "Wedding Photography",
      price: "From KES 35,000",
      description: "Capture your special day with romantic, timeless imagery",
      features: ["Pre-wedding consultation", "Full day coverage", "200+ edited photos", "Online gallery", "Print release"],
      icon: Heart,
      gradient: "from-pink-400 to-rose-500"
    },
    {
      title: "Portrait Sessions",
      price: "From KES 8,000", 
      description: "Professional headshots and personal portraits",
      features: ["1-2 hour session", "Multiple outfit changes", "30+ edited photos", "Retouching included", "High-res downloads"],
      icon: Camera,
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      title: "Event Photography",
      price: "From KES 15,000",
      description: "Corporate events, parties, and celebrations",
      features: ["Event coverage", "Candid moments", "100+ edited photos", "Quick turnaround", "Social media ready"],
      icon: Users,
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Commercial Shoots",
      price: "From KES 25,000",
      description: "Product photography and brand imagery",
      features: ["Creative direction", "Studio or location", "Product styling", "Brand-aligned editing", "Commercial license"],
      icon: Award,
      gradient: "from-orange-400 to-red-500"
    }
  ]

  const portfolioImages = [
    { category: "Wedding", title: "Sarah & James Wedding", description: "Garden ceremony in Karen" },
    { category: "Portrait", title: "Corporate Headshots", description: "Executive portraits downtown" },
    { category: "Event", title: "Tech Conference 2024", description: "Innovation summit coverage" },
    { category: "Commercial", title: "Artisan Coffee Brand", description: "Product photography shoot" },
    { category: "Wedding", title: "Lakeside Ceremony", description: "Romantic sunset wedding" },
    { category: "Portrait", title: "Family Heritage", description: "Multi-generational portraits" },
  ]

  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "Bride",
      text: "Lumina captured our wedding perfectly! Every emotion, every moment was beautifully preserved. The photos tell our love story better than we ever could.",
      rating: 5,
      image: "👰🏾"
    },
    {
      name: "David Kiprotich", 
      role: "CEO, TechStart Kenya",
      text: "Professional, creative, and delivered beyond expectations. Our corporate headshots have elevated our entire brand image.",
      rating: 5,
      image: "👨🏿‍💼"
    },
    {
      name: "Amina Hassan",
      role: "Event Planner", 
      text: "I've worked with many photographers, but Lumina stands out. They capture the energy and emotion of every event flawlessly.",
      rating: 5,
      image: "👩🏿‍💻"
    }
  ]

  const faqs = [
    {
      question: "What's included in your wedding packages?",
      answer: "Our wedding packages include pre-wedding consultation, full day coverage (8+ hours), professional editing, online gallery with download rights, and print release for personal use."
    },
    {
      question: "How long does it take to receive photos?",
      answer: "Wedding photos are delivered within 3-4 weeks, portrait sessions within 1-2 weeks, and event photos within 1 week. Rush delivery is available for an additional fee."
    },
    {
      question: "Do you travel outside Nairobi?",
      answer: "Yes! We love destination weddings and shoots. Travel costs are added based on location and duration. Popular destinations include Diani, Maasai Mara, and Mount Kenya region."
    },
    {
      question: "Can we see full wedding galleries from previous clients?",
      answer: "Absolutely! We have password-protected galleries available for viewing. Contact us and we'll share galleries similar to your style preferences."
    },
    {
      question: "What equipment do you use?",
      answer: "We use professional Canon and Sony camera systems, professional lighting equipment, and backup gear for every shoot to ensure reliability and quality."
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full z-50 top-0 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-warm rounded-full flex items-center justify-center mr-3">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-serif font-bold text-primary">Lumina</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-primary hover:text-accent transition-colors font-medium">Home</a>
              <a href="#services" className="text-primary hover:text-accent transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-primary hover:text-accent transition-colors font-medium">Portfolio</a>
              <a href="#about" className="text-primary hover:text-accent transition-colors font-medium">About</a>
              <a href="#contact" className="text-primary hover:text-accent transition-colors font-medium">Contact</a>
              <a href="#faq" className="text-primary hover:text-accent transition-colors font-medium">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Phone className="h-5 w-5 text-accent" />
              <span className="text-primary font-medium">+254 722 567 890</span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-primary hover:text-accent font-medium">Home</a>
                <a href="#services" className="text-primary hover:text-accent font-medium">Services</a>
                <a href="#portfolio" className="text-primary hover:text-accent font-medium">Portfolio</a>
                <a href="#about" className="text-primary hover:text-accent font-medium">About</a>
                <a href="#contact" className="text-primary hover:text-accent font-medium">Contact</a>
                <a href="#faq" className="text-primary hover:text-accent font-medium">FAQ</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-soft/50 to-white/30"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-warm/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                Capturing Life's
                <span className="block bg-gradient-to-r from-accent to-warm bg-clip-text text-transparent">
                  Beautiful Moments
                </span>
              </h2>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Professional photography services that transform fleeting moments into timeless memories. 
                Based in Nairobi, serving couples and businesses with creative storytelling through lens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Book a Session</button>
                <button className="btn-secondary">View Portfolio</button>
              </div>
            </div>
            
            <div className="relative">
              {/* Circular Portfolio Preview */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-warm/20 animate-rotate-slow"></div>
                {portfolioImages.slice(0, 6).map((image, index) => {
                  const angle = (index * 60) * (Math.PI / 180)
                  const radius = 120
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                  )
                })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-warm flex items-center justify-center">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              From intimate portraits to grand celebrations, we offer comprehensive photography services 
              tailored to your unique story
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="group relative overflow-hidden">
                  {/* Diamond Background */}
                  <div className={`diamond-shape w-full h-80 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                    <div className="bg-white/20 rounded-full p-4 mb-4 backdrop-blur-sm">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{service.title}</h3>
                    <p className="text-lg font-semibold mb-3">{service.price}</p>
                    <p className="text-sm opacity-90 mb-4">{service.description}</p>
                    <ul className="text-xs space-y-1 opacity-80">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-soft to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-primary mb-4">Recent Work</h2>
            <p className="text-xl text-secondary">A glimpse into our latest captures</p>
          </div>
          
          {/* Hexagonal Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {portfolioImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="hexagon-shape w-full h-48 bg-gradient-to-br from-primary to-secondary group-hover:from-accent group-hover:to-warm transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h4 className="font-serif font-bold mb-1">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs mt-2">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-accent/30 to-warm/30 rounded-full blur-2xl"></div>
              <div className="relative glass-effect rounded-2xl p-8">
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">Meet the Artist</h2>
                <p className="text-lg text-secondary mb-6 leading-relaxed">
                  Hi, I'm Sarah Mwangi, the creative mind behind Lumina Photography. With over 7 years 
                  of experience capturing Kenya's most beautiful moments, I believe every photograph 
                  should tell a story that resonates for generations.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">200+</div>
                    <div className="text-secondary">Weddings Captured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">7+</div>
                    <div className="text-secondary">Years Experience</div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Instagram className="h-6 w-6 text-secondary hover:text-accent cursor-pointer transition-colors" />
                  <Facebook className="h-6 w-6 text-secondary hover:text-accent cursor-pointer transition-colors" />
                  <Twitter className="h-6 w-6 text-secondary hover:text-accent cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">My Photography Philosophy</h3>
                <p className="text-secondary">
                  I believe in capturing authentic emotions and genuine moments. Every click of my shutter 
                  is intentional, every frame carefully composed to preserve the essence of the moment.
                </p>
              </div>
              
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Awards & Recognition</h3>
                <ul className="space-y-2 text-secondary">
                  <li>• Kenya Wedding Photographer of the Year 2023</li>
                  <li>• Featured in Wedding Bells Magazine</li>
                  <li>• International Photography Awards Finalist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Circular Carousel */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border-2 border-white/20"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-2 border-white/20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">What Clients Say</h2>
            <p className="text-xl opacity-90">Stories from our satisfied clients</p>
          </div>
          
          <div className="relative h-80 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <div className="glass-effect rounded-2xl p-8 text-center max-w-2xl">
                  <div className="text-6xl mb-4">{testimonial.image}</div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warm fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-xl">{testimonial.name}</p>
                    <p className="opacity-80">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-warm scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-soft to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-secondary">Everything you need to know about our services</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-primary mb-4">Let's Create Magic</h2>
            <p className="text-xl text-secondary">Ready to capture your special moments?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-warm rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-secondary">hello@luminaphoto.co.ke</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-warm rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Studio</p>
                      <p className="text-secondary">Kilimani, Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-warm rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Hours</p>
                      <p className="text-secondary">Mon-Sat: 9AM-7PM, Sun: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Book Your Session</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50 backdrop-blur-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50 backdrop-blur-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50 backdrop-blur-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50 backdrop-blur-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50 backdrop-blur-sm">
                    <option>Wedding Photography</option>
                    <option>Portrait Session</option>
                    <option>Event Photography</option>
                    <option>Commercial Shoot</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Event Date</label>
                  <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50 backdrop-blur-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Tell us about your vision</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50 backdrop-blur-sm" placeholder="Describe your photography needs, style preferences, and any special requirements..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-dark to-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 diamond-shape border border-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 hexagon-shape border border-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-warm rounded-full flex items-center justify-center mr-4">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-serif font-bold">Lumina Photography</h3>
              </div>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Capturing life's beautiful moments with creativity, passion, and professional excellence. 
                Based in Nairobi, serving clients across Kenya and beyond.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-serif font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Home</a></li>
                <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Services</a></li>
                <li><a href="#portfolio" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Portfolio</a></li>
                <li><a href="#about" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">About</a></li>
                <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-serif font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li className="opacity-80">Wedding Photography</li>
                <li className="opacity-80">Portrait Sessions</li>
                <li className="opacity-80">Event Photography</li>
                <li className="opacity-80">Commercial Shoots</li>
                <li className="opacity-80">Destination Weddings</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="opacity-80">&copy; 2025 Lumina Photography. All rights reserved.</p>
              <p className="opacity-60 text-sm mt-1">Crafted with ❤️ in Nairobi, Kenya</p>
            </div>
            <div className="flex space-x-6 text-sm opacity-80">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Copyright</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}