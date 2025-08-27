import { useState } from "react";
import { Star, MessageSquare, ThumbsUp, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review: "The Ukdiche Modak from Vinayak Foods tastes exactly like my grandmother used to make! The authenticity is unmatched, and the delivery was prompt. Highly recommended for anyone craving genuine Maharashtrian flavors.",
    item: "Ukdiche Modak",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rajesh Patil",
    location: "Pune", 
    rating: 5,
    review: "Ordered Puran Poli for Diwali celebration. Each piece was perfectly made with the right sweetness and texture. My entire family was impressed. Will definitely order again for the next festival!",
    item: "Puran Poli",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Meera Joshi",
    location: "Nashik",
    rating: 5,
    review: "The Dinkache Ladoo are a powerhouse of nutrition and taste! Perfect for my post-pregnancy diet. Fresh ingredients, authentic preparation, and excellent packaging. Thank you Vinayak Foods!",
    item: "Dinkache Ladoo",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Amit Kulkarni",
    location: "Kolhapur",
    rating: 5,
    review: "Kothimbir Vadi with evening tea is pure bliss! Crispy, flavorful, and reminded me of my childhood in the village. The mint chutney was an excellent complement. Outstanding quality!",
    item: "Kothimbir Vadi",
    date: "1 week ago"
  }
];

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    item: "",
    rating: 0,
    review: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (rating: number) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.review || formData.rating === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, rating, and review.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Thank you for your feedback!",
      description: "Your review has been submitted and will be displayed after approval.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      item: "",
      rating: 0,
      review: ""
    });
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={interactive ? () => handleRatingClick(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sunset text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Customer
            <span className="block text-yellow-200">Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-up">
            What our customers say about our authentic delicacies
          </p>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Reviews from
              <span className="text-gradient block">Happy Customers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from families who trust Vinayak Foods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className={`card-warm animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.location} • {testimonial.date}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {testimonial.item}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({testimonial.rating}/5)
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              We'd love to hear about your experience with Vinayak Foods
            </p>
          </div>

          <Card className="card-warm">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center">
                Leave a Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Item Ordered
                    </label>
                    <Input
                      name="item"
                      value={formData.item}
                      onChange={handleInputChange}
                      placeholder="Which item did you order?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center gap-3">
                    {renderStars(formData.rating, true)}
                    <span className="text-sm text-muted-foreground">
                      {formData.rating > 0 ? `${formData.rating}/5` : "Click to rate"}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Review *
                  </label>
                  <Textarea
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    placeholder="Tell us about your experience with our food and service..."
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-warm border-0 hover:shadow-warm"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ThumbsUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Thank You for Choosing
            <span className="block">Vinayak Foods!</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your satisfaction is our greatest achievement. Every review helps us 
            serve you better and maintain our commitment to authentic flavors.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-yellow-50"
          >
            Order Again
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;