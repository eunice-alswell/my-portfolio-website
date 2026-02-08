import { useState, useEffect } from "react";
import { getBlogPosts } from "../lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Calendar, 
  // Clock,
  ArrowRight, 
  BookOpen 
} from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import type { BlogPost } from "@/lib/types";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
    setIsLoading(true);
    const data = await getBlogPosts();
    setPosts(data);
    setIsLoading(false);
  };
    loadPosts();
  }, []);


  const allTags = [...new Set(posts.flatMap(post => post.categories || []))];
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.categories?.some(category => category.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || post.categories?.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0]; // Most recent post as featured
  // const regularPosts = posts.slice(1);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Technical <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Insights, tutorials, and deep dives into data science, machine learning, 
            and software development. Sharing knowledge one post at a time.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Latest Article</h2>
            <Card className="glass-effect border-0 overflow-hidden hover-lift">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  {featuredPost.thumbnail ? (
                    <img 
                      src={featuredPost.thumbnail} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white opacity-50" />
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    {featuredPost.categories?.slice(0, 2).map((category) => (
                      <Badge key={category} variant="secondary" className="bg-blue-100 text-blue-800">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg line-clamp-4 leading-relaxed">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.pubDate && format(new Date(featuredPost.pubDate), 'MMM d, yyyy')}
                      </div>
                      {/* {featuredPost.reading_time && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.reading_time} min read
                        </div>
                      )} */}
                    </div>
                    <a href={featuredPost.link} target="_blank" rel="noopener noreferrer"> 
                      <Button 
                        className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>
        )}

        {/* Search and Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-slate-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                All Topics
              </Button>
              {allTags.slice(0, 6).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-slate-200 rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-slate-200 rounded mb-4"></div>
                    <div className="h-3 bg-slate-200 rounded mb-2"></div>
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-800">
                  All Articles
                </h2>
                <span className="text-slate-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (index % 6) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No articles found</h3>
              <p className="text-slate-600">Try adjusting your search or tag filter.</p>
            </div>
          )}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="p-12 text-center bg-linear-to-r from-blue-600 to-purple-600 text-white border-0">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest articles on data science, ML, and development delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}