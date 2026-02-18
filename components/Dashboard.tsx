import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Menu, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  MoreVertical,
  Calendar,
  Building,
  Sparkles,
  ArrowLeft,
  Brain,
  Cpu,
  ChevronLeft,
  Activity,
  FileText,
  PieChart as PieChartIcon,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Bot,
  Map,
  Send,
  Camera,
  Layers,
  Truck,
  Package,
  Eye,
  Clock,
  Download,
  Receipt,
  ArrowUpRight,
  TrendingDown,
  CheckSquare,
  ShoppingCart,
  ScanEye,
  Landmark,
  ShieldCheck,
  FileCheck,
  RefreshCcw,
  Globe,
  Tag,
  MessageSquare,
  Glasses,
  CreditCard,
  UserCheck,
  Timer,
  Vote,
  Users,
  Wallet,
  Armchair,
  Gavel,
  Dumbbell,
  Waves,
  PartyPopper,
  Scale,
  Maximize2,
  MoreHorizontal
} from 'lucide-react';
import { Button } from './Button';
import { NAVIGATION_ITEMS, MOCK_PROJECTS, MOCK_LEADS, MODULE_DETAILS } from '../constants';
import { NavItem, ModuleType, AIAnalysisResult } from '../types';
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
  const [selectedSubDomainId, setSelectedSubDomainId] = useState<string | null>(null);

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
                    {result.data.map((item: any, idx: number) => (
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
                <div className="mt-4 p-6 bg-saudi-light/20 rounded-xl border border-saudi-green/10 text-center">
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
                        {result.data && (
                             <div className="mt-2 text-xs font-mono bg-red-100 p-2 rounded text-red-800">
                                {JSON.stringify(result.data)}
                             </div>
                        )}
                    </div>
                 </div>
            );
        default: // text
            return null;
    }
  };

  const getModuleBrief = (moduleId: string) => {
    switch(moduleId) {
      case 'planning': return { val: '3 دراسات جارية', status: 'neutral' };
      case 'field': return { val: 'مراقبة حية للموقع', status: 'success' };
      case 'finance': return { val: '+12% نمو', status: 'success' };
      case 'admin': return { val: 'نطاق بلاتيني', status: 'success' };
      case 'legal': return { val: '1 رخصة تنتهي', status: 'warning' };
      case 'marketing': return { val: 'حملة نشطة', status: 'neutral' };
      case 'sales': return { val: '45 هدف شهري', status: 'neutral' };
      case 'brokers': return { val: '12 وسيط نشط', status: 'neutral' };
      case 'maintenance': return { val: '5 طلبات جديدة', status: 'warning' };
      case 'community': return { val: 'تصويت الملاك', status: 'success' };
      case 'aftersales': return { val: 'رضا عملاء مرتفع', status: 'success' };
      default: return { val: '-', status: 'neutral' };
    }
  };

  const renderModuleStatus = (status: string) => {
      if (status === 'success') return <div className="w-2 h-2 rounded-full bg-green-500"></div>;
      if (status === 'warning') return <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>;
      if (status === 'error') return <div className="w-2 h-2 rounded-full bg-red-500"></div>;
      return <div className="w-2 h-2 rounded-full bg-gray-300"></div>;
  };

  const renderDashboardOverview = () => (
    <>
      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-sm font-medium">إجمالي المبيعات</span>
                <span className="p-2 bg-green-50 text-green-600 rounded-lg"><TrendingUp className="w-4 h-4" /></span>
            </div>
            <div className="text-2xl font-bold text-gray-900">42,500,000 ر.س</div>
            <div className="text-sm text-green-600 mt-2 flex items-center">
                <span className="font-medium">+12%</span>
                <span className="text-gray-400 mr-2">مقارنة بالشهر الماضي</span>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-sm font-medium">الوحدات المحجوزة</span>
                <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><CheckCircle className="w-4 h-4" /></span>
            </div>
            <div className="text-2xl font-bold text-gray-900">145 / 200</div>
            <div className="text-sm text-blue-600 mt-2 flex items-center">
                <span className="font-medium">72.5%</span>
                <span className="text-gray-400 mr-2">معدل الإشغال</span>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-sm font-medium">تنبيهات الامتثال</span>
                <span className="p-2 bg-red-50 text-red-600 rounded-lg"><AlertCircle className="w-4 h-4" /></span>
            </div>
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-red-600 mt-2 flex items-center">
                <span className="font-medium">عاجل</span>
                <span className="text-gray-400 mr-2">تجديد تراخيص وافي</span>
            </div>
        </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-sm font-medium">تذاكر الصيانة</span>
                <span className="p-2 bg-orange-50 text-orange-600 rounded-lg"><TrendingUp className="w-4 h-4" /></span>
            </div>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-orange-600 mt-2 flex items-center">
                <span className="font-medium">-5%</span>
                <span className="text-gray-400 mr-2">أقل من الأسبوع الماضي</span>
            </div>
        </div>
      </div>

      {/* Modules Quick Access Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-bold text-gray-900">نظرة شاملة على الأقسام</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {NAVIGATION_ITEMS.filter(item => item.id !== 'dashboard').map((item) => {
                const info = getModuleBrief(item.id);
                return (
                    <button 
                        key={item.id} 
                        onClick={() => {
                            setActiveTab(item.id);
                            setSelectedSubDomainId(null);
                        }}
                        className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-saudi-green/30 transition-all text-right group"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="p-2 rounded-lg bg-gray-50 text-gray-500 group-hover:bg-saudi-light group-hover:text-saudi-green transition-colors">
                                <item.icon className="w-5 h-5" />
                            </div>
                            {renderModuleStatus(info.status)}
                        </div>
                        <h4 className="font-bold text-sm text-gray-900 mb-1">{item.label}</h4>
                        <p className="text-xs text-gray-500 font-medium">{info.val}</p>
                    </button>
                );
            })}
        </div>
      </div>

      {/* Main Grid: Charts & Schema */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">التدفق النقدي (Cash Flow)</h3>
                <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none focus:ring-saudi-green focus:border-saudi-green">
                    <option>آخر 6 أشهر</option>
                    <option>السنة الحالية</option>
                </select>
            </div>
            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={CASHFLOW_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                        />
                        <Bar dataKey="income" fill="#006C35" name="الدخل" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expense" fill="#C5A059" name="المصروفات" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Side Widget: Active Leads */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">أحدث الفرص البيعية</h3>
                <Button variant="ghost" size="sm">عرض الكل</Button>
            </div>
            <div className="space-y-4">
                {MOCK_LEADS.map((lead) => (
                    <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                            <p className="font-semibold text-gray-800">{lead.name}</p>
                            <p className="text-xs text-gray-500">{lead.source}</p>
                        </div>
                        <div className="text-left">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                                lead.status === 'Won' ? 'bg-green-100 text-green-800' :
                                lead.status === 'Negotiation' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                            }`}>
                                {lead.status}
                            </span>
                            <p className="text-xs text-gray-600 mt-1 font-mono">{lead.value.toLocaleString()} ر.س</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button className="w-full mt-6" variant="outline">إضافة عميل جديد +</Button>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-900">حالة المشاريع الحالية</h3>
            <div className="flex gap-2">
                <Button size="sm" variant="outline"><Calendar className="w-4 h-4 ml-2" />تصفية بالتاريخ</Button>
                <Button size="sm">تقرير جديد</Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm text-gray-600">
                <thead className="bg-gray-50 text-gray-900 font-medium">
                    <tr>
                        <th className="px-6 py-4">اسم المشروع</th>
                        <th className="px-6 py-4">الموقع</th>
                        <th className="px-6 py-4">رخصة وافي</th>
                        <th className="px-6 py-4">نسبة الإنجاز</th>
                        <th className="px-6 py-4">الحالة</th>
                        <th className="px-6 py-4">إجراءات</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {MOCK_PROJECTS.map((project) => (
                        <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">{project.name}</td>
                            <td className="px-6 py-4">{project.location}</td>
                            <td className="px-6 py-4 font-mono text-xs bg-gray-100 inline-block m-4 rounded px-2 py-1">{project.wafiLicense}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[100px]">
                                        <div className={`h-2.5 rounded-full ${project.progress > 80 ? 'bg-green-600' : project.progress < 40 ? 'bg-red-500' : 'bg-yellow-500'}`} style={{ width: `${project.progress}%` }}></div>
                                    </div>
                                    <span className="text-xs">{project.progress}%</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}>
                                    {project.status === 'Active' ? 'نشط' : 'متأخر'}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-gray-400 hover:text-saudi-green"><MoreVertical className="w-5 h-5" /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
      </div>

      {/* DB Schema Viewer */}
      <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">النظام التقني (المخطط)</h3>
          <SchemaViewer />
      </div>
    </>
  );

  const renderModuleDetails = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
         <h2 className="text-xl font-bold text-gray-900 mb-2">{moduleDetails?.title}</h2>
         <p className="text-gray-600">{moduleDetails?.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {moduleDetails?.subDomains.map((sub, idx) => (
           <div 
                key={idx} 
                className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-all cursor-pointer ${selectedSubDomainId === sub.id ? 'ring-2 ring-saudi-green border-transparent' : 'border-gray-100 hover:shadow-md'}`}
                onClick={() => setSelectedSubDomainId(selectedSubDomainId === sub.id ? null : sub.id)}
           >
              <div className="p-5 border-b border-gray-50">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{sub.title}</h3>
                    {selectedSubDomainId === sub.id && <span className="text-xs bg-saudi-green text-white px-2 py-1 rounded-full">نشط</span>}
                </div>
                <p className="text-sm text-gray-500">{sub.description}</p>
              </div>
              <div className="bg-saudi-light/30 p-5">
                <div className="flex items-start gap-3">
                   <div className="p-2 bg-white rounded-lg border border-saudi-green/20 shadow-sm text-saudi-green">
                      {sub.aiFeature.icon ? <sub.aiFeature.icon className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                   </div>
                   <div>
                     <h4 className="text-xs font-bold text-saudi-dark uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Cpu className="w-3 h-3" />
                        الذكاء الاصطناعي
                     </h4>
                     <h5 className="font-semibold text-gray-900 text-sm mb-1">{sub.aiFeature.title}</h5>
                     <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{sub.aiFeature.description}</p>
                   </div>
                </div>
                
                {/* Simulated Loading/Action Button */}
                 <div className="mt-4 flex justify-end">
                    <button className="text-xs font-medium text-saudi-green hover:underline flex items-center gap-1">
                       {selectedSubDomainId === sub.id ? 'إخفاء النتائج' : 'عرض التحليل'} <Activity className="w-3 h-3" />
                    </button>
                 </div>
              </div>

              {/* AI Result Area (Expandable) */}
              {selectedSubDomainId === sub.id && sub.aiResult && (
                 <div className="p-5 border-t border-gray-100 bg-white animate-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-gray-400">نتيجة التحليل</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                            (sub.aiResult.confidenceScore || 0) > 90 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                            دقة {sub.aiResult.confidenceScore}%
                        </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 leading-relaxed mb-2">
                        {sub.aiResult.summary}
                    </p>
                    {renderAIResult(sub.aiResult)}
                 </div>
              )}
           </div>
         ))}
      </div>

      {activeModule?.id === 'planning' && (
      <div className="mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Land Opportunities Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <div>
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Map className="w-5 h-5 text-saudi-gold" />
                فرص الأراضي (مكة المكرمة - بطحاء قريش)
              </h3>
            </div>
            <Button size="sm" className="bg-saudi-green hover:bg-saudi-dark text-white">
              <Plus className="w-4 h-4 ml-2" />
              إضافة أرض جديدة
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-gray-50 text-gray-700 font-medium">
                <tr>
                  <th className="px-6 py-4">الموقع</th>
                  <th className="px-6 py-4">المساحة</th>
                  <th className="px-6 py-4">نظام البناء</th>
                  <th className="px-6 py-4">مؤشر الجدوى (AI)</th>
                  <th className="px-6 py-4">التكلفة التقديرية</th>
                  <th className="px-6 py-4">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    بطحاء قريش - مخطط المحمدية
                    <span className="block text-xs text-gray-500 font-normal mt-1">جوار أفق 10</span>
                  </td>
                  <td className="px-6 py-4">850 م²</td>
                  <td className="px-6 py-4">تجاري/سكي (12 دور)</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                      <span className="text-green-700 font-bold">94%</span>
                    </div>
                    <span className="text-xs text-green-600">ممتازة</span>
                  </td>
                  <td className="px-6 py-4 font-mono">18,000,000 ر.س</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs border border-blue-200">تحت الدراسة</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    العوالي - الشارع العام
                  </td>
                  <td className="px-6 py-4">1,200 م²</td>
                  <td className="px-6 py-4">أبراج فندقية</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-yellow-700 font-bold">78%</span>
                    </div>
                    <span className="text-xs text-yellow-600">مرتفعة السعر</span>
                  </td>
                  <td className="px-6 py-4 font-mono">42,000,000 ر.س</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs border border-gray-200">مسودة</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Smart Assistant - Gemini 2.0 */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="p-4 border-b border-gray-700 flex items-center justify-between bg-black/20">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 p-2 rounded-lg border border-blue-500/30">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">المساعد الذكي - General AI</h3>
                <p className="text-xs text-blue-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  مدعوم بواسطة Gemini 2.0
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 h-64 overflow-y-auto space-y-4 bg-black/10">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-saudi-green flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-gray-700/50 rounded-2xl rounded-tr-none p-4 max-w-2xl border border-gray-600 text-gray-200 leading-relaxed shadow-sm">
                مرحباً، أنا مساعد التخطيط الذكي. يمكنني مساعدتك في تحليل فرص الأراضي ودراسات الجدوى. هل تود أن أقوم بتحليل بيانات حي معين اليوم؟
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <div className="relative">
              <input 
                type="text" 
                placeholder="اكتب استفسارك هنا... (مثلاً: ما هي أفضل المناطق للاستثمار السكني في مكة؟)" 
                className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-600 rounded-xl py-3 pr-4 pl-12 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    )}

      {activeModule?.id === 'field' && (
      <div className="mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* NEW: Live Site Monitoring Feeds (AI CCTV) */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
            <div className="p-4 bg-gray-950 flex justify-between items-center border-b border-gray-800">
                <h3 className="text-white font-bold flex items-center gap-2">
                    <Camera className="w-5 h-5 text-red-500 animate-pulse" />
                    مركز المراقبة الذكي (AI CCTV Hub)
                </h3>
                <div className="flex gap-2">
                     <span className="px-2 py-1 bg-red-500/20 text-red-500 text-xs rounded border border-red-500/30 flex items-center gap-1 font-mono">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> REC
                     </span>
                     <button className="text-gray-400 hover:text-white p-1"><Maximize2 className="w-4 h-4" /></button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1 bg-black">
                {/* Feed 1: Workers / Safety */}
                <div className="relative aspect-video bg-gray-800 group overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Construction Workers" />
                    
                    {/* Overlays for Workers */}
                    <div className="absolute top-4 right-4 border-2 border-green-500 w-16 h-24 rounded shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                         <span className="absolute -top-5 right-0 bg-green-500 text-black text-[9px] px-1 font-bold rounded-t">Worker #12</span>
                    </div>
                    <div className="absolute top-10 left-10 border-2 border-red-500 w-16 h-24 rounded shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse">
                         <span className="absolute -top-5 left-0 bg-red-500 text-white text-[9px] px-1 font-bold rounded-t">No Helmet</span>
                    </div>

                    <div className="absolute top-2 left-2 flex gap-1">
                        <span className="bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm">👥 12 Workers</span>
                        <span className="bg-red-500/80 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm">⚠️ 1 Violation</span>
                    </div>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/60 px-2 py-1 rounded backdrop-blur-sm font-mono">CAM-01: المدخل الرئيسي</div>
                </div>

                {/* Feed 2: Materials */}
                <div className="relative aspect-video bg-gray-800 group overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Construction Materials" />
                    
                    {/* Overlays for Materials */}
                     <div className="absolute bottom-4 left-1/3 border-2 border-blue-500 w-32 h-20 rounded border-dashed bg-blue-500/10">
                         <span className="absolute -top-5 left-0 bg-blue-500 text-white text-[9px] px-1 font-bold rounded-t">Rebar Steel</span>
                         <div className="absolute inset-0 flex items-center justify-center text-blue-200 text-xs font-mono font-bold">Est: 5.2 Tons</div>
                    </div>
                    
                    <div className="absolute top-2 left-2">
                        <span className="bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm">📦 Inventory Scan</span>
                    </div>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/60 px-2 py-1 rounded backdrop-blur-sm font-mono">CAM-02: منطقة التشوين</div>
                </div>

                {/* Feed 3: Tools/Vehicles */}
                 <div className="relative aspect-video bg-gray-800 group overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Construction Crane" />
                    
                    {/* Overlays for Equipment */}
                     <div className="absolute top-1/4 right-1/4 border-2 border-yellow-500 w-40 h-32 rounded">
                         <span className="absolute -top-5 right-0 bg-yellow-500 text-black text-[9px] px-1 font-bold rounded-t">Crane #01</span>
                         <span className="absolute bottom-0 right-0 bg-yellow-500/80 text-black text-[9px] px-1 font-bold">Active</span>
                    </div>

                    <div className="absolute top-2 left-2">
                        <span className="bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm">🚜 Asset Tracking</span>
                    </div>
                    <div className="absolute bottom-2 right-2 text-white text-xs bg-black/60 px-2 py-1 rounded backdrop-blur-sm font-mono">CAM-03: منطقة الرافعة</div>
                </div>
            </div>
        </div>

        {/* ROW 1: Safety Alerts Log & BIM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Safety Alerts Log */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        سجل تنبيهات السلامة (Safety Log)
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">3 مخالفات اليوم</span>
                    </div>
                </div>
                <div className="p-4 space-y-4">
                    {/* Alert 1 */}
                    <div className="flex gap-4 p-3 bg-red-50 border border-red-100 rounded-lg">
                        <div className="bg-red-200 p-2 rounded-lg h-fit">
                            <AlertTriangle className="w-5 h-5 text-red-700" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="font-bold text-red-900 text-sm">مشروع أفق 11</h4>
                                <span className="text-xs text-red-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 10:30 AM</span>
                            </div>
                            <p className="text-sm text-red-700">رصد عاملين بدون خوذة في المنطقة B (الدور 8).</p>
                        </div>
                    </div>
                    {/* Alert 2 */}
                    <div className="flex gap-4 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                        <div className="bg-orange-200 p-2 rounded-lg h-fit">
                            <AlertCircle className="w-5 h-5 text-orange-700" />
                        </div>
                        <div>
                             <div className="flex items-center justify-between mb-1">
                                <h4 className="font-bold text-orange-900 text-sm">مشروع أفق 10</h4>
                                <span className="text-xs text-orange-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 09:15 AM</span>
                            </div>
                            <p className="text-sm text-orange-700">وجود مخلفات بناء تعيق ممر الطوارئ الجنوبي.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BIM vs Reality */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-600" />
                        مقارنة المخطط بالواقع (BIM)
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    {/* Project 1 */}
                    <div>
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <h4 className="font-bold text-gray-800">أفق 11 (الهيكل الخرساني)</h4>
                                <p className="text-xs text-red-500 font-medium mt-1">يوجد تأخر بسيط في صب سقف الدور الثامن مقارنة بالجدول الزمني.</p>
                            </div>
                            <span className="text-sm font-bold text-red-600">-3% انحراف</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '97%' }}></div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div>
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <h4 className="font-bold text-gray-800">أفق 10 (التشطيبات)</h4>
                                <p className="text-xs text-green-600 font-medium mt-1">أعمال الواجهات تسير بدقة متناهية مع نموذج BIM.</p>
                            </div>
                            <span className="text-sm font-bold text-green-600">100% مطابق</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ROW 2: Resources & Inventory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resource Tracking */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Truck className="w-5 h-5 text-saudi-gold" />
                        تتبع الموارد والمعدات
                    </h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">محدث: الآن</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-right text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="px-4 py-3">المعدة / المورد</th>
                                <th className="px-4 py-3">الموقع الحالي</th>
                                <th className="px-4 py-3">الحالة</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="px-4 py-3 font-medium">رافعة برجية #1</td>
                                <td className="px-4 py-3 text-gray-500">أفق 11 (الجهة الشمالية)</td>
                                <td className="px-4 py-3"><span className="inline-block w-2 h-2 rounded-full bg-green-500 ml-2"></span>تعمل</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-medium">رافعة شوكية (JCB)</td>
                                <td className="px-4 py-3 text-gray-500">أفق 10 (المواقف)</td>
                                <td className="px-4 py-3"><span className="inline-block w-2 h-2 rounded-full bg-orange-500 ml-2"></span>صيانة</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

             {/* Inventory Tracking */}
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Package className="w-5 h-5 text-purple-600" />
                        مراقبة المخزون والتشوين
                    </h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">محدث: منذ 30 دقيقة</span>
                </div>
                <div className="p-4 grid grid-cols-2 gap-4">
                    {/* Item 1 */}
                    <div className="border border-red-100 bg-red-50/30 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-bold text-gray-700">حديد تسليح (16mm)</span>
                            <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded">منخفض</span>
                        </div>
                        <div className="text-2xl font-black text-gray-900 mb-1">12 <span className="text-sm font-normal text-gray-500">طن</span></div>
                        <p className="text-xs text-red-600">أفق 11: الحد الأدنى للطلب 10 طن</p>
                    </div>
                     {/* Item 2 */}
                     <div className="border border-green-100 bg-green-50/30 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-bold text-gray-700">بلوك بركاني</span>
                            <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">جيد</span>
                        </div>
                        <div className="text-2xl font-black text-gray-900 mb-1">4,500 <span className="text-sm font-normal text-gray-500">حبة</span></div>
                        <p className="text-xs text-green-600">أفق 11: يكفي لمدة 5 أيام عمل</p>
                    </div>
                </div>
             </div>
        </div>

        {/* Reports & AI Assistant */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Auto Reports */}
             <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-gray-600" />
                        تقارير إنجاز آلية
                    </h3>
                 </div>
                 <div className="p-4">
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg bg-gray-50 group hover:border-saudi-green transition-colors cursor-pointer">
                        <div className="bg-red-100 p-2 rounded text-red-600 ml-3">PDF</div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-gray-800">تقرير الإنجاز اليومي (أفق 11)</h4>
                            <p className="text-xs text-gray-500">تاريخ: 2024-06-15 • تم الإنشاء آلياً</p>
                        </div>
                        <Download className="w-4 h-4 text-gray-400 group-hover:text-saudi-green" />
                    </div>
                 </div>
             </div>

             {/* AI Assistant */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
                <div className="p-4 border-b border-gray-700 flex items-center justify-between bg-black/20">
                    <div className="flex items-center gap-3">
                    <div className="bg-blue-600/20 p-2 rounded-lg border border-blue-500/30">
                        <Sparkles className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold">المساعد الذكي - General AI</h3>
                        <p className="text-xs text-blue-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        مدعوم بواسطة Gemini 2.0
                        </p>
                    </div>
                    </div>
                </div>
                
                <div className="p-6 h-48 overflow-y-auto space-y-4 bg-black/10">
                    <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-saudi-green flex items-center justify-center shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gray-700/50 rounded-2xl rounded-tr-none p-4 max-w-xl border border-gray-600 text-gray-200 leading-relaxed shadow-sm">
                        كيف يمكنني مساعدتك اليوم في مشاريع مسكن الأفق؟ يمكنني تحليل سجلات السلامة أو مراجعة مخزون المواد.
                    </div>
                    </div>
                </div>

                <div className="p-4 bg-gray-800 border-t border-gray-700">
                    <div className="relative">
                    <input 
                        type="text" 
                        placeholder="اسأل عن حالة المشروع أو السلامة..." 
                        className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-600 rounded-xl py-3 pr-4 pl-12 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <button className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                        <Send className="w-4 h-4" />
                    </button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    )}

      {activeModule?.id === 'finance' && (
      <div className="mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* ROW 1: Cash Flow & Predictive Procurement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Cash Flow Forecast Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-saudi-green" />
                        تنبؤ التدفق النقدي (3 أشهر)
                    </h3>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">تحليل جدول دفعات المقاولين vs دفعات العملاء/وافي</span>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {/* June - Current */}
                        <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                            <h4 className="text-sm font-bold text-gray-700 mb-2">الشهر الحالي (يونيو)</h4>
                            <div className="text-xs text-gray-500 mb-1">وارد: 3.5M | صادر: 1.2M</div>
                            <div className="text-lg font-black text-green-700">فائض: +2.3M ر.س</div>
                        </div>
                        {/* July - Predicted */}
                        <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 bg-orange-200 text-orange-800 text-[10px] px-2 py-0.5 rounded-br">تنبؤ AI</div>
                            <h4 className="text-sm font-bold text-gray-700 mb-2 mt-2">يوليو</h4>
                            <div className="text-xs text-gray-500 mb-1">وارد: 0.5M | صادر: 0.8M</div>
                            <div className="text-lg font-black text-orange-700">عجز محتمل: -300K ر.س</div>
                        </div>
                        {/* August - Predicted */}
                        <div className="text-center p-3 bg-red-50 rounded-lg border border-red-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 bg-red-200 text-red-800 text-[10px] px-2 py-0.5 rounded-br">تنبؤ AI</div>
                            <h4 className="text-sm font-bold text-gray-700 mb-2 mt-2">أغسطس</h4>
                            <div className="text-xs text-gray-500 mb-1">وارد: 0.0M | صادر: 2.1M</div>
                            <div className="text-lg font-black text-red-700">عجز حرج: -2.1M ر.س</div>
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-3">
                         <div className="bg-blue-200 p-1.5 rounded-full"><Sparkles className="w-4 h-4 text-blue-700" /></div>
                         <p className="text-sm text-blue-800 font-medium leading-relaxed">توصية: تسريع شهادة إنجاز أفق 11 لفك الدفعة.</p>
                    </div>
                </div>
            </div>

            {/* Predictive Procurement Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-blue-600" />
                        إدارة مشتريات تنبؤية
                    </h3>
                     <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">مراقبة السوق العالمية</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 p-4 bg-red-50 border border-red-100 rounded-lg">
                        <div className="bg-red-200 p-3 rounded-full">
                            <ArrowUpRight className="w-6 h-6 text-red-700" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">مؤشر سعر الحديد (عالمي/محلي)</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-gray-900">+8%</span>
                                <span className="text-sm text-red-600 font-bold">ارتفاع متوقع</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-4">
                        <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                            <p className="text-sm text-blue-800 leading-relaxed font-medium">
                                توقعات بارتفاع السعر خلال 7 أيام. نوصي بشراء احتياج أفق 11 (45 طن) فوراً.
                            </p>
                        </div>
                    </div>

                    <Button className="w-full bg-saudi-dark hover:bg-black">
                        شراء حديد الآن (تثبيت السعر)
                    </Button>
                </div>
            </div>
        </div>

        {/* ROW 2: Invoice OCR */}
         <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-purple-600" />
                    قارئ فواتير ذكي (Smart OCR)
                </h3>
             </div>
             <div className="p-6">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ScanEye className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">اسحب الفواتير هنا أو اضغط للرفع</h4>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">سيقوم النظام بمسح الفاتورة، استخراج الرقم الضريبي، المبلغ، ومطابقتها مع أوامر الشراء ونظام ZATCA.</p>
                </div>
                
                <div className="mt-6">
                    <h4 className="text-sm font-bold text-gray-700 mb-3">آخر الفواتير المعالجة</h4>
                    <div className="space-y-3">
                         <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-sm font-bold text-gray-800">فاتورة #9921 (شركة الخرسانة)</p>
                                    <p className="text-xs text-gray-500">12,500 ر.س • منذ 10 دقائق</p>
                                </div>
                            </div>
                            <span className="flex items-center gap-1 text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">
                                <CheckSquare className="w-3 h-3" />
                                ZATCA Verified
                            </span>
                         </div>
                    </div>
                </div>
             </div>
         </div>

      </div>
    )}

      {activeModule?.id === 'community' && (
      <div className="mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* ROW 1: Mullak & Collection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Mullak Integration Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Vote className="w-5 h-5 text-saudi-gold" />
                        اتحاد الملاك (ربط مع ملاك)
                    </h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">مسجلة</span>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-gray-400" />
                            <div>
                                <div className="text-sm text-gray-500">عدد الوحدات</div>
                                <div className="text-xl font-bold text-gray-900">42 / 42</div>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-gray-200"></div>
                        <div className="text-left">
                            <span className="text-xs font-medium text-gray-500">تصويت نشط</span>
                            <div className="font-bold text-gray-800">تركيب كاميرات</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="font-medium text-green-700">موافق: 65%</span>
                            <span className="text-gray-400 text-xs">متبقي يومين</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Financial Collection Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Wallet className="w-5 h-5 text-blue-600" />
                        التحصيل المالي
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        Ejar Integrated
                    </span>
                </div>
                <div className="p-6 flex items-center gap-6">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <div className="text-xl font-black text-blue-600">85%</div>
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                            <path className="text-blue-600" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                    </div>
                    <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                            <span className="text-sm text-gray-600">رسوم اتحاد الملاك (أغسطس)</span>
                            <span className="font-mono font-bold text-gray-900">22,500 ر.س</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                            <span className="text-sm text-gray-600">إيجارات مستحقة (وحدات استثمارية)</span>
                            <span className="font-mono font-bold text-gray-900">45,000 ر.س</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ROW 2: Facility Booking & Smart Dispute */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             
             {/* Facility Booking */}
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Armchair className="w-5 h-5 text-purple-600" />
                        حجوزات المرافق (اليوم)
                    </h3>
                 </div>
                 <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between p-3 border border-orange-100 bg-orange-50/30 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-100 rounded-full text-orange-600"><Waves className="w-4 h-4" /></div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">المسبح المشترك</h4>
                                <p className="text-xs text-orange-600">محجوز (4pm - 6pm)</p>
                            </div>
                        </div>
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-green-100 bg-green-50/30 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-full text-green-600"><Dumbbell className="w-4 h-4" /></div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">النادي الرياضي</h4>
                                <p className="text-xs text-green-600">متاح الآن</p>
                            </div>
                        </div>
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-green-100 bg-green-50/30 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-full text-green-600"><PartyPopper className="w-4 h-4" /></div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">قاعة المناسبات</h4>
                                <p className="text-xs text-green-600">متاح (سعة 50 شخص)</p>
                            </div>
                        </div>
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                 </div>
             </div>

             {/* Smart Dispute */}
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Gavel className="w-5 h-5 text-gray-700" />
                        فض النزاعات الذكي
                    </h3>
                </div>
                <div className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600">
                        <Scale className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">بوت قانوني للفصل في الخلافات</h4>
                    <p className="text-sm text-gray-500 mb-6">يفصل في الخلافات البسيطة (مواقف، إزعاج) بناءً على اللائحة التنظيمية المعتمدة.</p>
                    
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold text-sm border border-green-100">
                        <CheckCircle className="w-4 h-4" />
                        نزاعات نشطة: 0
                    </div>
                </div>
             </div>
        </div>

        {/* AI Assistant */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
            <div className="p-4 border-b border-gray-700 flex items-center justify-between bg-black/20">
            <div className="flex items-center gap-3">
                <div className="bg-blue-600/20 p-2 rounded-lg border border-blue-500/30">
                <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                <h3 className="text-white font-bold">المساعد الذكي - General AI</h3>
                <p className="text-xs text-blue-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    مدعوم بواسطة Gemini 2.0
                </p>
                </div>
            </div>
            </div>
            
            <div className="p-6 h-48 overflow-y-auto space-y-4 bg-black/10">
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-saudi-green flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-700/50 rounded-2xl rounded-tr-none p-4 max-w-xl border border-gray-600 text-gray-200 leading-relaxed shadow-sm">
                 كيف يمكنني مساعدتك اليوم في مشاريع مسكن الأفق؟
                </div>
            </div>
            </div>

            <div className="p-4 bg-gray-800 border-t border-gray-700">
            <div className="relative">
                <input 
                type="text" 
                placeholder="اسأل عن اتحاد الملاك أو الحجوزات..." 
                className="w-full bg-gray-900 text-white placeholder-gray-500 border border-gray-600 rounded-xl py-3 pr-4 pl-12 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <button className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                <Send className="w-4 h-4" />
                </button>
            </div>
            </div>
        </div>

      </div>
    )}

      <div className="bg-saudi-dark rounded-xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
           <div>
              <h3 className="text-2xl font-bold mb-2">هل تحتاج إلى تقرير مفصل؟</h3>
              <p className="text-green-100 opacity-90">يمكنك استخراج تقرير PDF شامل عن {moduleDetails?.title} يتضمن جميع التحليلات والبيانات.</p>
           </div>
           <Button variant="secondary" size="lg">استخراج التقرير</Button>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans" dir="rtl">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-saudi-dark text-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Building className="w-6 h-6 text-saudi-gold ml-2" />
          <span className="text-xl font-bold tracking-wide">بنيان كلاود</span>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {NAVIGATION_ITEMS.map((item: NavItem) => (
            <button
              key={item.id}
              onClick={() => {
                  setActiveTab(item.id);
                  setSelectedSubDomainId(null); // Reset selection on tab change
                  setSidebarOpen(false); // Close mobile menu
              }}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                activeTab === item.id 
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 ml-3" />
              {item.label}
            </button>
          ))}
          <div className="pt-8 border-t border-white/10 mt-4">
             <button onClick={onLogout} className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-300 hover:bg-white/5 rounded-lg">
                تسجيل الخروج
             </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-saudi-green"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative mr-4 hidden sm:block w-64">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-saudi-green focus:border-saudi-green sm:text-sm transition duration-150 ease-in-out"
                placeholder="بحث في المشاريع، العملاء..."
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="flex items-center gap-3 border-r border-gray-200 pr-4 mr-2">
                <div className="text-left hidden sm:block">
                    <p className="text-sm font-medium text-gray-700">أحمد المحمد</p>
                    <p className="text-xs text-gray-500">مدير المشاريع</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-saudi-gold flex items-center justify-center text-white font-bold">
                    أ
                </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{activeModule?.label}</h1>
            <p className="text-gray-500 mt-1">
              {activeTab === 'dashboard' ? 'نظرة عامة على أداء الشركة والمؤشرات الرئيسية.' : `إدارة ${activeModule?.label} والتقنيات الذكية المرتبطة به.`}
            </p>
          </div>

          {activeTab === 'dashboard' ? renderDashboardOverview() : renderModuleDetails()}

        </main>
      </div>
    </div>
  );
};