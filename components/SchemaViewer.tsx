import React from 'react';
import { Database, FileCode } from 'lucide-react';
import { DB_SCHEMA_SQL } from '../constants';

export const SchemaViewer: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-saudi-green" />
          <h3 className="font-bold text-gray-800">هيكلة قاعدة البيانات (SQL Schema)</h3>
        </div>
        <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">PostgreSQL</span>
      </div>
      <div className="p-0 overflow-x-auto bg-[#1e1e1e] text-gray-300 font-mono text-sm" dir="ltr">
        <pre className="p-4">
          <code>{DB_SCHEMA_SQL}</code>
        </pre>
      </div>
      <div className="p-4 bg-gray-50 text-xs text-gray-500 border-t border-gray-200">
        * يوضح هذا المخطط العلاقات الأساسية بين الأقسام الرئيسية (المبيعات، المالية، التشغيل)
      </div>
    </div>
  );
};