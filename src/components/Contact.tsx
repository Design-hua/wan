import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, Users, Award, Star } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: '微信咨询',
      detail: '13153335866',
      description: '扫码添加专业顾问微信，即时咨询',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Users,
      title: '微信公众号',
      detail: '大华留国际教育',
      description: '关注获取最新留学资讯和政策',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Mail,
      title: '邮件咨询',
      detail: 'info@dahualeave.com',
      description: '详细咨询可发送邮件',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: '专业资质',
      description: '教育部认证的正规留学中介机构'
    },
    {
      icon: Users,
      title: '经验丰富',
      description: '10年以上马来西亚留学服务经验'
    },
    {
      icon: Star,
      title: '成功率高',
      description: '98%以上的签证申请成功率'
    },
    {
      icon: Clock,
      title: '服务全面',
      description: '从咨询到毕业的全程跟踪服务'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
          <p className="text-lg text-gray-600">专业的留学顾问团队为您提供贴心服务</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系方式 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">多种联系方式</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className={`${method.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-lg font-semibold text-gray-800 mb-1">{method.detail}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-600 text-white rounded-xl">
              <h4 className="font-bold mb-3 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                服务时间
              </h4>
              <div className="space-y-2 text-blue-100">
                <p>周一至周五: 9:00 - 18:00</p>
                <p>周六: 10:00 - 16:00</p>
                <p>周日及节假日: 预约咨询</p>
              </div>
            </div>
          </div>

          {/* 公司优势 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">为什么选择我们</h3>
            <div className="space-y-6 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{advantage.title}</h4>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4">签证查询服务</h4>
              <p className="text-gray-600 mb-4">
                我们提供马来西亚官方签证查询服务，帮助您随时了解签证申请进度。
              </p>
              <a 
                href="https://visa.educationmalaysia.gov.my/emgs/application/searchForm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                查询签证状态
                <MapPin className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* 成功案例统计 */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">服务成果</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">成功案例</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">签证成功率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">合作院校</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600">服务年限</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;