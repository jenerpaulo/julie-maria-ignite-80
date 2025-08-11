import { Heart, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Speaking", href: "#speaking" },
      { label: "Consulting", href: "#consulting" },
      { label: "Executive Coaching", href: "#consulting" },
      { label: "Workshops", href: "#speaking" }
    ],
    Resources: [
      { label: "Books", href: "#books" },
      { label: "Free Downloads", href: "#books" },
      { label: "Blog", href: "#" },
      { label: "Podcast", href: "#" }
    ],
    Company: [
      { label: "About Julie", href: "#about" },
      { label: "Media Kit", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Contact", href: "#contact" }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const handleScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Julie Maria</h3>
            <p className="text-background/80 mb-6 max-w-md">
              Empowering women to break barriers, claim their space, and create 
              extraordinary impact in their personal and professional lives.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleScroll(link.href)}
                      className="text-background/80 hover:text-background transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-2">Stay Inspired</h4>
            <p className="text-background/80 mb-4">
              Get weekly insights, tips, and inspiration delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-foreground bg-background"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/80">
            <div className="flex items-center gap-1">
              <span>© {currentYear} Julie Maria. Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for women worldwide.</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="hover:text-background transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-background transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;