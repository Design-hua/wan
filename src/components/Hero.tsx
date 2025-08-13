import React from 'react';
import { MapPin, Users, Award, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              马来西亚留学
              <span className="text-yellow-400">首选平台</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              专业的留学顾问团队，为您提供从择校到签证的全程服务。
              马来西亚优质教育，国际认可学历，费用低廉，是您海外求学的理想选择。
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                立即咨询
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                查看院校
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <MapPin className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-blue-100">合作院校</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Users className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">5000+</h3>
              <p className="text-blue-100">成功案例</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Award className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-blue-100">签证成功率</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Clock className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">10+</h3>
              <p className="text-blue-100">年专业经验</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;