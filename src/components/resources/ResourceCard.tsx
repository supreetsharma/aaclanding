import { Clock, Calendar, RefreshCw } from 'lucide-react';
import type { Resource } from '../../types/resource';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-[#E9DFCE] hover:shadow-lg transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={resource.imageUrl}
          alt=""
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-[#F4EFE6] text-[#015C3B] px-3 py-1 rounded-full text-sm">
            {resource.category}
          </span>
          <div className="flex items-center text-sm text-[#4B4639] gap-2">
            <Clock className="h-4 w-4" />
            <span>{resource.readingTime} min read</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-[#1C160C] line-clamp-2">
          <Link to={`/resources/${resource.id}`} className="hover:text-[#015C3B]">
            {resource.title}
          </Link>
        </h3>

        <p className="text-[#4B4639] mb-4 line-clamp-3">
          {resource.summary}
        </p>

        <div className="flex items-center justify-between text-sm text-[#4B4639]">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(resource.publishedDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <RefreshCw className="h-4 w-4" />
            <span>Updated {new Date(resource.lastUpdated).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </article>
  );
}