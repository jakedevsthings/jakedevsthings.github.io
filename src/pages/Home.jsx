import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolio";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {" "}
      {/* Hero Section */}
      <section className="section-container py-20 lg:py-32">
        {" "}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Introduction */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="order-1 lg:order-1"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
            >
              <MapPin size={16} />
              {portfolioData.personal.location}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient">
                {portfolioData.personal.name.split(" ")[0]}
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-xl lg:text-2xl text-muted-foreground mb-8"
            >
              {portfolioData.personal.title}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed mb-10"
            >
              {portfolioData.summary}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>{" "}
              <a
                href="./SIAU_JACOB_RESUME_2025_06_22.pdf"
                download="SIAU_JACOB_RESUME_2025_06_22.pdf"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>{" "}
          {/* Right Column - Currently Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 lg:order-2 lg:mt-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Currently, I am:</h3>
            <div className="space-y-4">
              {" "}
              {/* JPMC Job */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-accent/20 border border-accent/30 rounded-lg p-4 hover:bg-accent/30 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-sm text-green-400 mb-1">
                      At JPMorgan Chase & Co.
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Creating API platform solutions and assisting migration
                      efforts between on-premises and cloud environments |
                      Developing Python-based tooling for operational insights
                      across systems and applications.
                    </p>
                  </div>
                </div>
              </motion.div>{" "}
              {/* MS Data Science */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-accent/20 border border-accent/30 rounded-lg p-4 hover:bg-accent/30 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-sm text-blue-400 mb-1">
                      Pursuing MS in Data Science
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Focusing on AI, Predictive Analytics, Big Data, and LLM
                      Deployment at Bellevue University
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* n8n Automation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-accent/20 border border-accent/30 rounded-lg p-4 hover:bg-accent/30 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-sm text-purple-400 mb-1">
                      Building n8n Automation Workflows
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Creating intelligent automation pipelines for content
                      generation and operational efficiency
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* AI Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-accent/20 border border-accent/30 rounded-lg p-4 hover:bg-accent/30 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-sm text-yellow-400 mb-1">
                      Exploring AI-Driven Solutions
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Researching and prototyping ideas for rapidly building
                      AI-powered applications and tools
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Featured Skills */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {portfolioData.skills["Programming Languages"]
              .slice(0, 4)
              .concat(
                portfolioData.skills["DevOps / Cloud Infra"].slice(0, 4),
                portfolioData.skills["LLMs & Prompting"].slice(0, 2)
              )
              .map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </section>
      {/* Quick Stats */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">
              Stakeholders Collaborated
            </div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary mb-2">50-100</div>
            <div className="text-muted-foreground">API Clients Supported</div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
