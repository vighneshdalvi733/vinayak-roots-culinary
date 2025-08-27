import { Leaf, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ukdicheModak from "@/assets/ukdiche-modak.jpg";
import dinkacheLadoo from "@/assets/dinkache-ladoo.jpg";
import puranPoli from "@/assets/puran-poli.jpg";
import kothimbirVadi from "@/assets/kothimbir-vadi.jpg";

const menuItems = [
  {
    id: 1,
    name: "Ukdiche Modak",
    description: "Steamed sweet coconut dumplings, Lord Ganesha's favorite. Soft, pillowy rice flour shells filled with freshly grated coconut and jaggery, infused with cardamom. A divine treat that brings blessings to your home.",
    price: "₹180",
    per: "per dozen",
    image: ukdicheModak,
    vegetarian: true,
    specialty: "Lord Ganesha's Favorite"
  },
  {
    id: 2,
    name: "Dinkache Ladoo",
    description: "Nutritious edible gum laddoos packed with premium dry fruits. Made with dink (edible gum), ghee, almonds, cashews, and dates. Perfect for new mothers and winter wellness. A powerhouse of nutrition wrapped in sweetness.",
    price: "₹320",
    per: "per kg",
    image: dinkacheLadoo,
    vegetarian: true,
    specialty: "Winter Special"
  },
  {
    id: 3,
    name: "Puran Poli",
    description: "Sweet flatbread stuffed with jaggery and chana dal filling. Golden, thin rotis filled with perfectly spiced puran (sweet lentil mixture) and served with a dollop of ghee. A festive favorite that melts in your mouth.",
    price: "₹45",
    per: "per piece",
    image: puranPoli,
    vegetarian: true,
    specialty: "Festival Special"
  },
  {
    id: 4,
    name: "Kothimbir Vadi",
    description: "Crispy coriander fritters, perfect tea-time snack. Fresh coriander leaves mixed with gram flour and spices, steamed and then fried to golden perfection. Served with tangy mint chutney.",
    price: "₹150",
    per: "per plate",
    image: kothimbirVadi,
    vegetarian: true,
    specialty: "Tea Time Favorite"
  }
];

const Menu = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sunset text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Signature
            <span className="block text-yellow-200">Delicacies</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-slide-up">
            Four generations of recipes, perfected with love and tradition
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Authentic Maharashtrian
              <span className="text-gradient block">Specialties</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each dish crafted with traditional methods and the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {menuItems.map((item, index) => (
              <Card key={item.id} className={`card-warm overflow-hidden group animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div className="h-64 md:h-full relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.vegetarian && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                            <Leaf className="w-3 h-3 mr-1" />
                            Veg
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-gradient-warm text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          {item.specialty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <div className="text-right">
                          <p className="font-bold text-2xl text-primary">{item.price}</p>
                          <p className="text-sm text-muted-foreground">{item.per}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-gradient-warm border-0 hover:shadow-warm">
                          Order via WhatsApp
                        </Button>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                          Add to Favorites
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Can't Decide?
            <span className="text-gradient block">Try Our Combo Pack!</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get a taste of all our specialties with our specially curated combo pack. 
            Perfect for festivals, celebrations, or treating yourself to authentic flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-warm border-0">
              Order Combo Pack - ₹650
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Contact for Custom Orders
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;