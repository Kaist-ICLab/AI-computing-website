import React from 'react';
import { Cpu, Server, Zap, Scale, ArrowRight } from 'lucide-react';
import { Department } from '../types';

interface DepartmentCardProps {
  department: Department;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const getIcon = () => {
    switch (department.iconName) {
      case 'cpu': return <Cpu className="w-8 h-8 text-white" />;
      case 'server': return <Server className="w-8 h-8 text-white" />;
      case 'zap': return <Zap className="w-8 h-8 text-white" />;
      case 'scale': return <Scale className="w-8 h-8 text-white" />;
      default: return <Cpu className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group">
      <div className="p-6">
        <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{department.name}</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          {department.description}
        </p>
        <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};