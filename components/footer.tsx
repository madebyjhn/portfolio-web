import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 Dev. Tous droits réservés.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:contact@dev.com"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
