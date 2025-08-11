import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@juliemaria.com",
      description: "For general inquiries and speaking requests"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Available weekdays 9 AM - 5 PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "New York, NY",
      description: "Available for speaking worldwide"
    }
  ];

  const serviceTypes = [
    "Speaking Engagement",
    "Consulting Services",
    "Executive Coaching",
    "Workshop Facilitation",
    "Media Interview",
    "Partnership Opportunity",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Let's Start the Conversation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your organization, empower your team, or begin your personal journey? 
              I'd love to hear about your goals and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <Input placeholder="Your company or organization" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                    <option value="">Select a service</option>
                    {serviceTypes.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell me more about your goals, event details, or how I can help..."
                    rows={5}
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {method.title}
                            </h4>
                            <p className="text-primary font-medium mb-1">
                              {method.details}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Discovery Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Download Speaker Kit
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Request Consulting Proposal
                  </Button>
                </div>
              </Card>

              {/* Response Time */}
              <Card className="p-6 text-center bg-gradient-primary text-primary-foreground">
                <h4 className="text-lg font-bold mb-2">
                  Quick Response Guaranteed
                </h4>
                <p className="text-primary-foreground/90 text-sm">
                  I personally respond to every inquiry within 24 hours. 
                  For urgent requests, please call directly.
                </p>
              </Card>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Join the community of empowered women leaders
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <span>10,000+ Newsletter Subscribers</span>
              <span>•</span>
              <span>500+ Speaking Events</span>
              <span>•</span>
              <span>200+ Organizations Transformed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;