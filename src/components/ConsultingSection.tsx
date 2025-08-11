import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, TrendingUp, Users2, CheckCircle, ArrowRight } from "lucide-react";

const ConsultingSection = () => {
  const services = [
    {
      icon: Building,
      title: "Organizational Culture Transformation",
      description: "Redesign your workplace culture to foster inclusion, empowerment, and high performance.",
      features: ["Culture Assessment", "Leadership Training", "Policy Development", "Change Management"],
      duration: "3-12 months"
    },
    {
      icon: Users2,
      title: "Women's Leadership Development",
      description: "Comprehensive programs to identify, develop, and advance women leaders in your organization.",
      features: ["Leadership Assessment", "Mentorship Programs", "Executive Coaching", "Career Pathways"],
      duration: "6-18 months"
    },
    {
      icon: TrendingUp,
      title: "Executive Coaching",
      description: "One-on-one coaching for senior executives to enhance leadership effectiveness and authentic impact.",
      features: ["360° Feedback", "Personal Branding", "Strategic Thinking", "Communication Skills"],
      duration: "3-6 months"
    }
  ];

  const results = [
    { metric: "85%", description: "Increase in women promotion rates" },
    { metric: "92%", description: "Client satisfaction score" },
    { metric: "40%", description: "Improvement in engagement scores" },
    { metric: "200+", description: "Organizations transformed" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Deep dive into your organization's current state, challenges, and goals."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized roadmap tailored to your specific needs and culture."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with hands-on support and continuous guidance."
    },
    {
      step: "04",
      title: "Measurement & Optimization",
      description: "Track progress and refine strategies for sustained success."
    }
  ];

  return (
    <section id="consulting" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                Consulting Services
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your organization into a place where women thrive, lead, and drive exceptional results. 
              Strategic consulting that creates lasting change and measurable impact.
            </p>
          </div>

          {/* Results Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {results.map((result, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground text-sm">{result.description}</p>
              </Card>
            ))}
          </div>

          {/* Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Core Consulting Services
            </h3>
            <div className="space-y-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-elegant transition-shadow duration-300">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      
                      {/* Service Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">
                              {service.title}
                            </h4>
                            <Badge variant="secondary" className="mb-4">
                              {service.duration}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h5 className="font-semibold text-foreground mb-4">What's Included:</h5>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              My Consulting Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card key={index} className="p-6 text-center relative">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-6">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Organization?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can work together to create meaningful change 
                and unlock the full potential of your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="group">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                  Download Case Studies
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;