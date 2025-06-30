import { FileQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <FileQuestion className="w-24 h-24 text-white mb-6" />
      <h1 className="text-3xl font-bold text-white mb-2">Page Not Found</h1>
      <p className="text-gray-300 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved to a new location.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}