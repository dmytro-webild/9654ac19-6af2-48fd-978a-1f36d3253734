"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { CheckCircle, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "About", id: "about" },
        { name: "Benefits", id: "benefits" },
        { name: "Services", id: "services" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Bin Wash Originals"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="Professional Bin Cleaning at Your Doorstep"
      description="We sanitize, deodorize, and scrub your trash bins so you don't have to. Enjoy a fresh-smelling home environment today. Questions? Call us at 0789007921."
      tag="Trusted Local Experts"
      buttons={[{ text: "Book Now", href: "#contact" }]}
      tagIcon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/man-servant-doing-chores-around-house_23-2149508102.jpg?_wi=1"
      imageAlt="professional trash bin cleaning service"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Restoring Cleanliness to Your Bins" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/garbage-man-making-silence-gesture_1368-1523.jpg", alt: "friendly service professional washing" },
      ]}
    />
  </div>

  <div id="benefits" data-section="benefits">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Eco-Friendly",          description: "100% biodegradable agents.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/gardening-home-with-plant_23-2149007981.jpg",            imageAlt: "eco friendly cleaning supplies"},
          items: [{ icon: CheckCircle, text: "Safe for pets" }, { icon: CheckCircle, text: "No harsh chemicals" }],
          reverse: false
        },
        {
          title: "Advanced Pressure",          description: "Deep cleaning technology.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/woman-washing-her-car-outdoors_23-2148958769.jpg",            imageAlt: "high pressure cleaning equipment"},
          items: [{ icon: CheckCircle, text: "High PSI wash" }, { icon: CheckCircle, text: "Hard grime removal" }],
          reverse: true
        },
        {
          title: "Odor Control",          description: "Lasting fresh results.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/front-view-spray-young-man-white-t-shirt-using-spray-against-covid-blue-floor_140725-11138.jpg",            imageAlt: "deodorized clean trash container"},
          items: [{ icon: CheckCircle, text: "Smell elimination" }, { icon: CheckCircle, text: "Fresh scent finish" }],
          reverse: false
        },
      ]}
      title="Why Choose Our Service?"
      description="We offer more than just a wash—we offer peace of mind."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Standard Single Bin", price: "R290", imageSrc: "http://img.b2bpic.net/free-photo/man-servant-doing-chores-around-house_23-2149508102.jpg?_wi=2" },
        { id: "p2", name: "Dual Bin Standard", price: "R450", imageSrc: "http://img.b2bpic.net/free-photo/young-asian-man-put-his-credit-card-removes-cash-from-green-atm_627829-1126.jpg" },
        { id: "p3", name: "Monthly Maintenance", price: "R790", imageSrc: "http://img.b2bpic.net/free-photo/truck-driver-putting-gloves-remove-vehicle-tarpaulin-unloading_342744-1295.jpg" },
        { id: "p4", name: "Quarterly Deep Clean", price: "R1200", imageSrc: "http://img.b2bpic.net/free-photo/kid-throwing-plastic-bottle-recycle-bin_23-2148472408.jpg" },
        { id: "p5", name: "Annual Total Care", price: "R3500", imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-cleaning-staircase-handrail-gloves_176474-2816.jpg" },
        { id: "p6", name: "Move-In Special", price: "R550", imageSrc: "http://img.b2bpic.net/free-photo/plastic-trash-can-white-background_1387-149.jpg" },
      ]}
      title="Our Cleaning Packages"
      description="Choose the best plan for your household needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Miller", role: "Client", company: "Local Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/greetings-joyful-man-woman-standing-with-back-camera-shaking-hands_259150-58289.jpg" },
        { id: "2", name: "James Cook", role: "Client", company: "Local Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-lady-standing-with-crossed-arms-checked-shirt-hat-looking-confident_176474-47786.jpg" },
        { id: "3", name: "Anita Brown", role: "Client", company: "Local Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/country-music-interpret-singing-outdoors_23-2149498451.jpg" },
        { id: "4", name: "Mike Davis", role: "Client", company: "Local Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-big-city-woman-city_169016-66523.jpg" },
        { id: "5", name: "Laura Scott", role: "Client", company: "Local Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-mother-home_23-2148321636.jpg" },
      ]}
      title="Hear From Our Happy Neighbors"
      description="See why our community trusts us with their bin cleaning."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How often should I clean?", content: "We recommend at least quarterly for optimal freshness." },
        { id: "f2", title: "Do I need to be home?", content: "No, we work independently on your scheduled day." },
        { id: "f3", title: "Is the water safe?", content: "Yes, we use filtered greywater friendly solutions." },
        { id: "f4", title: "What areas do you serve?", content: "We provide service within a 20-mile radius of the city center." },
        { id: "f5", title: "How can I pay?", content: "We accept all major credit cards and digital payments online." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-customer-service-agent_23-2151933134.jpg"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Get quick answers about our process."
      faqsAnimation="slide-up"
      imageAlt="customer support questions answered"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Ready to Get Started?"
      title="Schedule Your Wash Now"
      description="Take the first step toward a cleaner home environment. Call us at 0789007921 to book your appointment today."
      buttons={[{ text: "Contact Us", href: "#contact" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",          items: [{ label: "About", href: "#about" }, { label: "Services", href: "#services" }],
        },
        {
          title: "Support",          items: [{ label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }],
        },
      ]}
      bottomLeftText="© 2024 Bin Wash Originals"
      bottomRightText="Call us: 0789007921"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}