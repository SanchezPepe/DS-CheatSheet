import { useParams, Link } from 'react-router-dom';
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
  ArrowLeft,
  Clock,
  HardDrive,
  Lightbulb,
  Wrench,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { dataStructures } from '../data/dataStructures';
import { Card, CardTitle, CardDescription } from '../components/Card';
import { Section, SectionTitle, SectionSubtitle } from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ComplexityBadge from '../components/ComplexityBadge';

const iconMap = {
  LayoutGrid,
  Link: LinkIcon,
  Layers,
  ArrowRightLeft,
  GitBranch,
  Triangle,
  Hash,
  Network,
  FileText
};

const colorMap = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
  emerald: 'bg-emerald-500',
  yellow: 'bg-yellow-500',
  pink: 'bg-pink-500',
  cyan: 'bg-cyan-500',
  indigo: 'bg-indigo-500'
};

export default function DataStructurePage() {
  const { id } = useParams();

  // Map URL id to data key
  const keyMap = {
    'arrays': 'arrays',
    'linked-lists': 'linkedLists',
    'stacks': 'stacks',
    'queues': 'queues',
    'trees': 'trees',
    'heaps': 'heaps',
    'hash-tables': 'hashTables',
    'graphs': 'graphs',
    'tries': 'tries'
  };

  const ds = dataStructures[keyMap[id]];

  if (!ds) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-white mb-4">Data Structure Not Found</h1>
        <Link to="/" className="text-primary-400 hover:underline">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const Icon = iconMap[ds.icon] || LayoutGrid;
  const bgColor = colorMap[ds.color] || 'bg-blue-500';

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Dashboard</span>
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <div className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white">{ds.name}</h1>
          <p className="text-slate-400 mt-2 text-lg">{ds.description}</p>
        </div>
      </div>

      {/* Complexity Table */}
      <Section>
        <SectionTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-400" />
          Time & Space Complexity
        </SectionTitle>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="pb-3 text-slate-400 font-medium">Operation</th>
                  <th className="pb-3 text-slate-400 font-medium">Time</th>
                  <th className="pb-3 text-slate-400 font-medium">Space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {Object.entries(ds.complexity).map(([op, complexity]) => (
                  <tr key={op}>
                    <td className="py-3 text-white capitalize">{op}</td>
                    <td className="py-3">
                      <ComplexityBadge complexity={complexity.time} />
                    </td>
                    <td className="py-3">
                      <ComplexityBadge complexity={complexity.space} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700 flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400">Overall Space Complexity:</span>
            <ComplexityBadge complexity={ds.spaceComplexity} />
          </div>
        </Card>
      </Section>

      {/* Key Features & Use Cases */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary-400" />
            <CardTitle>Key Features</CardTitle>
          </div>
          <ul className="space-y-2">
            {ds.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-300">
                <span className="text-primary-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-emerald-400" />
            <CardTitle>Use Cases</CardTitle>
          </div>
          <ul className="space-y-2">
            {ds.useCases.map((useCase, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-300">
                <span className="text-emerald-400 mt-1">•</span>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Common Algorithms */}
      <Section>
        <SectionTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          Common Algorithms
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {ds.algorithms.map((algo, idx) => (
            <Card key={idx} className="flex items-center justify-between">
              <span className="text-white font-medium">{algo.name}</span>
              <ComplexityBadge complexity={algo.complexity} />
            </Card>
          ))}
        </div>
      </Section>

      {/* Fun Facts */}
      <Section>
        <SectionTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          Did You Know?
        </SectionTitle>
        <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
          <ul className="space-y-3">
            {ds.funFacts.map((fact, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <span className="text-yellow-400 text-lg">💡</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Code Example */}
      <Section>
        <SectionTitle>Code Example</SectionTitle>
        <Card className="p-0 overflow-hidden">
          <div className="bg-slate-950 p-4">
            <CodeBlock code={ds.codeExample} />
          </div>
        </Card>
      </Section>
    </div>
  );
}
