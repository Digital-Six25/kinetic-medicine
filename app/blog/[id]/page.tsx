"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Import our components
import { FloatingElements } from "@/components/floating-elements";
import { BackgroundShapes } from "@/components/background-shapes";
import { FadeIn } from "@/components/animations";
import { useBlogPageData } from "@/hooks/useBlogPageData";
import parse from "html-react-parser";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, error, isLoading } = useBlogPageData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data?.blog?.blogs) return <div>No data available</div>;

  // Convert ID to number if blog IDs are numeric
  const post = data.blog.blogs.find((b: any) => String(b.id) === id);

  if (!post) {
    return notFound();
  }

  const relatedPosts = [
    {
      id: 2,
      title: "NDIS Exercise Physiology: Maximizing Your Plan Benefits",
      category: "NDIS",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "5 Essential Exercises for Chronic Pain Management",
      category: "Pain Management",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Mental Health and Exercise: The Powerful Connection",
      category: "Mental Health",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-primary/5 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto">
              <Button variant="outline" asChild className="mb-6">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                {post.category}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              <div className="flex items-center space-x-6 mb-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 mr-2" />
                  {post.read_time} min read
                </div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                {post.subtitle}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <FadeIn direction="up">
                <div className="max-w-4xl">
                  {/* Featured Image */}
                  <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={post.img || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
                    {parse(post.text)}
                  </div>

                  {/* Tags */}
                  {/* <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <Tag className="h-5 w-5 text-gray-400" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div> */}

                  {/* Share */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Share2 className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">
                          Share this article:
                        </span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Facebook
                          </Button>
                          <Button variant="outline" size="sm">
                            Twitter
                          </Button>
                          <Button variant="outline" size="sm">
                            LinkedIn
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Bio */}
              <FadeIn direction="right" delay={0.2}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt={post.author.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {post.author.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Founder & Medical Director
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Dr. Sarah Mitchell founded Kinetic Medicine in 2009 and
                      has over 15 years of experience in sports medicine and
                      exercise physiology.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Related Posts */}
              <FadeIn direction="right" delay={0.3}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-orange-primary" />
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div
                          key={relatedPost.id}
                          className="border-b border-gray-200 pb-4 last:border-b-0"
                        >
                          <div className="flex space-x-3">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              width={80}
                              height={60}
                              className="rounded object-cover"
                            />
                            <div>
                              <Badge
                                variant="secondary"
                                className="mb-2 text-xs"
                              >
                                {relatedPost.category}
                              </Badge>
                              <h4 className="font-semibold text-gray-900 text-sm hover:text-orange-primary transition-colors">
                                <Link href={`/blog/${relatedPost.id}`}>
                                  {relatedPost.title}
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* CTA */}
              <FadeIn direction="right" delay={0.4}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-primary to-orange-secondary text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="mb-4 text-sm opacity-90">
                      Book a consultation with our expert team and start your
                      journey to better health.
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
    </div>
  );
}
