import { useState } from 'react';
import {
  GraduationCap,
  Target,
  Star,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Zap,
  BookOpen
} from 'lucide-react';
import { interviewMustKnow, algorithmPatterns } from '../data/algorithms';
import { Card, CardTitle } from '../components/Card';
import { Section, SectionTitle } from '../components/Section';
import CodeBlock from '../components/CodeBlock';

const difficultyColors = {
  Easy: 'bg-green-500/20 text-green-400',
  Medium: 'bg-yellow-500/20 text-yellow-400',
  Hard: 'bg-red-500/20 text-red-400'
};

export default function InterviewPrep() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [checkedProblems, setCheckedProblems] = useState(new Set());

  const toggleProblem = (problemId) => {
    const newChecked = new Set(checkedProblems);
    if (newChecked.has(problemId)) {
      newChecked.delete(problemId);
    } else {
      newChecked.add(problemId);
    }
    setCheckedProblems(newChecked);
  };

  const totalProblems = interviewMustKnow.reduce((sum, cat) => sum + cat.problems.length, 0);
  const completedProblems = checkedProblems.size;
  const progressPercentage = Math.round((completedProblems / totalProblems) * 100);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
          Interview Preparation
        </h1>
        <p className="text-slate-400 text-lg">
          Must-know problems, patterns, and strategies for technical interviews
        </p>
      </div>

      {/* Progress Card */}
      <Card className="mb-8 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border-primary-500/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-primary-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Your Progress</h3>
              <p className="text-slate-400 text-sm">Track problems you've solved</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">{progressPercentage}%</div>
            <div className="text-sm text-slate-400">{completedProblems}/{totalProblems} problems</div>
          </div>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </Card>

      {/* Quick Tips */}
      <Section>
        <SectionTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          Interview Tips
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h4 className="text-white font-medium mb-3">Before the Interview</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                Review core data structures and their trade-offs
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                Practice writing code without an IDE
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                Time yourself - aim for 15-25 mins per problem
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                Practice explaining your thought process out loud
              </li>
            </ul>
          </Card>
          <Card>
            <h4 className="text-white font-medium mb-3">During the Interview</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                Clarify the problem - ask about edge cases, constraints
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                Start with brute force, then optimize
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                Think out loud - explain your reasoning
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                Test your code with examples before submitting
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Problem Categories */}
      <Section>
        <SectionTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          Must-Know Problems by Category
        </SectionTitle>
        <div className="space-y-4">
          {interviewMustKnow.map((category) => {
            const isExpanded = expandedCategory === category.category;
            const categoryProblems = category.problems.map((p, idx) =>
              `${category.category}-${idx}`
            );
            const solvedCount = categoryProblems.filter(id => checkedProblems.has(id)).length;

            return (
              <Card key={category.category}>
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category.category)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <CardTitle>{category.category}</CardTitle>
                      <p className="text-sm text-slate-400">
                        {solvedCount}/{category.problems.length} completed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2 hidden sm:block">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all"
                        style={{ width: `${(solvedCount / category.problems.length) * 100}%` }}
                      />
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="mt-4 space-y-2">
                    {category.problems.map((problem, idx) => {
                      const problemId = `${category.category}-${idx}`;
                      const isChecked = checkedProblems.has(problemId);

                      return (
                        <div
                          key={idx}
                          className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                            isChecked ? 'bg-emerald-500/10' : 'bg-slate-900 hover:bg-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => toggleProblem(problemId)}
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                isChecked
                                  ? 'bg-emerald-500 border-emerald-500'
                                  : 'border-slate-600 hover:border-slate-500'
                              }`}
                            >
                              {isChecked && <CheckCircle className="w-4 h-4 text-white" />}
                            </button>
                            <span className={`font-medium ${isChecked ? 'text-slate-400 line-through' : 'text-white'}`}>
                              {problem.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-slate-500 hidden sm:block">
                              {problem.pattern}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[problem.difficulty]}`}>
                              {problem.difficulty}
                            </span>
                          </div>
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

      {/* Pattern Templates */}
      <Section>
        <SectionTitle>Pattern Templates</SectionTitle>
        <p className="text-slate-400 mb-4">
          Memorize these templates - they cover most interview problems
        </p>
        <div className="space-y-4">
          {algorithmPatterns.slice(0, 4).map((pattern) => (
            <Card key={pattern.name}>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white">{pattern.name}</h4>
                <p className="text-slate-400 text-sm mt-1">{pattern.description}</p>
                <p className="text-primary-400 text-sm mt-2">
                  <span className="text-slate-500">When to use:</span> {pattern.whenToUse}
                </p>
              </div>
              <div className="bg-slate-950 rounded-lg">
                <CodeBlock code={pattern.template} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Study Plan */}
      <Section>
        <SectionTitle>Recommended Study Plan</SectionTitle>
        <Card>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-white font-medium">Week 1-2: Fundamentals</h4>
                <p className="text-slate-400 text-sm">
                  Master arrays, strings, hash maps. Solve 20-30 easy problems.
                  Focus on Two Pointers, Sliding Window patterns.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-white font-medium">Week 3-4: Data Structures</h4>
                <p className="text-slate-400 text-sm">
                  Linked lists, stacks, queues, trees. Practice tree traversals,
                  BST operations. Start medium-level problems.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-white font-medium">Week 5-6: Advanced Topics</h4>
                <p className="text-slate-400 text-sm">
                  Graphs (BFS/DFS), heaps, tries. Learn Dijkstra, topological sort.
                  Mix of medium and hard problems.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-white font-medium">Week 7-8: Dynamic Programming</h4>
                <p className="text-slate-400 text-sm">
                  Start with 1D DP (Fibonacci, climbing stairs), move to 2D DP.
                  Practice identifying DP patterns.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h4 className="text-white font-medium">Week 9+: Mock Interviews</h4>
                <p className="text-slate-400 text-sm">
                  Practice timed sessions. Review weak areas.
                  Do mock interviews with peers or online platforms.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
