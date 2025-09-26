import {
  Users,
  BarChart3,
  Mail,
  PenTool,
  Eye,
  Calendar,
  Shield,
  Target,
  TrendingUp,
  Settings,
  Search,
  ImageIcon,
} from "lucide-react";

export const features = [
  {
    icon: PenTool,
    title: "AI Writing Assistant",
    desc: "Generate optimized titles, refine your writing, and enhance SEO with ease.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Community Building",
    desc: "Expand your reach through followers, comments, and interactive engagement tools.",
    color: "from-green-500 to-yellow-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    desc: "Monitor performance with detailed audience metrics and content engagement stats.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Calendar,
    title: "Content Scheduling",
    desc: "Organize and publish your content ahead of time with real-time scheduling tools.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: ImageIcon,
    title: "AI Image Transformations",
    desc: "Edit visuals effortlessly with background removal, smart cropping, and text overlays.",
    color: "from-red-500 to-purple-500",
  },
  {
    icon: Search,
    title: "Content Discovery",
    desc: "Stay updated on trends and explore fresh content from creators across the platform.",
    color: "from-emerald-500 to-green-500",
  },
];

export const socialProofStats = [
  { metric: "50K+", label: "Active Creators", icon: Users },
  { metric: "2M+", label: "Published Posts", icon: PenTool },
  { metric: "10M+", label: "Monthly Readers", icon: Eye },
  { metric: "99.9%", label: "Uptime", icon: Shield },
];

// Testimonials removed as requested

export const platformTabs = [
  {
    title: "Content Creation",
    icon: PenTool,
    description:
      "AI-driven writing tools designed to help you craft impactful content faster.",
    features: [
      "Intelligent headline suggestions",
      "SEO-focused improvements",
      "Content optimization",
      "Built-in plagiarism checks",
    ],
  },
  {
    title: "Audience Growth",
    icon: TrendingUp,
    description:
      "Leverage insights and tools to expand your community and strengthen engagement.",
    features: [
      "Follower and reach analytics",
      "Engagement monitoring",
      "Community insights",
      "Actionable growth tips",
    ],
  },
  {
    title: "Content Management",
    icon: Settings,
    description:
      "Easily manage drafts, schedule posts, and track performance with streamlined tools.",
    features: [
      "Draft and save system",
      "Advanced scheduling options",
      "Comprehensive analytics",
      "Media organization tools",
    ],
  },
];
