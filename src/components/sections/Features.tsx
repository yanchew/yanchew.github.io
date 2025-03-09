import { motion } from 'framer-motion';
import { Code, Laptop, Zap } from 'lucide-react';

const features = [
  {
    title: "Next.js 14 mit App Router",
    description: "Modernste Next.js Version für optimale Performance und SEO",
    icon: Zap
  },
  {
    title: "TypeScript & React",
    description: "Typsichere Entwicklung mit React und TypeScript",
    icon: Code
  },
  {
    title: "Responsive Design",
    description: "Perfekte Darstellung auf allen Geräten",
    icon: Laptop
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative flex flex-col rounded-xl border bg-background/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="absolute inset-0 rounded-xl border border-transparent transition-colors group-hover:border-primary/50 group-hover:bg-background/80"
              />
              <div className="relative z-10">
                <feature.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 