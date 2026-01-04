import { useState } from 'react';
import {
  ArrowUpDown,
  Search,
  Grid3x3,
  Share2,
  Undo2,
  ChevronDown,
  ChevronRight,
  Code2
} from 'lucide-react';
import { algorithmCategories, algorithmPatterns } from '../data/algorithms';
import { Card, CardTitle, CardDescription } from '../components/Card';
import { Section, SectionTitle } from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ComplexityBadge from '../components/ComplexityBadge';

const iconMap = {
  ArrowUpDown,
  Search,
  Grid3x3,
  Share2,
  Undo2
};

export default function Algorithms() {
  const [expandedCategory, setExpandedCategory] = useState('sorting');
  const [expandedAlgo, setExpandedAlgo] = useState(null);
  const [activePattern, setActivePattern] = useState(0);

  const categories = Object.values(algorithmCategories);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
          Algorithms
        </h1>
        <p className="text-slate-400 text-lg">
          Essential algorithms with implementations and complexity analysis
        </p>
      </div>

      {/* Algorithm Categories */}
      <Section>
        <SectionTitle>Algorithm Categories</SectionTitle>
        <div className="space-y-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            const isExpanded = expandedCategory === category.id;

            return (
              <Card key={category.id} className="overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <CardTitle>{category.name}</CardTitle>
                      <CardDescription className="text-sm">{category.description}</CardDescription>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {isExpanded && (
                  <div className="mt-6 space-y-3">
                    {category.algorithms.map((algo, idx) => {
                      const algoKey = `${category.id}-${idx}`;
                      const isAlgoExpanded = expandedAlgo === algoKey;

                      return (
                        <div
                          key={idx}
                          className="bg-slate-900 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => setExpandedAlgo(isAlgoExpanded ? null : algoKey)}
                            className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                          >
                            <div>
                              <h4 className="font-medium text-white">{algo.name}</h4>
                              <p className="text-sm text-slate-400 mt-1">{algo.description}</p>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                              <div className="hidden sm:flex gap-2">
                                <ComplexityBadge complexity={algo.timeComplexity.average} />
                              </div>
                              {isAlgoExpanded ? (
                                <ChevronDown className="w-4 h-4 text-slate-400" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-slate-400" />
                              )}
                            </div>
                          </button>

                          {isAlgoExpanded && (
                            <div className="px-4 pb-4 space-y-4">
                              {/* Complexity Table */}
                              <div className="grid sm:grid-cols-3 gap-3">
                                <div className="bg-slate-800 rounded-lg p-3 text-center">
                                  <div className="text-xs text-slate-400 mb-1">Best</div>
                                  <ComplexityBadge complexity={algo.timeComplexity.best} />
                                </div>
                                <div className="bg-slate-800 rounded-lg p-3 text-center">
                                  <div className="text-xs text-slate-400 mb-1">Average</div>
                                  <ComplexityBadge complexity={algo.timeComplexity.average} />
                                </div>
                                <div className="bg-slate-800 rounded-lg p-3 text-center">
                                  <div className="text-xs text-slate-400 mb-1">Worst</div>
                                  <ComplexityBadge complexity={algo.timeComplexity.worst} />
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <span className="text-slate-400">Space:</span>
                                  <ComplexityBadge complexity={algo.spaceComplexity} />
                                </div>
                                {algo.stable !== undefined && (
                                  <div className="flex items-center gap-2">
                                    <span className="text-slate-400">Stable:</span>
                                    <span className={algo.stable ? 'text-green-400' : 'text-red-400'}>
                                      {algo.stable ? 'Yes' : 'No'}
                                    </span>
                                  </div>
                                )}
                                {algo.useCase && (
                                  <div className="flex items-center gap-2">
                                    <span className="text-slate-400">Use:</span>
                                    <span className="text-slate-300">{algo.useCase}</span>
                                  </div>
                                )}
                              </div>

                              {/* Code */}
                              <div className="bg-slate-950 rounded-lg">
                                <CodeBlock code={algo.code} />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Algorithm Patterns */}
      <Section>
        <SectionTitle>Common Algorithm Patterns</SectionTitle>
        <Card>
          <div className="flex flex-wrap gap-2 mb-6">
            {algorithmPatterns.map((pattern, idx) => (
              <button
                key={idx}
                onClick={() => setActivePattern(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activePattern === idx
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {pattern.name}
              </button>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {algorithmPatterns[activePattern].name}
            </h3>
            <p className="text-slate-400 mb-2">
              {algorithmPatterns[activePattern].description}
            </p>
            <p className="text-sm text-slate-500 mb-4">
              <span className="text-primary-400">When to use:</span>{' '}
              {algorithmPatterns[activePattern].whenToUse}
            </p>
            <div className="bg-slate-950 rounded-lg">
              <CodeBlock code={algorithmPatterns[activePattern].template} />
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
