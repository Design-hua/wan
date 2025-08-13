import React from 'react';
import { FileCheck, GraduationCap, Plane, HeartHandshake, BookOpen, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: '择校咨询',
      description: '根据学生背景和兴趣，推荐最适合的大学和专业',
      features: ['专业评估', '院校匹配', '发展规划']
    },
    {
      icon: FileCheck,
      title: '申请服务',
      description: '全程协助完成申请材料准备和提交',
      features: ['材料准备', '文书修改', '申请递交']
    },
    {
      icon: Shield,
      title: '签证办理',
      description: '专业签证团队，确保签证申请成功率',
      features: ['材料指导', '面试培训', '跟踪服务']
    },
    {
      icon: Plane,
      title: '行前指导',
      description: '提供全面的行前准备和入学指导',
      features: ['住宿安排', '接机服务', '生活指导']
    },
    {
      icon: HeartHandshake,
      title: '后续服务',
      description: '留学期间持续关注学生学习生活情况',
      features: ['学业跟踪', '生活关怀', '家长沟通']
    },
    {
      icon: GraduationCap,
      title: '就业指导',
      description: '协助学生规划毕业后的职业发展路径',
      features: ['职业规划', '就业推荐', '移民咨询']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">专业留学服务</h2>
          <p className="text-lg text-gray-600">一站式留学解决方案，从申请到毕业全程无忧</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-600 group-hover:bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">签证查询服务</h3>
            <p className="text-blue-100 mb-6">
              我们提供官方签证查询服务，帮助您实时了解签证申请进度
            </p>
            <a 
              href="https://visa.educationmalaysia.gov.my/emgs/application/searchForm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              查询签证状态
              <Plane className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;