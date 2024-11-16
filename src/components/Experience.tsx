import { Link, Linkedin } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  companyUrl: string;
  linkedinUrl: string;
}

const experiences: Experience[] = [
  {
    company: "Crownstack Technologies",
    role: "Sr. Software Engineer",
    period: "Feb 2024 - Present",
    location: "Noida",
    description: "Spearhead full-stack development using MERN stack, collaborating with cross-functional teams to design and implement scalable web applications. Focus on optimizing performance, ensuring code quality, and mentoring junior developers.",
    companyUrl: "https://www.crownstack.com/",
    linkedinUrl: "https://www.linkedin.com/company/crownstack/"
  },
  {
    company: "Kiwitech LLC",
    role: "Software Engineer: Web",
    period: "April 2022 - Jan 2024",
    location: "Noida",
    description: "Led frontend development efforts on key projects, collaborating closely with cross-functional teams. Ensured alignment of frontend solutions with client goals and expectations.",
    companyUrl: "https://www.kiwitech.com/",
    linkedinUrl: "https://www.linkedin.com/company/kiwitech/"
  },
  {
    company: "Cognizant",
    role: "Program Analyst",
    period: "Jan 2021 - Mar 2022",
    location: "Bangalore",
    description: "Worked with platforms like Shopify and Salesforce, implementing custom solutions and integrations. Developed comprehensive healthcare e-commerce solutions.",
    companyUrl: "https://www.cognizant.com/in/en",
    linkedinUrl: "https://www.linkedin.com/company/cognizant/"
  },
  {
    company: "GTB Infotech",
    role: "Intern",
    period: "Sept 2020 - Dec 2020",
    location: "Jalandhar",
    description: "Interned as a Web Developer, gaining practical experience in Java, Python, HTML, CSS, and JavaScript. Participated in full software development lifecycle.",
    companyUrl: "https://gtbinfotech.in/",
    linkedinUrl: "https://www.linkedin.com/company/gtbinfotech/"
  }
];
 const Experience = () => (
  <section className="py-16 bg-background">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-foreground mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-background border border-foreground/10 p-6 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  <a 
                    href={exp.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground/80 flex items-center gap-2 group"
                  >
                    {exp.company}
                    <Link className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                <p className="text-foreground/60 mt-1">{exp.role}</p>
                <p className="text-foreground/60 mt-1">{exp.period} | {exp.location}</p>
              </div>
              <a 
                href={exp.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                title={`${exp.company} LinkedIn`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-foreground/80">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;