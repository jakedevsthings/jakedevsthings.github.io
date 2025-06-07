import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  MapPin,
  Download,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const contactMethods = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      description: "Best way to reach me for opportunities and collaborations",
      action: `mailto:${portfolioData.personal.email}`,
      actionText: portfolioData.personal.email,
      external: false,
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      title: "LinkedIn",
      description: "Connect with me professionally and see my latest updates",
      action: portfolioData.personal.linkedin,
      actionText: "linkedin.com/in/jacob-siau",
      external: true,
    },
    {
      icon: <Download className="text-primary" size={24} />,
      title: "Resume",
      description:
        "Download my latest resume for detailed experience and skills",
      action: "./SIAU_JACOB_RESUME_2025_06_01.pdf",
      actionText: "Download PDF",
      external: false,
      download: "SIAU_JACOB_RESUME_2025_06_01.pdf",
    },
  ];

  const topics = [
    "API Platform Architecture & Design",
    "Cloud Migration & DevOps Strategy",
    "AI/ML Integration & Automation",
    "Team Leadership & Mentoring",
    "Software Engineering Best Practices",
    "Career Opportunities",
  ];

  return (
    <div className="section-container py-16">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          I'm open to discussing new opportunities, sharing knowledge about
          software architecture and AI, or collaborating on interesting
          projects.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Methods */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  {method.icon}
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {method.description}
                    </p>
                  </div>
                </div>{" "}
                <a
                  href={method.action}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  download={method.download ? method.download : undefined}
                  className="btn-primary w-full text-center"
                >
                  {method.actionText}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Topics of Interest */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="text-primary" size={20} />
              <h3 className="text-lg font-semibold">
                Topics I'd Love to Discuss
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="text-primary" size={20} />
              <h3 className="text-lg font-semibold">Current Status</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium">Position:</span>
                <span className="text-muted-foreground ml-2">
                  {portfolioData.personal.title}
                </span>
              </div>
              <div>
                <span className="font-medium">Company:</span>
                <span className="text-muted-foreground ml-2">
                  JPMorgan Chase & Co.
                </span>
              </div>
              <div>
                <span className="font-medium">Location:</span>
                <span className="text-muted-foreground ml-2">
                  {portfolioData.personal.location}
                </span>
              </div>
              <div>
                <span className="font-medium">Availability:</span>
                <span className="text-muted-foreground ml-2">
                  Open to discussion but currently not seeking new roles unless
                  it’s a can’t-miss opportunity with the right incentives to
                  match my current commitments.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-lg font-semibold mb-4">Response Time</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Email</span>
                <span className="text-muted-foreground">Within 24 hours</span>
              </div>
              <div className="flex justify-between">
                <span>LinkedIn</span>
                <span className="text-muted-foreground">Within 48 hours</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-accent/10 rounded border-l-2 border-primary">
              <p className="text-xs text-muted-foreground">
                I typically respond faster to specific opportunities or
                technical discussions.
              </p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-primary" size={20} />
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <div className="text-sm space-y-2">
              <div>
                <span className="font-medium">Based in:</span>
                <span className="text-muted-foreground ml-2">Plano, Texas</span>
              </div>
              <div>
                <span className="font-medium">Time Zone:</span>
                <span className="text-muted-foreground ml-2">
                  Central Time (CT)
                </span>
              </div>
              <div>
                <span className="font-medium">Work Style:</span>
                <span className="text-muted-foreground ml-2">
                  Hybrid/Remote friendly
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="card bg-accent/5 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Let's Build Something Great Together
          </h3>
          <p className="text-muted-foreground mb-6">
            Whether you're looking for a technical leader, want to discuss
            software architecture, or explore AI/ML opportunities, I'd love to
            hear from you.
          </p>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail size={16} />
            Start a Conversation
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
