import { motion } from 'framer-motion';
import { Bot, ArrowLeft, Clock, Video, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';

function GetStarted() {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter mb-8 text-center">
              Get Started with bocato
            </h1>
            <p className="text-gray-600 text-xl text-center mb-12">
              Schedule a call with our team to learn how bocato can transform your restaurant operations.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <iframe
                src="https://calendly.com/hi-sidetool/audit"
                width="100%"
                height="750"
                frameBorder="0"
                title="Schedule a call"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default GetStarted;