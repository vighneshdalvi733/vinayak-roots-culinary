import { Heart, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sunset text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-up">
            Three generations of preserving the authentic taste of Maharashtra
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                A Legacy of
                <span className="text-gradient block">Authentic Flavors</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Vinayak Foods began as a humble kitchen where our grandmother, 
                  Aai, would prepare traditional Maharashtrian delicacies for 
                  festivals and special occasions. Her recipes, passed down through 
                  oral tradition, carried the essence of authentic Maharashtra.
                </p>
                <p>
                  What started as a family tradition has now blossomed into 
                  Vinayak Foods, where we continue to honor those time-tested 
                  recipes. Every modak is shaped by hand, every puran poli is 
                  rolled with love, and every ladoo carries the warmth of our 
                  ancestral kitchen.
                </p>
                <p>
                  Today, we're proud to bring these authentic flavors to your 
                  home, maintaining the same dedication to quality and tradition 
                  that has defined our family for generations.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="card-warm">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                    "Food is not just nourishment for the body, but for the soul. 
                    Every dish we prepare carries the love, tradition, and blessings 
                    of our ancestors."
                  </blockquote>
                  <footer className="mt-6">
                    <p className="font-semibold text-foreground">- Vinayak Family</p>
                    <p className="text-sm text-muted-foreground">Traditional Recipe Keepers</p>
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every dish we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-warm text-center group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                  Made with Love
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every dish is prepared with the same care and affection 
                  as cooking for our own family
                </p>
              </CardContent>
            </Card>

            <Card className="card-warm text-center group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                  Authentic Quality
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We never compromise on authenticity, using only traditional 
                  methods and finest ingredients
                </p>
              </CardContent>
            </Card>

            <Card className="card-warm text-center group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                  Time-Honored Tradition
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Preserving centuries-old recipes and cooking techniques 
                  for future generations
                </p>
              </CardContent>
            </Card>

            <Card className="card-warm text-center group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                  Community First
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building relationships and sharing the joy of authentic 
                  Maharashtrian cuisine with everyone
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8">
            Our Commitment to
            <span className="text-gradient block">Maharashtrian Cuisine</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Preserving Heritage
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe that food is a living heritage. Each recipe we prepare 
                is a bridge connecting the past with the present, ensuring that 
                the rich culinary traditions of Maharashtra continue to thrive 
                in modern times.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Quality Ingredients
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We source the finest ingredients - from the purest jaggery to 
                the freshest coconut, from aromatic spices to premium dry fruits. 
                Every ingredient is carefully selected to match the standards 
                of our traditional recipes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;