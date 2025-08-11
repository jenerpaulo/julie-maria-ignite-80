import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Heart, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Leadership",
      description: "Leading with heart and genuine care for every woman's journey to empowerment."
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinking",
      description: "Bringing fresh perspectives and creative solutions to overcome challenges."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering tangible outcomes and measurable transformation."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in everything we do together."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Julie Maria
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate advocate for women's empowerment with over 15 years of experience 
              helping women break barriers and achieve their dreams.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left Column - Story */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                My Journey to Empowerment
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My path wasn't always clear. Like many women, I faced moments of doubt, 
                  barriers that seemed impossible, and times when I questioned my own worth. 
                  But through those challenges, I discovered something powerful: every woman 
                  has an inner strength waiting to be unleashed.
                </p>
                <p>
                  After transforming my own life and career, I knew I had to share these 
                  insights with other women. What started as informal mentoring grew into 
                  a mission that has now touched the lives of thousands of women worldwide.
                </p>
                <p>
                  Today, I stand before audiences, work with corporate leaders, and write 
                  resources that help women recognize their power, claim their space, and 
                  create the impact they're meant to have in this world.
                </p>
              </div>
              
              <div className="mt-8">
                <Button variant="hero" size="lg">
                  Read My Full Story
                </Button>
              </div>
            </div>

            {/* Right Column - Achievements */}
            <div>
              <Card className="p-8 shadow-elegant">
                <h4 className="text-xl font-bold text-foreground mb-6">Key Achievements</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-foreground">TEDx Speaker</h5>
                      <p className="text-muted-foreground text-sm">Featured speaker on "The Power of Authentic Leadership"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-foreground">Bestselling Author</h5>
                      <p className="text-muted-foreground text-sm">3 books on women's empowerment and leadership</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-foreground">Corporate Consultant</h5>
                      <p className="text-muted-foreground text-sm">Worked with Fortune 500 companies on diversity & inclusion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-foreground">Mentor & Coach</h5>
                      <p className="text-muted-foreground text-sm">Personally mentored over 1,000 women leaders</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              What Drives Me
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-elegant transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;