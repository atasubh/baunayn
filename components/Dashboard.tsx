import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Menu, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2,
  AlertTriangle,
  LayoutDashboard,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Building,
  Calendar,
  MoreVertical,
  Download,
  Filter
} from 'lucide-react';
import { Button } from './Button';
import { NAVIGATION_ITEMS, MOCK_PROJECTS, MODULE_DETAILS } from '../constants';
import { AIAnalysisResult } from '../types';
import { SchemaViewer } from './SchemaViewer';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

interface DashboardProps {
  onLogout: () => void;
}

const CASHFLOW_DATA = [
  { name: 'يناير', income: 4000, expense: 2400 },
  { name: 'فبراير', income: 3000, expense: 1398 },
  { name: 'مارس', income: 2000, expense: 9800 },
  { name: 'أبريل', income: 2780, expense: 3908 },
  { name: 'مايو', income: 1890, expense: 4800 },
  { name: 'يونيو', income: 2390, expense: 3800 },
];

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeModule = NAVIGATION_ITEMS.find(i => i.id === activeTab);
  const moduleDetails = activeModule?.module && MODULE_DETAILS[activeModule.module] 
    ? MODULE_DETAILS[activeModule.module] 
    : null;

  // Render different AI results based on data type
  const renderAIResult = (result: AIAnalysisResult) => {
    switch (result.type) {
        case 'chart':
            return (
                <div className="h-64 w-full mt-4 bg-gray-50 rounded-lg p-4 border border-gray-100">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={result.data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#006C35" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            );
        case 'list':
            return (
                <div className="mt-4 space-y-2">
                    {Array.isArray(result.data) && result.data.map((item: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                            <span className="text-sm font-medium text-gray-700">{item.label}</span>
                            {item.status === 'success' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                            {item.status === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                            {item.status === 'error' && <AlertCircle className="w-5 h-5 text-red-500" />}
                        </div>
                    ))}
                </div>
            );
        case 'stat':
            return (
                <div className="mt-4 p-6 bg-green-50/50 rounded-xl border border-green-100 text-center">
                    <p className="text-gray-500 text-sm mb-2">{result.data.label}</p>
                    <p className="text-4xl font-bold text-saudi-dark">{result.data.value}</p>
                </div>
            );
        case 'alert':
            return (
                 <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
                    <div>
                        <p className="font-bold text-red-800">تنبيه هام</p>
                        <p className="text-sm text-red-600 mt-1">{result.summary}</p>
                    </div>
                 </div>
            );
        case 'text':
        default:
            return (
                <p className="mt-4 text-sm text-gray-600 leading-relaxed bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    {result.summary}
                </p>
            );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-right" dir="rtl">
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? 'w-72' : 'w-20'
        } bg-white border-l border-gray-200 transition-all duration-300 flex flex-col fixed h-full z-30 shadow-sm`}
      >
        <div className="h-20 flex items-center justify-center border-b border-gray-100">
          {sidebarOpen ? (
            <div className="flex items-center gap-2">
               <div className="bg-saudi-green p-1.5 rounded-lg">
                 <LayoutDashboard className="w-5 h-5 text-white" />
               </div>
               <span className="text-xl font-bold text-gray-900">بنيان <span className="text-saudi-green">كلاود</span></span>
            </div>
          ) : (
            <div className="bg-saudi-green p-2 rounded-lg">
               <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-saudi-green text-white shadow-lg shadow-green-900/20' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
                title={!sidebarOpen ? item.label : ''}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`} />
                {sidebarOpen && <span className="font-medium text-sm">{item.label}</span>}
              </button>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={onLogout}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors ${!sidebarOpen && 'justify-center'}`}
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="font-medium text-sm">تسجيل خروج</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'mr-72' : 'mr-20'}`}>
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
                >
                  {sidebarOpen ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <h1 className="text-2xl font-bold text-gray-800">
                    {NAVIGATION_ITEMS.find(i => i.id === activeTab)?.label}
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="بحث في النظام..." 
                        className="w-64 pr-10 pl-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saudi-green/20 focus:border-saudi-green transition-all"
                    />
                </div>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>
                <div className="flex items-center gap-3 border-r border-gray-200 pr-4 mr-2">
                    <div className="text-left hidden md:block">
                        <p className="text-sm font-bold text-gray-900">محمد العتيبي</p>
                        <p className="text-xs text-gray-500">مدير عام</p>
                    </div>
                    <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80" 
                        className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm"
                        alt="Profile"
                    />
                </div>
            </div>
        </header>

        {/* Content Area */}
        <main className="p-8 overflow-y-auto">
            {activeTab === 'dashboard' ? (
                <div className="space-y-8">
                    {/* Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'المشاريع النشطة', value: '12', trend: '+2', color: 'blue' },
                            { label: 'إجمالي المبيعات', value: '45.2M', trend: '+12%', color: 'green' },
                            { label: 'تذاكر الصيانة', value: '8', trend: '-5', color: 'yellow' },
                            { label: 'السيولة النقدية', value: '2.1M', trend: '-8%', color: 'red' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <p className="text-gray-500 text-sm font-medium mb-2">{stat.label}</p>
                                <div className="flex items-baseline justify-between">
                                    <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                                    <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                                        stat.color === 'green' ? 'bg-green-100 text-green-700' :
                                        stat.color === 'red' ? 'bg-red-100 text-red-700' :
                                        stat.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                                        'bg-yellow-100 text-yellow-700'
                                    }`}>
                                        {stat.trend}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Row */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-saudi-green" />
                                    التدفقات النقدية
                                </h3>
                                <select className="text-sm border-gray-200 rounded-lg">
                                    <option>آخر 6 أشهر</option>
                                </select>
                            </div>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={CASHFLOW_DATA}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="income" name="إيرادات" fill="#006C35" radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="expense" name="مصروفات" fill="#EF4444" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5 text-saudi-gold" />
                                    تنبيهات النظام الذكي
                                </h3>
                                <Button variant="ghost" size="sm">عرض الكل</Button>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { msg: 'انخفاض مخزون الحديد في مشروع أفق 11', time: 'منذ ساعتين', type: 'warning' },
                                    { msg: 'تم إصدار رخصة البناء لمشروع الملقا', time: 'منذ 4 ساعات', type: 'success' },
                                    { msg: 'تأخير في توريد الخرسانة (المورد: شركة اليمامة)', time: 'أمس', type: 'error' },
                                ].map((alert, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className={`w-2 h-full rounded-full ${
                                            alert.type === 'warning' ? 'bg-yellow-400' : 
                                            alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                                        }`}></div>
                                        <div>
                                            <p className="font-medium text-gray-900">{alert.msg}</p>
                                            <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-1 gap-8">
                         <SchemaViewer />
                    </div>

                    {/* Projects Table */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800">المشاريع النشطة</h3>
                            <Button size="sm">إضافة مشروع</Button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 text-gray-500 text-sm">
                                    <tr>
                                        <th className="px-6 py-4 text-right">اسم المشروع</th>
                                        <th className="px-6 py-4 text-right">الموقع</th>
                                        <th className="px-6 py-4 text-right">الإنجاز</th>
                                        <th className="px-6 py-4 text-right">الحالة</th>
                                        <th className="px-6 py-4 text-right">رخصة وافي</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {MOCK_PROJECTS.map((project) => (
                                        <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-gray-900">{project.name}</td>
                                            <td className="px-6 py-4 text-gray-600">{project.location}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden w-24">
                                                        <div 
                                                            className="h-full bg-saudi-green rounded-full"
                                                            style={{ width: `${project.progress}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-sm font-medium">{project.progress}%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                    project.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                    project.status === 'Delayed' ? 'bg-red-100 text-red-700' :
                                                    'bg-blue-100 text-blue-700'
                                                }`}>
                                                    {project.status === 'Active' ? 'نشط' : 
                                                     project.status === 'Delayed' ? 'متأخر' : 'مكتمل'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-mono text-sm text-gray-500">{project.wafiLicense}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : moduleDetails ? (
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-l from-saudi-green to-saudi-gold"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-gray-900 mb-4">{moduleDetails.title}</h2>
                            <p className="text-xl text-gray-500 max-w-3xl">{moduleDetails.description}</p>
                        </div>
                        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 opacity-50"></div>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {moduleDetails.subDomains.map((sub) => {
                             const Icon = sub.aiFeature.icon || LayoutDashboard;
                             return (
                                <div key={sub.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-saudi-green">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{sub.title}</h3>
                                        <p className="text-sm text-gray-500">{sub.description}</p>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="bg-saudi-gold/10 text-saudi-gold px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                                <Sparkles className="w-3 h-3" />
                                                تحليل الذكاء الاصطناعي
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                الثقة: {sub.aiResult?.confidenceScore}%
                                            </div>
                                        </div>
                                        
                                        {sub.aiResult && renderAIResult(sub.aiResult)}

                                        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <Button variant="ghost" size="sm" className="text-saudi-green hover:bg-green-50">
                                                عرض التفاصيل
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                تحديث البيانات
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                             );
                        })}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                        <LayoutDashboard className="w-10 h-10 text-gray-300" />
                    </div>
                    <p className="text-lg font-medium">قريباً...</p>
                </div>
            )}
        </main>
      </div>
    </div>
  );
};