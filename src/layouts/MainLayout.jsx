import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
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
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Github
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  {
    name: 'Data Structures',
    icon: Layers,
    children: [
      { name: 'Arrays', href: '/ds/arrays', icon: LayoutGrid },
      { name: 'Linked Lists', href: '/ds/linked-lists', icon: LinkIcon },
      { name: 'Stacks', href: '/ds/stacks', icon: Layers },
      { name: 'Queues', href: '/ds/queues', icon: ArrowRightLeft },
      { name: 'Trees', href: '/ds/trees', icon: GitBranch },
      { name: 'Heaps', href: '/ds/heaps', icon: Triangle },
      { name: 'Hash Tables', href: '/ds/hash-tables', icon: Hash },
      { name: 'Graphs', href: '/ds/graphs', icon: Network },
      { name: 'Tries', href: '/ds/tries', icon: FileText },
    ]
  },
  { name: 'Algorithms', href: '/algorithms', icon: Code2 },
  { name: 'Complexity', href: '/complexity', icon: Gauge },
  { name: 'Interview Prep', href: '/interview', icon: GraduationCap },
];

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dsOpen, setDsOpen] = useState(true);
  const location = useLocation();

  const isActive = (href) => location.pathname === href;
  const isInDataStructures = location.pathname.startsWith('/ds/');

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-slate-950 border-r border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">DS CheatSheet</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-8rem)]">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setDsOpen(!dsOpen)}
                    className={`w-full nav-link justify-between ${
                      isInDataStructures ? 'text-primary-400' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </div>
                    {dsOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {dsOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setSidebarOpen(false)}
                          className={`nav-link text-sm ${
                            isActive(child.href) ? 'active' : ''
                          }`}
                        >
                          <child.icon className="w-4 h-4" />
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">View on GitHub</span>
          </a>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
          <div className="flex items-center justify-between h-full px-4 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex-1 lg:flex-none" />
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400 hidden sm:block">
                Quick Reference Guide
              </span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
