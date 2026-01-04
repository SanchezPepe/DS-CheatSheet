import { useState } from 'react';
import {
  Gauge,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb
} from 'lucide-react';
import {
  bigOComplexities,
  complexityComparison,
  spaceComplexityGuide,
  timeComplexityTips,
  commonMistakes
} from '../data/complexity';
import { Card, CardTitle } from '../components/Card';
import { Section, SectionTitle } from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ComplexityBadge from '../components/ComplexityBadge';

const colorClasses = {
  green: 'bg-green-500/20 border-green-500/50 text-green-400',
  emerald: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400',
  blue: 'bg-blue-500/20 border-blue-500/50 text-blue-400',
  cyan: 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400',
  yellow: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400',
  orange: 'bg-orange-500/20 border-orange-500/50 text-orange-400',
  red: 'bg-red-500/20 border-red-500/50 text-red-400'
};

export default function Complexity() {
  const [activeTab, setActiveTab] = useState('ds');

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
          Complexity Analysis
        </h1>
        <p className="text-slate-400 text-lg">
          Understanding Big O notation and algorithm optimization
        </p>
      </div>

      {/* Big O Overview */}
      <Section>
        <SectionTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary-400" />
          Big O Notation Overview
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {bigOComplexities.map((complexity) => (
            <Card
              key={complexity.notation}
              className={`border ${colorClasses[complexity.color]}`}
            >
              <div className="text-center mb-3">
                <div className="text-2xl font-bold">{complexity.notation}</div>
                <div className="text-sm opacity-80">{complexity.name}</div>
              </div>
              <p className="text-xs text-slate-400 mb-3">{complexity.description}</p>
              <div className="text-xs">
                <div className="text-slate-500 mb-1">Examples:</div>
                <ul className="space-y-1">
                  {complexity.examples.slice(0, 2).map((ex, idx) => (
                    <li key={idx} className="text-slate-400">• {ex}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Growth Visualization */}
      <Section>
        <SectionTitle>Growth Rate Comparison</SectionTitle>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left pb-3 text-slate-400">n</th>
                  {bigOComplexities.slice(0, 6).map((c) => (
                    <th key={c.notation} className="text-left pb-3 text-slate-400">
                      {c.notation}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {[10, 100, 1000].map((n) => (
                  <tr key={n}>
                    <td className="py-2 text-white font-medium">{n}</td>
                    <td className="py-2 text-green-400">1</td>
                    <td className="py-2 text-emerald-400">{Math.ceil(Math.log2(n))}</td>
                    <td className="py-2 text-blue-400">{n}</td>
                    <td className="py-2 text-cyan-400">{Math.ceil(n * Math.log2(n))}</td>
                    <td className="py-2 text-yellow-400">{n * n}</td>
                    <td className="py-2 text-orange-400">
                      {n === 10 ? '1,024' : n === 100 ? '10^30' : '10^301'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            * Operations shown for input size n. Exponential grows extremely fast!
          </p>
        </Card>
      </Section>

      {/* Comparison Tables */}
      <Section>
        <SectionTitle>Complexity Comparison</SectionTitle>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('ds')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'ds'
                ? 'bg-primary-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Data Structures
          </button>
          <button
            onClick={() => setActiveTab('sort')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'sort'
                ? 'bg-primary-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Sorting Algorithms
          </button>
        </div>

        <Card>
          {activeTab === 'ds' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left pb-3 text-slate-400">Structure</th>
                    <th className="text-left pb-3 text-slate-400">Access</th>
                    <th className="text-left pb-3 text-slate-400">Search</th>
                    <th className="text-left pb-3 text-slate-400">Insert</th>
                    <th className="text-left pb-3 text-slate-400">Delete</th>
                    <th className="text-left pb-3 text-slate-400">Space</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {complexityComparison.dataStructures.map((ds) => (
                    <tr key={ds.structure}>
                      <td className="py-2 text-white font-medium">{ds.structure}</td>
                      <td className="py-2">
                        <ComplexityBadge complexity={ds.access} />
                      </td>
                      <td className="py-2">
                        <ComplexityBadge complexity={ds.search} />
                      </td>
                      <td className="py-2">
                        <ComplexityBadge complexity={ds.insert} />
                      </td>
                      <td className="py-2">
                        <ComplexityBadge complexity={ds.delete} />
                      </td>
                      <td className="py-2">
                        <ComplexityBadge complexity={ds.space} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-4">
                * Average case. ** Access to min/max only. Asterisks in table indicate notes.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left pb-3 text-slate-400">Algorithm</th>
                    <th className="text-left pb-3 text-slate-400">Best</th>
                    <th className="text-left pb-3 text-slate-400">Average</th>
                    <th className="text-left pb-3 text-slate-400">Worst</th>
                    <th className="text-left pb-3 text-slate-400">Space</th>
                    <th className="text-left pb-3 text-slate-400">Stable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {complexityComparison.sortingAlgorithms.map((algo) => (
                    <tr key={algo.algorithm}>
                      <td className="py-2 text-white font-medium">{algo.algorithm}</td>
                      <td className="py-2">
                        <ComplexityBadge complexity={algo.best} />
                      </td>
                      <td className="py-2">
                        <ComplexityBadge complexity={algo.average} />
                      </td>
                      <td className="py-2">
                        <ComplexityBadge complexity={algo.worst} />
                      </td>
                      <td className="py-2">
                        <ComplexityBadge complexity={algo.space} />
                      </td>
                      <td className="py-2">
                        {algo.stable ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-400" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </Section>

      {/* Space Complexity */}
      <Section>
        <SectionTitle className="flex items-center gap-2">
          <Gauge className="w-5 h-5 text-purple-400" />
          Space Complexity
        </SectionTitle>
        <Card>
          <p className="text-slate-400 mb-6">{spaceComplexityGuide.description}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {spaceComplexityGuide.components.map((component) => (
              <div key={component.name} className="bg-slate-900 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">{component.name}</h4>
                <p className="text-sm text-slate-400">{component.description}</p>
                <p className="text-xs text-slate-500 mt-2">{component.note}</p>
              </div>
            ))}
          </div>

          <h4 className="text-lg font-semibold text-white mb-4">Examples</h4>
          <div className="space-y-4">
            {spaceComplexityGuide.examples.map((example) => (
              <div key={example.name} className="bg-slate-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-white font-medium">{example.name}</h5>
                  <ComplexityBadge complexity={example.space} />
                </div>
                <p className="text-sm text-slate-400 mb-3">{example.example}</p>
                <div className="bg-slate-950 rounded-lg">
                  <CodeBlock code={example.code} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* Tips */}
      <Section>
        <SectionTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          Optimization Tips
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          {timeComplexityTips.map((tip) => (
            <Card key={tip.title}>
              <h4 className="text-white font-medium mb-2">{tip.title}</h4>
              <p className="text-slate-400 text-sm mb-2">{tip.description}</p>
              <p className="text-xs text-primary-400">{tip.example}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Common Mistakes */}
      <Section>
        <SectionTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          Common Mistakes
        </SectionTitle>
        <div className="space-y-4">
          {commonMistakes.map((item) => (
            <Card key={item.mistake} className="border-orange-500/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-medium">Mistake: {item.mistake}</h4>
                  <p className="text-sm text-green-400 mt-1">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    {item.correct}
                  </p>
                </div>
              </div>
              <div className="bg-slate-950 rounded-lg">
                <CodeBlock code={item.code} />
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
