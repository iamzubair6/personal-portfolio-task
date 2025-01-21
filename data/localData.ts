import { Project, ProjectCategory } from "@/types/propType";

export const skills = [
  { title: "UX", value: 90 },
  { title: "Website Design", value: 95 },
  { title: "App Design", value: 75 },
  { title: "Graphic Design", value: 95 },
];

export const services = [
  {
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    image: "/1.svg",
  },
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    image: "/2.svg",
  },
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    image: "/3.svg",
  },
  {
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    image: "/4.svg",
  },
];
export const projects: Project[] = [
  {
    id: 1,
    title: "AirCalling Landing Page Design",
    category: "Web Design",
    image: "/p1.svg",
  },
  {
    id: 2,
    title: "Business Landing Page Design",
    category: "Web Design",
    image: "/p2.png",
  },
  {
    id: 3,
    title: "Ecom Web Page Design",
    category: "Web Design",
    image: "/p3.png",
  },
];

export const categories: ProjectCategory[] = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];
export const testimonials = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "John Smith",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 2,
    content:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. They've transformed our vision into reality.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 3,
    content:
      "The level of professionalism and creativity they bring to the table is exceptional. Our project was delivered on time and exceeded all expectations.",
    name: "Michael Chen",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop",
  },
];
export const headerNavigation = [
  { name: "Home", href: "home" },
  { name: "About Me", href: "about" },
  { name: "Services", href: "services" },
  { name: "Projects", href: "projects" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Contact", href: "contact" },
];
export const footerNavigation = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/#" },
  { name: "Services", href: "/#" },
  { name: "Projects", href: "/#" },
  { name: "Testimonials", href: "/#" },
  { name: "Contact", href: "/#" },
];
