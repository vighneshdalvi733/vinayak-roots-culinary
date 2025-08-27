import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Authentic
            <span className="block text-yellow-200">Maharashtrian</span>
            <span className="block">Delicacies</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Experience the rich flavors of traditional Maharashtra with our 
            time-honored recipes, delivered fresh to your doorstep
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-yellow-50 font-medium">
              <Link to="/menu">
                Explore Our Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Order Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Why Choose Vinayak Foods?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three generations of authentic Maharashtrian cooking tradition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-warm text-center group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Authentic Taste
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional recipes passed down through generations, preserving 
                  the authentic flavors of Maharashtra
                </p>
              </CardContent>
            </Card>

            <Card className="card-warm text-center group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Home Delivery
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fresh, hot delicacies delivered straight to your doorstep 
                  with care and love
                </p>
              </CardContent>
            </Card>

            <Card className="card-warm text-center group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Time-Honored Tradition
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every dish crafted with traditional methods and the finest 
                  ingredients, just like our ancestors
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience
            <span className="block">Authentic Flavors?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust Vinayak Foods 
            for authentic Maharashtrian delicacies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-yellow-50">
              <Link to="/menu">
                View Full Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
