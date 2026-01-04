import { Link } from 'react-router-dom';
import {
  LayoutGrid,
  Link as LinkIcon,
  Layers,
  ArrowRightLeft,
  GitBranch,
  Triangle,
  Hash,
  Network,
  FileText,
  Gauge,
  Code2,
  GraduationCap,
  ArrowRight,
  Zap,
  BookOpen,
  Target
} from 'lucide-react';
import { Card, CardLink, CardTitle, CardDescription } from '../components/Card';
import { Section, SectionTitle } from '../components/Section';

const dataStructures = [
  { name: 'Arrays', href: '/ds/arrays', icon: LayoutGrid, color: 'bg-blue-500', description: 'Contiguous memory storage' },
  { name: 'Linked Lists', href: '/ds/linked-lists', icon: LinkIcon, color: 'bg-green-500', description: 'Node-based sequential data' },
  { name: 'Stacks', href: '/ds/stacks', icon: Layers, color: 'bg-purple-500', description: 'LIFO data structure' },
  { name: 'Queues', href: '/ds/queues', icon: ArrowRightLeft, color: 'bg-orange-500', description: 'FIFO data structure' },
  { name: 'Trees', href: '/ds/trees', icon: GitBranch, color: 'bg-emerald-500', description: 'Hierarchical structure' },
  { name: 'Heaps', href: '/ds/heaps', icon: Triangle, color: 'bg-yellow-500', description: 'Priority-based tree' },
  { name: 'Hash Tables', href: '/ds/hash-tables', icon: Hash, color: 'bg-pink-500', description: 'Key-value mapping' },
  { name: 'Graphs', href: '/ds/graphs', icon: Network, color: 'bg-cyan-500', description: 'Vertices and edges' },
  { name: 'Tries', href: '/ds/tries', icon: FileText, color: 'bg-indigo-500', description: 'Prefix tree for strings' },
];

const quickLinks = [
  {
    name: 'Algorithms',
    href: '/algorithms',
    icon: Code2,
    description: 'Sorting, searching, and more',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Complexity Analysis',
    href: '/complexity',
    icon: Gauge,
    description: 'Big O notation and optimization',
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Interview Prep',
    href: '/interview',
    icon: GraduationCap,
    description: 'Must-know problems and patterns',
    color: 'from-orange-600 to-red-600'
  },
];

const stats = [
  { label: 'Data Structures', value: '9', icon: Layers },
  { label: 'Algorithms', value: '30+', icon: Code2 },
  { label: 'Interview Problems', value: '50+', icon: Target },
  { label: 'Code Examples', value: '100+', icon: BookOpen },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white">
              Data Structures & Algorithms
            </h1>
            <p className="text-slate-400 mt-1">
              Your comprehensive quick reference guide
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <Section>
        <SectionTitle>Quick Access</SectionTitle>
        <div className="grid md:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${link.color} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="relative z-10">
                <link.icon className="w-10 h-10 text-white/90 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{link.name}</h3>
                <p className="text-white/80 text-sm">{link.description}</p>
                <div className="flex items-center gap-2 mt-4 text-white/90 text-sm font-medium">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            </Link>
          ))}
        </div>
      </Section>

      {/* Data Structures Grid */}
      <Section>
        <SectionTitle>Data Structures</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataStructures.map((ds) => (
            <CardLink key={ds.name} to={ds.href}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${ds.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <ds.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">{ds.name}</CardTitle>
                  <CardDescription className="text-sm">{ds.description}</CardDescription>
                </div>
              </div>
            </CardLink>
          ))}
        </div>
      </Section>

      {/* Tips Section */}
      <Section>
        <Card className="bg-gradient-to-r from-slate-800 to-slate-800/50 border-primary-500/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Study Tips</h3>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">•</span>
                  <span>Master the fundamentals before moving to advanced topics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">•</span>
                  <span>Practice implementing data structures from scratch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">•</span>
                  <span>Understand time and space complexity for each operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">•</span>
                  <span>Solve problems using different approaches to find optimal solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
