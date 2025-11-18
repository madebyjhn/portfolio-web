'use client';

import { useState } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Me Contacter
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Une idée de projet ? Discutons-en ensemble
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Envoyez-moi un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Parlez-moi de votre projet..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-600 dark:text-green-400 text-center font-semibold">
                    Message envoyé avec succès ! Je vous répondrai rapidement.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-600 dark:text-red-400 text-center font-semibold">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Autres moyens de me contacter
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:contact@dev.com"
                  className="flex items-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      contact@dev.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      LinkedIn
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Connectez-vous avec moi
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10 border border-cyan-500/20">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Disponibilité
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Je réponds généralement sous 24-48h. N'hésitez pas à me contacter
                pour discuter de votre projet !
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Disponible pour de nouveaux projets
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
