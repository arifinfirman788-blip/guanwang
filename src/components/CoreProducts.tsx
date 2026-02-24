import { motion } from 'framer-motion';
import { Sparkles, Map, Hotel, ArrowRight, BrainCircuit, BarChart3, Bus, Utensils, Building, Smartphone } from 'lucide-react';

const CoreProducts = () => {
  const products = [
    {
      id: 'colorful-hxx',
      title: '多彩黄小西',
      subtitle: '贵州文旅数字形象代言人 · 您的贴身AI向导',
      description: '基于贵州旅游行业大模型打造的C端智能体，为您提供从行程规划到游记生成的全流程伴游服务。支持微信、抖音、HarmonyOS等多端接入。',
      features: [
        { icon: Sparkles, text: '个性化行程生成：秒级生成“贵州3日春季赏花”等专属攻略' },
        { icon: Smartphone, text: '多端触达：深度集成高德地图，提供“AI探索发现”、“高德扫街榜”等特色功能' },
        { icon: ArrowRight, text: '一键智能订购：打通全省文旅服务平台，行程产品一键下单' },
      ],
      image: '/images/colorful-hxx.png', 
      color: 'from-pink-500 to-rose-500',
      align: 'left',
      link: 'https://arifinfirman788-blip.github.io/huangxiaoxi-gaode/'
    },
    {
      id: 'scenic-agent',
      title: '黄小西景区智能体',
      subtitle: '全域旅游数智大脑 · 景区管理新引擎',
      description: '覆盖全省520家A级景区的B端/G端管理工具，实现文旅资源的数智化建设与高效管理。',
      features: [
        { icon: Map, text: '实时态势感知：屯堡地戏开演提醒、通天河水位监测等实时通告' },
        { icon: BrainCircuit, text: '算法备案认证：通过国家“黄小西旅游服务合成算法”备案' },
        { icon: BarChart3, text: '数智化赋能：提供从客流监测到精准营销的全链条支持' },
      ],
      image: '/images/scenic-agent.png', 
      color: 'from-blue-500 to-cyan-500',
      align: 'right',
      link: 'https://arifinfirman788-blip.github.io/JingQu/'
    },
    {
      id: 'industry-agents',
      title: '行业赋能智能体矩阵',
      subtitle: '酒店 · 餐饮 · 旅行社 · 政府监管',
      description: '针对文旅产业链各环节打造的专属智能体，全面提升行业服务效率与监管水平。',
      features: [
        { icon: Hotel, text: '酒店智能体：AI智能应答、服务流程可视化、数据辅助决策' },
        { icon: Utensils, text: '餐饮智能体：智能推荐、排队管理、口味分析' },
        { icon: Bus, text: '旅行社智能体：行程自动排期、资源智能调度' },
        { icon: Building, text: '政府智能体：全域旅游监管、产业运行监测' },
      ],
      image: '/images/industry-agent.png',
      color: 'from-purple-500 to-indigo-500',
      align: 'left'
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              核心产品系列
            </div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">黄小西智能体生态</h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              依托贵州旅游行业大模型，我们构建了覆盖“吃住行游购娱”全场景的智能体矩阵，
              连接游客、企业与政府，共建智慧文旅新生态。
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${product.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-4 bg-gradient-to-r ${product.color} opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white bg-white">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="object-contain w-full h-full p-2 transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h3 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${product.color} mb-2`}>
                    {product.title}
                  </h3>
                  <p className="text-xl text-gray-900 font-medium">{product.subtitle}</p>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className={`mt-1 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover/item:bg-gray-200 transition-colors`}>
                        <feature.icon className={`w-3.5 h-3.5 text-gray-600`} />
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {product.link ? (
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r ${product.color} shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all`}
                  >
                    查看演示
                    <ArrowRight size={18} />
                  </a>
                ) : (
                  <button className={`px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r ${product.color} shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2`}>
                    了解详情
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProducts;
