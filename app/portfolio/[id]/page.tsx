import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { projects } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux projets
        </Link>

        <div className="mb-12">
          <div className="relative h-96 rounded-3xl overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {project.name}
            </h1>
            <span className="px-4 py-2 text-sm font-semibold bg-cyan-500 text-white rounded-full">
              {project.category}
            </span>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Fonctionnalités
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technologies utilisées
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-gray-900 dark:text-white rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Aperçu du projet
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <Image
                  src={screenshot}
                  alt={`${project.name} screenshot ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Parlons-en et créons ensemble votre site web sur mesure
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
