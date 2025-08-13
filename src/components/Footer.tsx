import React from 'react';
import { GraduationCap, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">大华留国际教育</h3>
                <p className="text-sm text-gray-400">专业马来西亚留学服务</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              专注马来西亚留学服务10余年，为数千名学子实现海外求学梦想。
              我们提供从择校咨询到毕业就业的全程专业服务。
            </p>
          </div>

          {/* 服务项目 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">服务项目</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>留学咨询规划</li>
              <li>院校申请服务</li>
              <li>签证办理指导</li>
              <li>行前培训服务</li>
              <li>海外跟踪服务</li>
              <li>就业指导咨询</li>
            </ul>
          </div>

          {/* 热门院校 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">热门院校</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>马来亚大学</li>
              <li>马来西亚国立大学</li>
              <li>马来西亚理科大学</li>
              <li>泰莱大学</li>
              <li>思特雅大学</li>
              <li>英迪大学</li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>微信: 13153335866</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>公众号: 大华留国际教育</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>邮箱: info@dahualeave.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 大华留国际教育. 保留所有权利.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">服务条款</a>
            <a 
              href="https://visa.educationmalaysia.gov.my/emgs/application/searchForm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              签证查询
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;