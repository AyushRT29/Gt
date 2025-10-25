import { Code2, Database, Cpu, Smartphone, Zap, Box, Terminal, FileCode } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  icon: any;
  category: string;
}

const skills: Skill[] = [
  { name: 'PHP Laravel', icon: Code2, category: 'Framework' },
  { name: 'Java', icon: Code2, category: 'Language' },
  { name: 'DSA', icon: Terminal, category: 'Algorithms' },
  { name: 'HTML', icon: FileCode, category: 'Frontend' },
  { name: 'CSS', icon: Zap, category: 'Styling' },
  { name: 'JavaScript', icon: Code2, category: 'Language' },
  { name: 'MySQL', icon: Database, category: 'Database' },
  { name: 'Android Dev', icon: Smartphone, category: 'Mobile' },
  { name: 'Kotlin', icon: Code2, category: 'Language' },
  { name: 'Firebase', icon: Database, category: 'Backend' },
  { name: 'Git & GitHub', icon: Box, category: 'Tools' },
  { name: 'VS Code', icon: Terminal, category: 'Tools' },
];

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-black"
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="gta-title text-4xl md:text-5xl lg:text-6xl text-center mb-6"
          data-testid="text-skills-title"
        >
          <span className="neon-green">WEAPON</span> <span className="text-white">INVENTORY</span>
        </h2>
        
        <p className="text-center text-gray-400 mb-16 text-lg">
          Tools and technologies in my arsenal
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-card border-2 border-border rounded-md hover:border-primary transition-all duration-300 neon-glow-green hover:scale-105 group"
                data-testid={`skill-${skill.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <Icon className="w-12 h-12 mb-4 text-secondary group-hover:neon-orange transition-colors" />
                <h3 className="text-lg font-bold text-white group-hover:neon-green transition-colors mb-2">
                  {skill.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {skill.category}
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
