import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Portfolio() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group block"
            >
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-cyan-500 font-semibold group-hover:translate-x-2 transition-transform">
                    Voir le projet
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
