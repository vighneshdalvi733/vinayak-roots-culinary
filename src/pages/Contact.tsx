import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Contact = () => {
  const openWhatsApp = (number: string) => {
    const message = "Hello! I'm interested in ordering from Vinayak Foods. Could you please share the menu and delivery details?";
    const url = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sunset text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Get in
            <span className="block text-yellow-200">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-up">
            Ready to order? We're here to serve you authentic flavors
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Multiple Ways to
              <span className="text-gradient block">Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred method to place an order or ask questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone Orders */}
            <Card className="card-warm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif text-2xl">Phone Orders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-lg text-primary">8879791126</p>
                  <p className="font-semibold text-lg text-primary">9342865282</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  Call us directly to place your order and get instant confirmation
                </p>
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-gradient-warm border-0"
                    onClick={() => window.open('tel:8879791126')}
                  >
                    Call 8879791126
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open('tel:9342865282')}
                  >
                    Call 9342865282
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Orders */}
            <Card className="card-warm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif text-2xl">WhatsApp Orders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-lg text-green-600">Quick & Easy</p>
                  <p className="text-sm text-muted-foreground">Most Popular Method</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  Send us a message on WhatsApp for instant ordering and support
                </p>
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white border-0"
                    onClick={() => openWhatsApp('8879791126')}
                  >
                    WhatsApp 8879791126
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    onClick={() => openWhatsApp('9342865282')}
                  >
                    WhatsApp 9342865282
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="card-warm text-center group md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif text-2xl">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-lg text-primary">Maharashtra, India</p>
                  <p className="text-sm text-muted-foreground">Home Delivery Available</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  We deliver fresh, authentic Maharashtrian delicacies right to your doorstep
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Check Delivery Area
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Business Hours
            </h2>
            <p className="text-xl text-muted-foreground">
              We're here to serve you fresh delicacies
            </p>
          </div>

          <Card className="card-warm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Order & Delivery Times
                  </h3>
                  
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Monday - Friday</span>
                    <span className="text-primary font-semibold">9:00 AM - 9:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Saturday</span>
                    <span className="text-primary font-semibold">9:00 AM - 9:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Sunday</span>
                    <span className="text-primary font-semibold">10:00 AM - 8:00 PM</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Special Notes
                  </h3>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Festival seasons may have extended hours
                    </p>
                    <p className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Advance orders recommended for bulk quantities
                    </p>
                    <p className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Same-day delivery available for orders before 2 PM
                    </p>
                    <p className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      WhatsApp support available during business hours
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Order CTA */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait! Get your favorite Maharashtrian delicacies delivered fresh to your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-yellow-50"
              onClick={() => openWhatsApp('8879791126')}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Order via WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('tel:8879791126')}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;