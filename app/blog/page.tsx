"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Clock,
  Tag,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Import our components
import { FloatingElements } from "@/components/floating-elements";
import { BackgroundShapes } from "@/components/background-shapes";
import { FadeIn, StaggeredFadeIn } from "@/components/animations";
import { useBlogPageData } from "@/hooks/useBlogPageData";
import parse from "html-react-parser";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data, error, isLoading } = useBlogPageData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const blog = data.blog;
  const blogPosts = data.blog.blogs;

  // Blog posts data

  const categories = [
    "all",
    "Exercise Science",
    "NDIS",
    "Pain Management",
    "Mental Health",
    "Sports Medicine",
    "Neurology",
    "Cancer Support",
    "Aged Care",
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.text.toLowerCase().includes(searchTerm.toLowerCase());
    // ||
    // post.tags.some((tag) =>
    //   tag.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.isfeatured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                {blog.hero.pill}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {blog.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {blog.hero.subtitle}
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                Featured Articles
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Must-Read Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and impactful articles, handpicked by our
                expert team.
              </p>
            </div>
          </FadeIn>

          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid lg:grid-cols-2 gap-8"
          >
            {featuredPosts.map((post, index) => (
              <Card
                key={post.post_id}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={post.img || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-primary text-white">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.read_time}</span>
                    </div>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-orange-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <div className="text-gray-600 mb-6 line-clamp-3 overflow-hidden">
                    {parse(post.text)}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {post.author.name}
                      </span>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <BackgroundShapes className="opacity-50" />
        <FloatingElements color="text-orange-secondary" count={4} />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <FadeIn direction="up">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Filter by Category:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={
                          selectedCategory === category ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="capitalize"
                      >
                        {category === "all" ? "All Articles" : category}
                      </Button>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Blog Posts Grid */}
              <StaggeredFadeIn
                direction="up"
                staggerDelay={0.1}
                className="grid md:grid-cols-2 gap-8"
              >
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.img || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.read_time}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-primary transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <div className="text-gray-600 mb-6 line-clamp-3 overflow-hidden">
                        {parse(post.text)}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {post.author.name}
                          </span>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </StaggeredFadeIn>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No articles found matching your search criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <FadeIn direction="right" delay={0.2}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-orange-primary" />
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {recentPosts.map((post) => (
                        <div
                          key={post.post_id}
                          className="border-b border-gray-200 pb-4 last:border-b-0"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2 hover:text-orange-primary transition-colors">
                            <Link href={`/blog/${post.id}`} className="text-sm">
                              {post.title}
                            </Link>
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Popular Tags */}
              {/* <FadeIn direction="right" delay={0.3}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <Tag className="h-5 w-5 mr-2 text-orange-primary" />
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(
                        new Set(blogPosts.flatMap((post) => post.tags))
                      ).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="cursor-pointer hover:bg-orange-primary hover:text-white transition-colors"
                          onClick={() => setSearchTerm(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn> */}

              {/* Newsletter Signup */}
              <FadeIn direction="right" delay={0.4}>
                <Card className="border-0 shadow-lg bg-orange-primary/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Stay Updated
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Subscribe to our newsletter for the latest health tips and
                      exercise insights.
                    </p>
                    <div className="space-y-3">
                      <Input type="email" placeholder="Your email address" />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Contact CTA */}
              <FadeIn direction="right" delay={0.5}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-primary to-orange-secondary text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Need Expert Advice?
                    </h3>
                    <p className="mb-4 text-sm opacity-90">
                      Our team of exercise physiologists is here to help you
                      achieve your health goals.
                    </p>
                    <Button variant="secondary" asChild className="w-full">
                      <Link href="/book-appointment">Book Consultation</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-primary relative overflow-hidden">
        <FloatingElements color="text-white" count={5} />
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-xl text-orange-primary/70 mb-8 max-w-3xl mx-auto">
              Put our expert knowledge into practice. Book a consultation with
              our team and discover how exercise physiology can transform your
              health and wellbeing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8"
              >
                <Link href="/book-appointment">Book Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-primary"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
