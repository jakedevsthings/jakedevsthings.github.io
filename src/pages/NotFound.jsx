import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="section-container py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-6xl font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-semibold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home size={16} />
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
