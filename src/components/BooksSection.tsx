import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, Star, ExternalLink } from "lucide-react";

const BooksSection = () => {
  const books = [
    {
      title: "Unleash Your Inner Power",
      subtitle: "A Woman's Guide to Authentic Leadership",
      description: "Discover the leadership qualities you already possess and learn how to amplify them in every area of your life. This comprehensive guide provides practical tools and inspiring stories to help you step into your power.",
      format: "Hardcover & eBook",
      pages: "320 pages",
      rating: 4.8,
      reviews: 1247,
      price: "$24.99",
      bestseller: true,
      features: [
        "30 practical exercises",
        "Real-world case studies",
        "Downloadable worksheets",
        "Bonus audio content"
      ]
    },
    {
      title: "Breaking Barriers",
      subtitle: "Strategies for Success in Male-Dominated Industries",
      description: "Navigate and thrive in challenging environments with proven strategies from women who've shattered glass ceilings. Learn how to build allies, overcome obstacles, and create opportunities.",
      format: "Paperback & eBook",
      pages: "280 pages",
      rating: 4.9,
      reviews: 892,
      price: "$19.99",
      bestseller: false,
      features: [
        "Industry-specific advice",
        "Networking strategies",
        "Salary negotiation tips",
        "Mentorship guidance"
      ]
    },
    {
      title: "The Confident Communicator",
      subtitle: "Master the Art of Speaking Your Truth",
      description: "Transform your communication style and build unshakeable confidence in every conversation. From boardroom presentations to difficult conversations, learn to speak with authority and authenticity.",
      format: "eBook & Audiobook",
      pages: "240 pages",
      rating: 4.7,
      reviews: 654,
      price: "$16.99",
      bestseller: false,
      features: [
        "Communication templates",
        "Body language guide",
        "Conflict resolution tools",
        "Public speaking techniques"
      ]
    }
  ];

  const freeResources = [
    {
      title: "The Empowerment Starter Kit",
      description: "A comprehensive guide to begin your journey of self-discovery and empowerment.",
      type: "PDF Guide",
      pages: "25 pages"
    },
    {
      title: "Daily Affirmations for Women Leaders",
      description: "30 powerful affirmations to boost confidence and maintain focus on your goals.",
      type: "Audio Collection",
      pages: "15 minutes"
    },
    {
      title: "Salary Negotiation Cheat Sheet",
      description: "Step-by-step strategies to negotiate the compensation you deserve.",
      type: "Quick Reference",
      pages: "5 pages"
    }
  ];

  return (
    <section id="books" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                Books & Resources
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical wisdom and actionable strategies to accelerate your journey. 
              From bestselling books to free resources, find the tools you need to unlock your potential.
            </p>
          </div>

          {/* Books */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Bestselling Books
            </h3>
            <div className="space-y-8">
              {books.map((book, index) => (
                <Card key={index} className="p-8 hover:shadow-elegant transition-shadow duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Book Cover Placeholder */}
                    <div className="lg:col-span-1">
                      <div className="aspect-[3/4] bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground relative overflow-hidden">
                        <div className="text-center p-6">
                          <BookOpen className="w-16 h-16 mx-auto mb-4" />
                          <h4 className="font-bold text-lg mb-2">{book.title}</h4>
                          <p className="text-sm opacity-90">{book.subtitle}</p>
                        </div>
                        {book.bestseller && (
                          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                            Bestseller
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Book Details */}
                    <div className="lg:col-span-2">
                      <div className="mb-4">
                        <h4 className="text-2xl font-bold text-foreground mb-2">
                          {book.title}
                        </h4>
                        <p className="text-lg text-muted-foreground mb-4">
                          {book.subtitle}
                        </p>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {book.rating} ({book.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {book.description}
                      </p>

                      {/* Features */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h5 className="font-semibold text-foreground mb-3">What's Inside:</h5>
                          <div className="space-y-1">
                            {book.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-muted-foreground text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Details:</h5>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>{book.format}</p>
                            <p>{book.pages}</p>
                            <p className="font-semibold text-primary text-lg">{book.price}</p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Button variant="hero">
                          Buy Now
                        </Button>
                        <Button variant="outline">
                          Read Sample
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View on Amazon
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Free Resources */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Free Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {freeResources.map((resource, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-elegant transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {resource.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {resource.type}
                    </Badge>
                    <span>{resource.pages}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Download Free
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated on New Releases
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Be the first to know about new books, exclusive content, and special offers. 
                Join thousands of women on their empowerment journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-foreground"
                />
                <Button variant="accent" className="shrink-0">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;