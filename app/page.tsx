import Link from 'next/link';
import { ArrowRight, Code2 } from 'lucide-react';
import { techStack } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Code2 className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Développeur Web Freelance
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight animate-slide-up">
            Développeur web.
            <br />
            Création de sites modernes.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up-delay">
            Sites vitrines, refontes et maintenance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up-delay-2">
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Voir mes projets
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 hover:scale-105"
            >
              Me contacter
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-delay">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">01</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Design moderne
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Interfaces élégantes et responsive qui captivent vos visiteurs
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">02</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Performance optimale
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sites ultra-rapides pour une expérience utilisateur exceptionnelle
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">03</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              SEO intégré
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Référencement naturel optimisé pour plus de visibilité
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
