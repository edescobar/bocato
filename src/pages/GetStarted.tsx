import { motion } from 'framer-motion';
import { Bot, ArrowLeft, Clock, Video, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

function GetStarted() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <Bot className="w-8 h-8 text-racing-500 group-hover:scale-110 transition-transform" />
              <span className="text-xl font-medium tracking-tight text-white">bocato</span>
            </Link>
            <Link 
              to="/" 
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 hover:-translate-x-0.5 transition-transform"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-16 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl font-light text-white mb-6 text-center">
            Get Started with bocato
          </h1>
          <p className="text-gray-400 text-center text-xl mb-12">
            Schedule a call with our team to learn how bocato can transform your restaurant operations.
          </p>

          {/* Meeting Info */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Clock className="w-5 h-5" />,
                title: "30 minutes",
                description: "Brief introduction and demo"
              },
              {
                icon: <Video className="w-5 h-5" />,
                title: "Google Meet",
                description: "Video conference"
              },
              {
                icon: <Calendar className="w-5 h-5" />,
                title: "Flexible scheduling",
                description: "Pick your preferred time"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 rounded-lg p-4 backdrop-blur-lg"
              >
                <div className="w-10 h-10 rounded-full bg-racing-500/10 flex items-center justify-center text-racing-500">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white font-medium">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Calendly Embed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl overflow-hidden bg-white shadow-xl relative"
          >
            {/* Loading State */}
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="animate-pulse flex flex-col items-center">
                <Calendar className="w-8 h-8 text-racing-500 mb-4" />
                <div className="text-gray-400">Loading calendar...</div>
              </div>
            </div>
            
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/your-calendly-url"
              style={{ 
                minWidth: '320px',
                height: '700px',
              }} 
            />
          </motion.div>

          {/* Privacy Note */}
          <p className="text-gray-500 text-sm text-center mt-8">
            By scheduling a call you agree to our{' '}
            <Link to="/privacy" className="text-racing-500 hover:text-racing-400">
              Privacy Policy
            </Link>
            .
          </p>
        </motion.div>
      </main>
    </div>
  );
}

export default GetStarted; 