import React from 'react';
import { DollarSign, Home, Utensils, Bus, BookOpen, Heart } from 'lucide-react';

const CostComparison: React.FC = () => {
  const publicCosts = {
    tuition: '10,000 - 25,000',
    accommodation: '2,400 - 6,000',
    meals: '3,600 - 6,000',
    transportation: '1,200 - 2,400',
    books: '1,000 - 2,000',
    personal: '2,000 - 4,000',
    total: '20,200 - 45,400'
  };

  const privateCosts = {
    tuition: '35,000 - 65,000',
    accommodation: '3,600 - 8,400',
    meals: '4,200 - 7,200',
    transportation: '1,200 - 2,400',
    books: '1,500 - 3,000',
    personal: '2,500 - 5,000',
    total: '48,000 - 91,000'
  };

  const costItems = [
    { key: 'tuition', label: '学费', icon: BookOpen },
    { key: 'accommodation', label: '住宿费', icon: Home },
    { key: 'meals', label: '餐费', icon: Utensils },
    { key: 'transportation', label: '交通费', icon: Bus },
    { key: 'books', label: '书本费', icon: BookOpen },
    { key: 'personal', label: '生活费', icon: Heart }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">留学费用对比</h2>
          <p className="text-lg text-gray-600">详细的公立和私立大学费用分析 (马币/年)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 公立大学费用 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-6">
              <h3 className="text-2xl font-bold flex items-center">
                <DollarSign className="w-6 h-6 mr-2" />
                公立大学
              </h3>
              <p className="text-green-100 mt-2">政府资助，费用较低</p>
            </div>
            <div className="p-6">
              {costItems.map((item) => (
                <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="text-gray-700 font-medium">{item.label}</span>
                  </div>
                  <span className="text-gray-900 font-semibold">
                    RM {publicCosts[item.key as keyof typeof publicCosts]}
                  </span>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">年度总费用</span>
                  <span className="text-xl font-bold text-green-600">
                    RM {publicCosts.total}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">约合人民币 4.8万 - 10.8万</p>
              </div>
            </div>
          </div>

          {/* 私立大学费用 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <h3 className="text-2xl font-bold flex items-center">
                <DollarSign className="w-6 h-6 mr-2" />
                私立大学
              </h3>
              <p className="text-blue-100 mt-2">设施先进，国际化程度高</p>
            </div>
            <div className="p-6">
              {costItems.map((item) => (
                <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="text-gray-700 font-medium">{item.label}</span>
                  </div>
                  <span className="text-gray-900 font-semibold">
                    RM {privateCosts[item.key as keyof typeof privateCosts]}
                  </span>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">年度总费用</span>
                  <span className="text-xl font-bold text-blue-600">
                    RM {privateCosts.total}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">约合人民币 11.4万 - 21.6万</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">费用优势分析</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">费用低廉</h4>
              <p className="text-gray-600 text-sm">相比欧美国家，马来西亚留学费用仅为其1/3-1/4</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">教育质量高</h4>
              <p className="text-gray-600 text-sm">英联邦教育体系，学历全球认可</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">生活便利</h4>
              <p className="text-gray-600 text-sm">华人比例高，文化相近，生活适应快</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;