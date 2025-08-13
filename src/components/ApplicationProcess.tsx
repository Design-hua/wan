import React from 'react';
import { CheckCircle, Clock, FileText, UserCheck, Plane, GraduationCap } from 'lucide-react';

const ApplicationProcess: React.FC = () => {
  const steps = [
    {
      icon: UserCheck,
      title: '咨询评估',
      description: '专业顾问评估学生背景，制定留学方案',
      duration: '1-2天',
      tasks: ['学术背景评估', '语言能力测试', '职业规划咨询', '院校专业推荐']
    },
    {
      icon: FileText,
      title: '材料准备',
      description: '准备完整的申请材料和文书',
      duration: '2-3周',
      tasks: ['成绩单公证', '语言成绩准备', '推荐信撰写', '个人陈述修改']
    },
    {
      icon: CheckCircle,
      title: '申请递交',
      description: '提交申请并跟踪申请进度',
      duration: '1周',
      tasks: ['在线申请提交', '材料邮寄', '申请费缴纳', '进度跟踪']
    },
    {
      icon: Clock,
      title: '等待录取',
      description: '等待学校审理并获得录取通知',
      duration: '4-8周',
      tasks: ['申请状态跟踪', '补充材料', '面试准备', '录取确认']
    },
    {
      icon: Plane,
      title: '签证办理',
      description: '获得录取后办理学生签证',
      duration: '4-6周',
      tasks: ['签证材料准备', '体检安排', '签证申请递交', '签证结果查询']
    },
    {
      icon: GraduationCap,
      title: '行前准备',
      description: '完成最后的行前准备工作',
      duration: '2-3周',
      tasks: ['住宿指导', '接机服务', '行李准备', '入学指导']
    }
  ];

  const requirements = [
    {
      category: '学术要求',
      items: ['高中毕业证及成绩单', '大学在读证明(本科申请硕士)', '学位证书(研究生申请)', '专业课程成绩']
    },
    {
      category: '语言要求',
      items: ['雅思5.0-6.5分', '托福500-550分', 'PTE学术英语测试', '或参加大学英语测试']
    },
    {
      category: '其他材料',
      items: ['护照复印件', '白底证件照', '健康证明', '资金证明']
    },
    {
      category: '特殊要求',
      items: ['艺术类需作品集', '商科可能需GMAT', '部分专业需工作经验', '推荐信2-3封']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">申请流程</h2>
          <p className="text-lg text-gray-600">专业指导，步步为营，确保申请成功</p>
        </div>

        {/* 申请步骤 */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 申请要求 */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">申请要求详解</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4 text-center">{req.category}</h4>
                <ul className="space-y-2">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">开始您的留学之旅</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              我们的专业团队将为您提供全程指导，确保每个环节都能顺利完成。
              立即联系我们，获得免费的留学规划咨询。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                免费咨询
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                下载申请指南
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;