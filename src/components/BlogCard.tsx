import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
    Calendar, 
    // Clock, 
    ArrowRight, 
    BookOpen 
} from "lucide-react";
import { format } from "date-fns";
import type { BlogPost } from "@/lib/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group hover-lift glass-effect border-0 h-full overflow-hidden">
      {/* Featured Image */}
      <div className="relative h-48 overflow-hidden">
        {post.thumbnail ? (
          <img 
            src={post.thumbnail} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-slate-600 to-slate-800 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-white opacity-50" />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardHeader className="pb-3">
        {/* Tags */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {post.categories.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                {tag}
              </Badge>
            ))}
            {post.categories.length > 2 && (
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                +{post.categories.length - 2}
              </Badge>
            )}
          </div>
        )}
        
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
      </CardHeader>

      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
          {post.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-4">
            {post.pubDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {format(new Date(post.pubDate), 'MMM d, yyyy')}
              </div>
            )}
            {/* {post.reading_time && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.reading_time}m read
              </div>
            )} */}
          </div>
        </div>

        {/* Read More Button */}
        <a href={post.link} target="_blank" rel="noopener noreferrer">
            <Button 
            variant="ghost" 
            className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
            >
            Read Article
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
        </a>
      </CardContent>
    </Card>
  );
}