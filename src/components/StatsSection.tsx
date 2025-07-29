interface StatItemProps {
  number: string;
  label: string;
  description: string;
}

const StatItem = ({ number, label, description }: StatItemProps) => (
  <div className="text-center group">
    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
      {number}
    </div>
    <div className="text-lg font-semibold text-foreground mb-1">{label}</div>
    <div className="text-sm text-muted-foreground">{description}</div>
  </div>
);

export const StatsSection = () => {
  const stats = [
    {
      number: "98%",
      label: "匹配精准度",
      description: "基于五维标签精准匹配"
    },
    {
      number: "500+",
      label: "优质资料",
      description: "高分学长学姐分享"
    },
    {
      number: "10万+",
      label: "活跃用户",
      description: "覆盖全校各专业"
    },
    {
      number: "5分钟",
      label: "平均找到资料",
      description: "极速精准定位"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            数据见证实力
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            校园宝通过精准的标签体系和校园信任机制，为学生创造真正有价值的学习资源平台
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};