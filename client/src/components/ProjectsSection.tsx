import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface Project {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  reward: string;
  link: string;
  tech: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'RestroPro',
    description: 'A dynamic and user-friendly restaurant management web application developed using PHP Laravel. Features include table management, menu customization, order tracking, and billing system for running small eateries to full-scale restaurants.',
    difficulty: 'Hard',
    reward: '$5000 + Respect Points',
    link: 'https://restropro.free.nf/',
    tech: 'PHP Laravel, MySQL, HTML, CSS, JavaScript',
  },
  {
    id: 2,
    title: 'Craftique',
    description: 'A clean and modern minimalist e-commerce front-end built using pure HTML and CSS. Designed with a focus on simplicity and user experience, showcasing a stylish product catalog with responsive design.',
    difficulty: 'Medium',
    reward: '$3000 + Respect Points',
    link: 'https://ayushrt29.github.io/Craftique/',
    tech: 'HTML, CSS, Responsive Design',
  },
  {
    id: 3,
    title: 'Android Development',
    description: 'Currently learning Android app development using Java/Kotlin and XML. Building mobile applications with modern Android architecture components, Firebase integration, and Material Design principles.',
    difficulty: 'Medium',
    reward: '$3500 + Respect Points',
    link: 'https://github.com/AyushRT29',
    tech: 'Java, Kotlin, XML, Firebase, Android SDK',
  },
  {
    id: 4,
    title: 'DSA Practice',
    description: 'Actively practicing Data Structures and Algorithms in Java. Solving complex problems, implementing efficient algorithms, and preparing for technical interviews with strong foundations in DSA.',
    difficulty: 'Hard',
    reward: '$4000 + Respect Points',
    link: 'https://github.com/AyushRT29',
    tech: 'Java, Data Structures, Algorithms',
  },
];

export default function ProjectsSection() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'neon-green';
      case 'Medium': return 'neon-orange';
      case 'Hard': return 'neon-red';
      default: return 'text-gray-400';
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 bg-gradient-to-b from-black to-gray-900"
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="gta-title text-4xl md:text-5xl lg:text-6xl text-center mb-6"
          data-testid="text-projects-title"
        >
          <span className="neon-orange">MISSION</span> <span className="text-white">LOG</span>
        </h2>
        
        <p className="text-center text-gray-400 mb-16 text-lg">
          Completed missions and active contracts
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="bg-card border-2 border-secondary hover:border-primary transition-all duration-300 neon-glow-orange hover:neon-glow-green group"
              data-testid={`card-project-${project.id}`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-bold text-white group-hover:neon-green transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className={`text-sm font-bold ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">TECH STACK:</span>
                  <span className="text-xs font-bold text-gray-400">{project.tech}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">REWARD:</span>
                  <span className="text-sm font-bold neon-green">{project.reward}</span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  onClick={() => {
                    window.open(project.link, '_blank');
                  }}
                  className="w-full font-bold neon-glow-green"
                  data-testid={`button-start-mission-${project.id}`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  START MISSION
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
