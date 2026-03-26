import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Book, 
  ChevronRight, 
  Search, 
  Menu, 
  X, 
  GraduationCap, 
  FileText,
  Calendar,
  Layers,
  Info
} from 'lucide-react';
import { notebookData, NotebookTopic } from './data/notebook_data';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState<string>(notebookData[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const activeTopic = useMemo(() => 
    notebookData.find(t => t.id === activeTopicId) || notebookData[0],
    [activeTopicId]
  );

  const pages = useMemo(() => 
    activeTopic.content.split('---page---').map(p => p.trim()),
    [activeTopic]
  );

  const filteredTopics = useMemo(() => 
    notebookData.filter(t => 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [searchQuery]
  );

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleTopicChange = (id: string) => {
    setActiveTopicId(id);
    setCurrentPage(0);
    setIsSidebarOpen(false);
  };

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f0f2f5] text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-hidden h-screen">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Book className="text-indigo-600 w-6 h-6" />
          <span className="font-serif font-bold text-xl uppercase tracking-tighter">ChanguitoStudio</span>
        </div>
        <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:relative lg:translate-x-0 overflow-hidden flex flex-col shadow-2xl lg:shadow-none",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-100 bg-linear-to-br from-indigo-50/50 to-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
              <Book className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-2xl tracking-tight text-gray-800 leading-none mb-1">Apuntes</h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500">Gestión Empresarial</p>
            </div>
          </div>

          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar en el cuaderno..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all border-none"
            />
          </div>
        </div>

        {/* Topic List */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar bg-white">
          {['Tema', 'Exposición'].map((category) => {
            const categoryTopics = filteredTopics.filter(t => t.category === category);
            if (categoryTopics.length === 0) return null;

            return (
              <div key={category} className="space-y-3">
                <h2 className="px-4 text-[10px] uppercase font-black tracking-[0.3em] text-gray-400">
                  {category === 'Tema' ? '📝 Lecciones' : '🎤 Presentaciones'}
                </h2>
                <div className="space-y-1">
                  {categoryTopics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => handleTopicChange(topic.id)}
                      className={cn(
                        "w-full text-left p-3.5 rounded-xl transition-all group flex flex-col gap-1 relative",
                        activeTopicId === topic.id 
                          ? "bg-indigo-600 text-white shadow-xl shadow-indigo-100 scale-[1.02] z-10" 
                          : "hover:bg-indigo-50 text-gray-600 hover:text-indigo-600"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm line-clamp-2 leading-snug flex-1">{topic.title}</p>
                        {activeTopicId === topic.id && (
                          <motion.div layoutId="active-indicator" className="w-2 h-2 rounded-full bg-white shadow-sm ml-2 shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
          
          {filteredTopics.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-400 text-sm italic">No se encontraron temas</p>
            </div>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto lg:pt-0 pt-16 bg-[#f8f9fb]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTopicId}-${currentPage}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12"
          >
            {/* Topic Header Overlay */}
            <div className="mb-10 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-2xl shadow-sm border border-gray-100 text-xs font-bold text-gray-500">
                  <Calendar className="w-4 h-4 text-indigo-500" />
                  <span>25 MARZO 2026</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-2xl shadow-sm border border-gray-100 text-xs font-bold text-gray-500">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  <span className="uppercase tracking-widest">{activeTopic.category}</span>
                </div>
              </div>
              
              {/* Page Indicator Top */}
              <div className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
                Página {currentPage + 1} de {pages.length}
              </div>
            </div>

            {/* Notebook Container */}
            <div className="relative group">
              {/* Paper Texture and Lines */}
              <div className="absolute inset-0 bg-paper shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-[2.5rem] border border-gray-200 transition-shadow duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]" />
              <div className="absolute left-10 h-full border-l-2 border-margin/20 opacity-50 pointer-events-none" />
              
              <div className="relative min-h-[850px] p-10 md:p-16 lg:p-24 overflow-hidden">
                {/* Visual Decoration: Rings */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-around py-12 ml-[-12px] z-10">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-linear-to-b from-gray-200 via-white to-gray-300 border-2 border-gray-300 shadow-xl" />
                  ))}
                </div>

                {/* Markdown Content */}
                <article className="prose-notebook notebook-margin max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-5xl font-serif font-black text-indigo-950 mb-12 border-b-4 border-indigo-100 pb-6 relative leading-tight">
                          <span className="absolute -left-12 text-indigo-200/40 select-none">#</span>
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="flex items-center gap-4 text-3xl font-serif font-bold text-indigo-900 mt-12 mb-6 group/h2">
                          <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm shrink-0 shadow-sm border border-indigo-200">
                            <ChevronRight className="w-5 h-5" />
                          </span>
                          {children}
                        </h2>
                      ),
                      p: ({ children }) => (
                        <p className="text-xl text-gray-800 leading-[2.5rem] mb-6 font-sans tracking-tight">
                          {children}
                        </p>
                      ),
                      li: ({ children }) => (
                        <li className="text-xl text-gray-800 leading-[2.5rem] mb-3 ml-8 list-none relative before:content-[''] before:absolute before:-left-6 before:top-[1.1rem] before:w-2 before:h-2 before:bg-indigo-400 before:rounded-full shadow-indigo-100">
                          {children}
                        </li>
                      ),
                      blockquote: ({ children }) => {
                        const content = children?.toString() || '';
                        const isAlert = content.includes('[!');
                        
                        if (isAlert) {
                          const type = content.match(/\[!(.*?)\]/)?.[1] || 'NOTE';
                          const cleanContent = content.replace(/\[!.*?\]/, '').trim();
                          
                          const typeLabels: Record<string, string> = {
                            'IMPORTANT': 'IMPORTANTE',
                            'TIP': 'CONSEJO',
                            'NOTE': 'NOTA',
                            'CAUTION': 'ADVERTENCIA'
                          };

                          const label = typeLabels[type] || type;

                          return (
                            <div className={cn(
                              "p-8 my-10 rounded-[2rem] shadow-sm border-l-[12px] relative overflow-hidden",
                              type === 'IMPORTANT' ? "bg-red-50/50 border-red-400" : 
                              type === 'CAUTION' ? "bg-amber-50/50 border-amber-400" :
                              "bg-indigo-50/50 border-indigo-400"
                            )}>
                              <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Info className="w-20 h-20" />
                              </div>
                              <div className="flex items-center gap-3 mb-4">
                                <span className={cn(
                                  "px-3 py-1 rounded-full font-black uppercase text-[10px] tracking-widest text-white",
                                  type === 'IMPORTANT' ? "bg-red-500" : 
                                  type === 'CAUTION' ? "bg-amber-500" :
                                  "bg-indigo-500"
                                )}>
                                  {label}
                                </span>
                              </div>
                              <div className="text-gray-800 italic text-xl leading-relaxed">{cleanContent}</div>
                            </div>
                          );
                        }
                        return <blockquote className="border-l-8 border-gray-200 pl-8 italic my-10 text-gray-500 text-2xl font-serif">{children}</blockquote>;
                      }
                    }}
                  >
                    {pages[currentPage]}
                  </ReactMarkdown>
                </article>

                {/* Pagination Controls */}
                <div className="mt-24 pt-10 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 0}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm transition-all border-2",
                      currentPage === 0 
                        ? "opacity-30 cursor-not-allowed border-gray-200 text-gray-400" 
                        : "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-lg shadow-indigo-100 active:scale-95"
                    )}
                  >
                    <ChevronRight className="w-5 h-5 rotate-180" />
                    ANTERIOR
                  </button>

                  <div className="flex items-center gap-2">
                    {pages.map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "w-2.5 h-2.5 rounded-full transition-all duration-300",
                          i === currentPage ? "bg-indigo-600 w-8" : "bg-gray-200"
                        )}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage === pages.length - 1}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm transition-all border-2",
                      currentPage === pages.length - 1 
                        ? "opacity-30 cursor-not-allowed border-gray-200 text-gray-400" 
                        : "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-200 active:scale-95"
                    )}
                  >
                    SIGUIENTE
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" 
        />
      )}
    </div>
  );
}
