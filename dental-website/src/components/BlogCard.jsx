import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

// Function to get category color
const getCategoryColor = (category) => {
  switch (category) {
    case 'Oral Health': return 'bg-green-100 text-green-800 border-green-300';
    case 'Emergency Care': return 'bg-red-100 text-red-800 border-red-300';
    case 'Cosmetic Dentistry': return 'bg-purple-100 text-purple-800 border-purple-300';
    case 'Treatments': return 'bg-blue-100 text-blue-800 border-blue-300';
    default: return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

// Function to format date (optional, simple version)
const formatDate = (dateString) => {
   if (!dateString) return '';
   try {
     // Basic reformat YYYY-MM-DD to Month Day, Year
     const [year, month, day] = dateString.split('-');
     const date = new Date(year, month - 1, day);
     return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
   } catch { return dateString; }
 };


const BlogCard = ({ post, index }) => {
  // Use the external URL for linking
  const postLink = post.external_url || '#'; // Fallback link if URL is missing

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Optional Image - Link added */}
      {post.imageUrl && (
        <a href={postLink} target="_blank" rel="noopener noreferrer" className="block h-48 overflow-hidden">
           <img
             // Use image_url from Django data, check if it's already a full URL or relative
             src={post.imageUrl.startsWith('http') ? post.imageUrl : `${post.imageUrl}`}
             alt={post.title}
             className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
        </a>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>
        {/* Link Title to External URL */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-[#1e7b7e] transition-colors">
          <a href={postLink} target="_blank" rel="noopener noreferrer">{post.title}</a>
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4 border-t pt-4 mt-auto">
          <span className="flex items-center gap-1.5">
            <FiCalendar /> {formatDate(post.date)} {/* Use formatted date */}
          </span>
          <span className="flex items-center gap-1.5">
            <FiClock /> {post.readTime}
          </span>
        </div>
        {/* Link "Read Article" to External URL */}
        <a
          href={postLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm font-semibold text-[#1e7b7e] hover:text-[#0d5c63] transition-colors"
        >
          Read Article
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;