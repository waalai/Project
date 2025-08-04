import { FaClipboardList, FaQuoteLeft, FaTruck, FaFileAlt, FaWhatsapp, FaMapMarkerAlt, FaDollarSign, FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import logo from './assets/Klogo.svg';

function App() {
  const valueProps = [
    {
      title: 'Rapid Pilots',
      description: 'Go from idea to live AI workflow in 4–6 weeks.'
    },
    {
      title: 'Measurable ROI',
      description: 'Every project starts with a data‑driven payback model.'
    },
    {
      title: 'Plug‑and‑Play Integrations',
      description: 'Works with NetSuite, Cin7, Fishbowl, MYOB, spreadsheets.'
    },
    {
      title: 'SMB‑Friendly Pricing',
      description: 'Fixed‑fee pilots and affordable AI‑as‑a‑Service plans.'
    },
    {
      title: 'End‑to‑End Enablement',
      description: 'Data audit, model deployment, change management, support.'
    }
  ];

  const targetCustomers = [
    {
      title: 'Manufacturers (50–500 FTE)',
      description: 'Balancing inventory and production runs.'
    },
    {
      title: 'Wholesale & Distribution',
      description: 'Firms chasing faster fulfilment.'
    },
    {
      title: '3PLs & Last‑Mile Couriers',
      description: 'Operating 20–200 vehicle fleets.'
    },
    {
      title: 'E‑Commerce Retailers',
      description: 'Managing in‑house warehouses and returns.'
    },
    {
      title: 'Owner‑Operators',
      description: 'Expanding regional freight networks in ANZ & USA.'
    }
  ];

  const aiSolutions = [
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: 'Runsheet OCR',
      description: 'Digitise driver runsheets 70% faster and eliminate manual re‑keying.',
      details: ['OCR technology', 'Data extraction', 'ERP integration']
    },
    {
      icon: <FaClipboardList className="w-8 h-8" />,
      title: 'POD Automation',
      description: 'Capture proof‑of‑delivery and push directly to ERP—in minutes, not days.',
      details: ['Digital capture', 'Automated processing', 'Real-time updates']
    },
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: 'Driver WhatsApp Bot',
      description: 'Automated delay messages, ETA replies and two‑way comms.',
      details: ['Automated messaging', 'ETA updates', 'Two-way communication']
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: 'Live ETA Tracking',
      description: 'GPS + ML predicts arrival times, sends proximity alerts to customers.',
      details: ['GPS tracking', 'ML predictions', 'Customer alerts']
    },
    {
      icon: <FaDollarSign className="w-8 h-8" />,
      title: 'Reverse Invoicing AI',
      description: 'Reconcile POD, contract and invoice to recover hidden margin.',
      details: ['Invoice reconciliation', 'Margin recovery', 'Contract matching']
    },
    {
      icon: <FaCamera className="w-8 h-8" />,
      title: 'Fleet Inspection Vision',
      description: 'Mobile camera detects defects and logs them in seconds.',
      details: ['Computer vision', 'Defect detection', 'Automated logging']
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Assess',
      description: 'Two‑week data & process audit with ROI simulation.'
    },
    {
      step: '2',
      title: 'Deploy',
      description: 'Customise and integrate a pre‑built accelerator, train your team.'
    },
    {
      step: '3',
      title: 'Scale',
      description: 'Monitor results, add workflows, shift to AI‑as‑a‑Service support.'
    }
  ];

  const pricingPackages = [
    {
      name: 'AI‑Ready Assessment',
      description: 'Data audit, ROI simulation',
      price: 'A$7.5K',
      features: ['Comprehensive data audit', 'ROI simulation model', 'Process assessment', 'Recommendations report']
    },
    {
      name: 'Quick‑Win Pilot',
      description: 'One accelerator live in 4–6 weeks',
      price: 'A$25–50K',
      popular: true,
      features: ['Custom AI accelerator', 'Full integration', 'Team training', 'Go-live support']
    },
    {
      name: 'AI‑as‑a‑Service',
      description: 'Monitoring, retraining, dashboards',
      price: 'A$3–12K/month',
      features: ['Ongoing monitoring', 'Model retraining', 'Performance dashboards', '24/7 support']
    }
  ];

  const testimonials = [
    {
      name: "Manufacturing Director",
      role: "Operations Lead",
      company: "Mid-size Manufacturer",
      content: "Kolabrate's AI solution reduced our inventory processing time by 60% and eliminated manual data entry errors completely.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Logistics Manager",
      role: "Fleet Operations",
      company: "Regional 3PL",
      content: "The WhatsApp bot and live tracking transformed our customer communication. Our delivery satisfaction scores increased by 40%.",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Distribution Owner",
      role: "CEO",
      company: "Wholesale Distribution",
      content: "From pilot to full deployment in 5 weeks. The ROI was clear from day one, and the team support was exceptional.",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Kolabrate.co" 
                className="h-10 sm:h-12 md:h-14 w-auto transition-all duration-200" 
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#value" className="text-gray-700 hover:text-primary-600 transition-colors">Value</a>
              <a href="#customers" className="text-gray-700 hover:text-primary-600 transition-colors">Customers</a>
              <a href="#solutions" className="text-gray-700 hover:text-primary-600 transition-colors">Solutions</a>
              <a href="#process" className="text-gray-700 hover:text-primary-600 transition-colors">Process</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">Pricing</a>
              <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors">Book Call</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-primary-600 transition-colors p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-gradient text-white relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-32 md:py-40 max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                  AI Agency for Supply‑Chain & Logistics SMBs
                </span>
              </h1>
              <div className="h-1 w-24 bg-primary-400 mx-auto rounded-full mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl font-light mb-12 text-primary-50"
            >
              <div className="leading-relaxed">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Kolabrate designs and deploys AI accelerators that slash costs and cycle‑times for manufacturers, distributors and logistics providers—without the enterprise‑grade price tag.')
                      .start();
                  }}
                  options={{
                    delay: 50,
                    cursor: '',
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="btn-primary group">
                Get 15‑min Discovery Call
                <svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Value Proposition Section */}
      <section id="value" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Value Proposition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-800">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers Section */}
      <section id="customers" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary-800">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetCustomers.map((customer, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <FaTruck className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold text-primary-800">{customer.title}</h3>
                </div>
                <p className="text-gray-600">{customer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-800">
            Quick‑Win AI Solutions
          </h2>
          <div className="max-w-6xl mx-auto">
            {aiSolutions.map((solution, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className="relative mb-16 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 shadow-soft">
                      {solution.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl shadow-card p-8 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-2xl font-semibold mb-4 text-primary-700">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {solution.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {solution.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center bg-primary-50 rounded-lg p-3">
                            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                            <span className="text-primary-700 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index !== aiSolutions.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-24 bottom-0 w-0.5 bg-primary-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary-800">
            How Our Pilot Process Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  key={index}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform -translate-x-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary-800">
            Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className={`bg-white rounded-2xl shadow-card p-8 relative ${
                  pkg.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-primary-600">{pkg.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-800">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-4 -left-2 w-8 h-8 text-primary-200 opacity-40" />
                  <p className="text-gray-600 relative z-10 pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-primary-900 text-white py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Move Freight Smarter?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's explore how Kolabrate can streamline your supply-chain operations with AI-powered automation. Schedule a discovery call today to begin your journey towards autonomous operations.
          </p>
          <button className="bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Book Call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-950 text-white py-8">
        <div className="container text-center">
          <p>© 2025 Kolabrate.co. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-primary-200 hover:text-primary-100 mx-2">Privacy Policy</a>
            <span className="text-primary-600">|</span>
            <a href="#" className="text-primary-200 hover:text-primary-100 mx-2">Terms & Conditions</a>
            <span className="text-primary-600">|</span>
            <a href="#" className="text-primary-200 hover:text-primary-100 mx-2">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;