import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const collegeData = [
  {
    id: 1,
    title: "金融管理学院",
    date: "1960年建立",
    content: "专注金融理论与实践教学，培养金融行业精英人才。提供优质的学习资源包括金融建模、投资分析等课程笔记和实践案例。",
    category: "Finance",
    image: "/lovable-uploads/c8646e71-94fc-4f81-b0a1-5797df74d808.png",
    relatedIds: [2, 6],
    status: "active" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "商学院",
    date: "建校初期",
    content: "工商管理核心学科，涵盖市场营销、企业管理、战略规划等专业领域。学长学姐分享的管理学笔记和案例分析深受好评。",
    category: "Business",
    image: "/lovable-uploads/b80c1f96-30e1-464d-9957-43ad23736897.png",
    relatedIds: [1, 3, 6],
    status: "featured" as const,
    energy: 88,
  },
  {
    id: 3,
    title: "会计学院",
    date: "1987年成立",
    content: "会计与财务管理专业教育的领军学院，提供从基础会计到高级财务分析的全套学习资料，包括考证资料和实务操作指南。",
    category: "Accounting",
    image: "/lovable-uploads/1d4d136b-7903-4cc2-9c10-0860a266478e.png",
    relatedIds: [1, 2],
    status: "active" as const,
    energy: 92,
  },
  {
    id: 4,
    title: "外国语学院",
    date: "学校特色学院",
    content: "多语种教学与国际交流中心，提供英语、日语、法语等多语种学习资源。学长学姐的语言学习方法和考试技巧分享很受欢迎。",
    category: "Languages",
    image: "/lovable-uploads/0db6efbd-e48c-4e43-b494-f94d2891b798.png",
    relatedIds: [9, 7],
    status: "featured" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "法学院",
    date: "1984年建立",
    content: "法律教育与研究基地，专注国际商法、经济法等领域。提供法律条文解析、案例研究和司法考试资料等学习资源。",
    category: "Law",
    image: "/lovable-uploads/dddf4e69-e8b4-4810-b1ab-5a7d1d763662.png",
    relatedIds: [9, 6],
    status: "active" as const,
    energy: 78,
  },
  {
    id: 6,
    title: "工商管理学院",
    date: "2008年成立",
    content: "现代工商管理教育创新基地，融合理论与实践。学生可以找到企业管理、项目管理等课程的优质笔记和实习机会分享。",
    category: "Management",
    image: "/lovable-uploads/f6f39a4b-b8da-40a3-9b58-dc17b09bc991.png",
    relatedIds: [1, 2, 5],
    status: "new" as const,
    energy: 90,
  },
  {
    id: 7,
    title: "会展与传播学院",
    date: "现代化学院",
    content: "会展经济与传播学教育前沿，结合数字化传媒发展。提供会展策划、新媒体运营等前沿课程资料和行业实践案例。",
    category: "Communication",
    image: "/lovable-uploads/9a535aca-397e-4061-bbf9-f3b36e0d8cc1.png",
    relatedIds: [4, 8],
    status: "featured" as const,
    energy: 82,
  },
  {
    id: 8,
    title: "统计与数据科学学院",
    date: "2008年设立",
    content: "大数据时代的统计学教育，融合人工智能与数据分析。学长学姐分享的编程笔记、数据分析项目和算法解析非常实用。",
    category: "Data Science",
    image: "/lovable-uploads/3cd3d662-89bf-4978-9d82-065905de1d4e.png",
    relatedIds: [7, 10],
    status: "new" as const,
    energy: 94,
  },
  {
    id: 9,
    title: "国际组织学院",
    date: "新设学院",
    content: "培养国际组织人才的专门学院，聚焦全球治理和国际关系。提供国际组织实习机会、外交礼仪和多语种谈判技巧等资源。",
    category: "Global Governance",
    image: "/lovable-uploads/07f29ff0-ae71-4f10-ad72-d6c8bfc2fdde.png",
    relatedIds: [4, 5],
    status: "new" as const,
    energy: 86,
  },
  {
    id: 10,
    title: "马克思主义学院",
    date: "思政教育基地",
    content: "马克思主义理论教育与研究中心，承担全校思想政治教育工作。提供政治理论学习资料、时事分析和考研政治复习资源。",
    category: "Political Science",
    image: "/lovable-uploads/54ae29d0-b072-4ae6-9c69-6f66abbf0fcb.png",
    relatedIds: [8, 9],
    status: "active" as const,
    energy: 75,
  },
];

export function CollegeTimeline() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          探索校园学院生态
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          通过交互式学院地图，发现各学院的特色资源和学习机会。点击学院节点探索详细信息，查看学院间的合作关系。
        </p>
      </div>
      
      <RadialOrbitalTimeline timelineData={collegeData} />
      
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="w-4 h-4 bg-primary rounded-full mx-auto"></div>
            <h3 className="font-semibold text-foreground">活跃学院</h3>
            <p className="text-sm text-muted-foreground">资源丰富，学生活跃度高</p>
          </div>
          <div className="space-y-2">
            <div className="w-4 h-4 bg-accent rounded-full mx-auto"></div>
            <h3 className="font-semibold text-foreground">特色学院</h3>
            <p className="text-sm text-muted-foreground">专业特色鲜明，优质资源突出</p>
          </div>
          <div className="space-y-2">
            <div className="w-4 h-4 bg-secondary rounded-full mx-auto"></div>
            <h3 className="font-semibold text-foreground">新建学院</h3>
            <p className="text-sm text-muted-foreground">新兴学科，发展潜力巨大</p>
          </div>
        </div>
      </div>
    </div>
  );
}