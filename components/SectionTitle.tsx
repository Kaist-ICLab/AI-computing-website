import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-blue-600 ${align === 'center' ? 'mx-auto' : ''} rounded-full`}></div>
    </div>
  );
};