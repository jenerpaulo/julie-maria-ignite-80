import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Users, Calendar, ArrowRight } from "lucide-react";

const SpeakingSection = () => {
  const speakingTopics = [
    {
      title: "Unleashing Your Inner Leader",
      description: "Discover the leadership qualities you already possess and learn how to amplify them in any environment.",
      duration: "45-60 minutes",
      audience: "Corporate Teams, Conferences"
    },
    {
      title: "Breaking Through Glass Ceilings",
      description: "Practical strategies for overcoming barriers and creating opportunities in male-dominated industries.",
      duration: "30-90 minutes",
      audience: "Professional Women, Industry Events"
    },
    {
      title: "The Power of Authentic Communication",
      description: "Master the art of speaking your truth with confidence and building meaningful connections.",
      duration: "45 minutes",
      audience: "Leadership Teams, Women's Groups"
    },
    {
      title: "From Self-Doubt to Self-Advocacy",
      description: "Transform limiting beliefs into powerful tools for personal and professional growth.",
      duration: "60 minutes",
      audience: "Universities, Personal Development Events"
    }
  ];

  const testimonials = [
    {
      quote: "Julie Maria's keynote was transformational. She doesn't just speak to you, she speaks with you.",
      author: "Sarah Chen",
      title: "VP of Marketing, Tech Innovations"
    },
    {
      quote: "The most impactful speaker we've had in years. Every woman left feeling empowered and ready to take action.",
      author: "Dr. Michelle Rodriguez",
      title: "Dean of Business, State University"
    }
  ];

  return (
    <section id="speaking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mic className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                Speaking & Keynotes
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Inspiring audiences with powerful messages that spark transformation and ignite action. 
              From intimate workshops to large-scale conferences, every speaking engagement is tailored 
              to create meaningful impact.
            </p>
          </div>

          {/* Speaking Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Speaking Events</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50k+</div>
              <p className="text-muted-foreground">Women Inspired</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Countries Reached</p>
            </Card>
          </div>

          {/* Speaking Topics */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Popular Speaking Topics
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {speakingTopics.map((topic, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-foreground flex-1">
                      {topic.title}
                    </h4>
                    <Badge variant="secondary" className="ml-4">
                      {topic.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {topic.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Users className="w-4 h-4" />
                    <span>{topic.audience}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              What Audiences Say
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <blockquote className="text-lg text-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Ready to Inspire Your Audience?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Let's create an unforgettable experience that will empower your audience 
                and drive meaningful change in your organization.
              </p>
              <Button variant="accent" size="lg" className="group">
                Book a Speaking Engagement
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;