import Image from 'next/image';
import { skills } from '@/lib/data';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            À propos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Développeur web passionné par la création d'expériences digitales modernes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Workspace"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-50"></div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Salut, je suis un développeur web freelance
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Passionné par le développement web depuis plusieurs années, je me
                spécialise dans la création de sites vitrines modernes et performants
                pour les entrepreneurs et petites entreprises.
              </p>
              <p>
                Mon objectif est de transformer vos idées en réalité digitale avec
                des sites web qui allient esthétique moderne et performance optimale.
                J'utilise les dernières technologies comme Next.js et Tailwind CSS
                pour garantir des résultats professionnels.
              </p>
              <p>
                Que ce soit pour créer un nouveau site, moderniser votre présence en
                ligne ou assurer la maintenance de votre site existant, je suis là
                pour vous accompagner dans votre réussite digitale.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Mes Compétences
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center">
            <div className="text-4xl font-bold text-cyan-500 mb-2">10+</div>
            <p className="text-gray-600 dark:text-gray-400">Projets réalisés</p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
            <p className="text-gray-600 dark:text-gray-400">Clients satisfaits</p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-center">
            <div className="text-4xl font-bold text-violet-500 mb-2">2+</div>
            <p className="text-gray-600 dark:text-gray-400">Années d'expérience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
