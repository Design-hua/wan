import React, { useState } from 'react';
import { Star, MapPin, DollarSign, FileText, TrendingUp } from 'lucide-react';

interface University {
  id: string;
  name: string;
  nameEn: string;
  type: 'public' | 'private';
  qsRank: number | string;
  asiaRank?: number;
  location: string;
  tuitionFee: string;
  programs: string[];
  requirements: string[];
  advantages: string[];
  image: string;
}

const Universities: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'public' | 'private'>('all');
  
  const universities: University[] = [
    {
      id: '1',
      name: '马来亚大学',
      nameEn: 'University of Malaya (UM)',
      type: 'public',
      qsRank: 60,
      location: '吉隆坡',
      tuitionFee: '约15,000-25,000马币/年',
      programs: ['医学', '工程学', '商学', '计算机科学', '法学', '教育学'],
      requirements: ['高中毕业证', '雅思6.0或托福550', '高考成绩优秀', '推荐信'],
      advantages: ['马来西亚排名第一', '历史悠久', '国际认可度高', '研究实力强'],
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg'
    },
    {
      id: '2',
      name: '马来西亚国立大学',
      nameEn: 'Universiti Kebangsaan Malaysia (UKM)',
      type: 'public',
      qsRank: 138,
      location: '雪兰莪',
      tuitionFee: '约12,000-20,000马币/年',
      programs: ['工程技术', '医学', '社会科学', '自然科学', '人文学科'],
      requirements: ['高中毕业证', '雅思6.0', 'SPM或同等学历', '身体健康证明'],
      advantages: ['综合性研究型大学', '政府资助', '学费低廉', '多语言环境'],
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg'
    },
    {
      id: '3',
      name: '马来西亚理科大学',
      nameEn: 'Universiti Sains Malaysia (USM)',
      type: 'public',
      qsRank: 146,
      location: '槟城',
      tuitionFee: '约10,000-18,000马币/年',
      programs: ['理学', '工程学', '医学', '药学', '建筑学', '艺术学'],
      requirements: ['高中毕业', '雅思5.5-6.0', '相关科目成绩优良', '申请表'],
      advantages: ['理工科强势', '研究导向', '国际合作多', '奖学金丰富'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    },
    {
      id: '4',
      name: '博特拉大学',
      nameEn: 'Universiti Putra Malaysia (UPM)',
      type: 'public',
      qsRank: 148,
      location: '雪兰莪',
      tuitionFee: '约12,000-22,000马币/年',
      programs: ['农业科学', '林业学', '兽医学', '工程学', '商学', '教育学'],
      requirements: ['高中毕业证', '雅思6.0', '相关科目成绩', '健康证明'],
      advantages: ['农林科学专业全球排名前列', '研究实力强', '校园环境优美', '国际化程度高'],
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg'
    },
    {
      id: '5',
      name: '马来西亚理工大学',
      nameEn: 'Universiti Teknologi Malaysia (UTM)',
      type: 'public',
      qsRank: 181,
      location: '柔佛',
      tuitionFee: '约11,000-19,000马币/年',
      programs: ['工程学', '建筑学', '计算机科学', '管理学', '教育学', '科学技术'],
      requirements: ['高中毕业', '雅思5.5-6.0', '数学物理成绩优秀', '申请材料'],
      advantages: ['工程技术领域权威', '产学研结合紧密', '就业率高', '设施先进'],
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg'
    },
    {
      id: '6',
      name: '泰莱大学',
      nameEn: 'Taylor\'s University',
      type: 'private',
      qsRank: 284,
      location: '雪兰莪',
      tuitionFee: '约45,000-65,000马币/年',
      programs: ['商学', '酒店管理', '工程学', '建筑学', '传媒学', '设计学'],
      requirements: ['高中毕业证', '雅思5.0-6.5', '个人陈述', '作品集(部分专业)'],
      advantages: ['私立大学翘楚', '与海外大学合作', '就业率高', '设施先进'],
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg'
    },
    {
      id: '7',
      name: '思特雅大学',
      nameEn: 'UCSI University',
      type: 'private',
      qsRank: 300,
      location: '吉隆坡',
      tuitionFee: '约40,000-60,000马币/年',
      programs: ['音乐学', '商学', '工程学', '医学', '药学', '应用科学'],
      requirements: ['高中文凭', '雅思5.0-6.0', '面试(音乐专业)', '健康检查'],
      advantages: ['音乐学院著名', '多元化课程', '国际学生多', '奖学金制度'],
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg'
    },
    {
      id: '8',
      name: '世纪大学',
      nameEn: 'SEGi University',
      type: 'private',
      qsRank: 481,
      asiaRank: 151,
      location: '雪兰莪',
      tuitionFee: '约35,000-55,000马币/年',
      programs: ['医学', '牙医学', '药学', '商学', '工程学', '信息技术'],
      requirements: ['高中毕业证', '雅思5.5-6.5', '面试', '体检报告'],
      advantages: ['医学专业认可度高', '临床实习机会多', '国际合作广泛', '就业率优秀'],
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg'
    },
    {
      id: '9',
      name: '赛城大学',
      nameEn: 'University of Cyberjaya (UoC)',
      type: 'private',
      qsRank: '',
      asiaRank: 180,
      location: '赛城',
      tuitionFee: '约30,000-50,000马币/年',
      programs: ['医学', '牙医学', '药学', '心理学', '商学', '信息技术'],
      requirements: ['高中毕业', '雅思5.5-6.0', '面试', '健康检查'],
      advantages: ['现代化校园', '医学专业突出', '小班教学', '国际师资'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    },
    {
      id: '10',
      name: '城市大学',
      nameEn: 'City University Malaysia',
      type: 'private',
      qsRank: '',
      asiaRank: 200,
      location: '雪兰莪',
      tuitionFee: '约25,000-45,000马币/年',
      programs: ['建筑学', '工程学', '商学', '信息技术', '教育学', '艺术设计'],
      requirements: ['高中毕业证', '雅思5.0-6.0', '作品集(艺术类)', '推荐信'],
      advantages: ['建筑学专业知名', '实践性强', '业界联系紧密', '灵活课程安排'],
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg'
    },
    {
      id: '11',
      name: '精英大学',
      nameEn: 'HELP University',
      type: 'private',
      qsRank: '',
      asiaRank: 220,
      location: '吉隆坡',
      tuitionFee: '约30,000-50,000马币/年',
      programs: ['商学', '心理学', '传媒学', '计算机科学', '生物技术', '法学'],
      requirements: ['高中毕业', '雅思5.5', '个人陈述', '学术成绩单'],
      advantages: ['心理学专业突出', '双联课程丰富', '校友网络强大', '奖学金优厚'],
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg'
    },
    {
      id: '12',
      name: '亚太科技大学',
      nameEn: 'Asia Pacific University (APU)',
      type: 'private',
      qsRank: '',
      asiaRank: 250,
      location: '吉隆坡',
      tuitionFee: '约35,000-55,000马币/年',
      programs: ['计算机科学', '软件工程', '网络安全', '人工智能', '商学', '设计学'],
      requirements: ['高中毕业证', '雅思5.0-6.0', '数学成绩', '技术背景(IT专业)'],
      advantages: ['IT专业领先', '产业合作密切', '实习机会多', '就业导向强'],
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
    },
    {
      id: '13',
      name: '英迪大学',
      nameEn: 'INTI International University',
      type: 'private',
      qsRank: 556,
      asiaRank: 300,
      location: '森美兰',
      tuitionFee: '约35,000-55,000马币/年',
      programs: ['商学', '工程学', '信息技术', '大众传播', '生物技术', '心理学'],
      requirements: ['高中毕业', '雅思5.5', '数学及英语成绩良好', '推荐信'],
      advantages: ['双联课程丰富', '实习机会多', '师资国际化', '校友网络广'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    }
  ];

  const filteredUniversities = universities.filter(uni => 
    selectedType === 'all' || uni.type === selectedType
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">马来西亚优质院校</h2>
          <p className="text-lg text-gray-600">精选公立私立大学，QS 2025世界排名，专业优势明显</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                selectedType === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              全部院校
            </button>
            <button
              onClick={() => setSelectedType('public')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                selectedType === 'public' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              公立大学
            </button>
            <button
              onClick={() => setSelectedType('private')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                selectedType === 'private' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              私立大学
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredUniversities.map((uni) => (
            <div key={uni.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={uni.image} 
                  alt={uni.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    uni.type === 'public' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                  }`}>
                    {uni.type === 'public' ? '公立大学' : '私立大学'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {uni.qsRank ? (
                    <div className="bg-yellow-500 text-black px-2 py-1 rounded-md text-sm font-bold flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      QS {uni.qsRank}
                    </div>
                  ) : uni.asiaRank ? (
                    <div className="bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      亚洲 {uni.asiaRank}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{uni.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{uni.nameEn}</p>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{uni.location}</span>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    优势专业
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {uni.programs.slice(0, 4).map((program, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-gray-900 font-semibold">
                    <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                    {uni.tuitionFee}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-blue-500" />
                    申请要求
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {uni.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    了解详情
                  </button>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors">
                    咨询
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;