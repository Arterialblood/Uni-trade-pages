import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
  gradient?: boolean;
}

export const FeatureCard = ({ icon, title, description, highlights, gradient = false }: FeatureCardProps) => {
  return (
    <Card className={`group h-full transition-all duration-300 hover:shadow-card hover:scale-105 ${
      gradient ? 'bg-gradient-to-br from-card to-secondary/50' : 'bg-card'
    }`}>
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
            >
              {highlight}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};