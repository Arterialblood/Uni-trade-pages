import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsSection } from "@/components/StatsSection";
import { CollegeTimeline } from "@/components/CollegeTimeline";
import { BookOpen, Users, Shield, Zap, GraduationCap, ShoppingBag, Briefcase, Monitor } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "极致精准匹配",
      description: "基于学院、年级、专业、课程、任课教师五维标签，精准定位所需学习资料，告别无关内容干扰。",
      highlights: ["五维标签", "成绩标识", "同校专属"],
      gradient: true
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "学长学姐笔记",
      description: "直接对接直系学长学姐的真实学习积累，适配本校教学进度和老师授课风格。",
      highlights: ["真实积累", "教学适配", "考试重点"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "校园信任体系",
      description: "学号认证，同校学生交易，降低诈骗风险，支持先预览后购买的安全交易模式。",
      highlights: ["学号认证", "安全交易", "先预览后购买"]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "求职资源整合",
      description: "汇聚同校学长学姐提供的内推邮箱、内推码等优质就业机会，减少信息差。",
      highlights: ["内推资源", "就业机会", "校友网络"]
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "闲置物品交易",
      description: "支持二手教材、生活用品、电子产品等交易，同样运用标签体系快速匹配。",
      highlights: ["二手教材", "生活用品", "快速匹配"]
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "网课资源推荐",
      description: "整合优质网课资源，结合校园标签推荐适配不同专业、年级的课程。",
      highlights: ["优质网课", "专业适配", "年级推荐"]
    }
  ];

  const coreValues = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "30秒快速发布",
      description: "系统自动关联课程库、教师名单，用户只需选择标签即可完成发布"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "学霸变现渠道",
      description: "优质笔记、复习提纲可定价售卖，平台低抽成或不抽成"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "覆盖学习全场景",
      description: "从课程笔记到求职资源，从闲置交易到网课推荐"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 英雄区域 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/5">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    校园宝
                  </span>
                  <br />
                  <span className="text-foreground">
                    精准匹配的校园学习平台
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  专为本校学生打造的综合性校园服务平台，通过五维标签体系精准匹配学习资料，
                  构建"精准供需 + 校园信任"的闭环生态。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  立即体验
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  了解更多
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  仅限本校学生
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  学号认证安全
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  五维精准标签
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card bg-gradient-to-br from-primary/10 to-accent/10 p-1">
                <img 
                  src="/lovable-uploads/02eb3ee0-5c39-445b-bc42-d161c2c08cb7.png"
                  alt="校园宝平台展示" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值 */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              为什么选择校园宝？
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              基于校园场景深度定制，解决传统学习资源平台"不精准、不安全、不专业"的核心痛点
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-foreground">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能特色 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              全方位校园服务
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              从学习资料到求职资源，从闲置交易到网课推荐，校园宝全方位满足学生的校园学习与生活需求
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <StatsSection />

      {/* 学院生态展示 */}
      <CollegeTimeline />

      {/* CTA区域 */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              开启精准校园学习体验
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              加入校园宝，体验前所未有的精准资料匹配，与同校学长学姐建立学习连接
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                免费注册
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6">
                查看演示
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
