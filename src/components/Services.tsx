import { motion } from 'framer-motion';
import { Layers, Database, Globe, Building2, Eye, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Layers,
      title: '智慧景区解决方案',
      description: '提供门票预约、电子票务、智能导览、客流监控等一站式服务。',
      colorClass: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
    },
    {
      icon: Database,
      title: '旅游大数据平台',
      description: '基于全省文旅数据，提供精准营销、行业监测、趋势分析。',
      colorClass: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
    },
    {
      icon: Globe,
      title: '文旅电商平台',
      description: '搭建全域旅游电商平台，整合酒店、门票、特产等资源。',
      colorClass: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white'
    },
    {
      icon: Building2,
      title: '酒店管理系统',
      description: '智能PMS系统，提升酒店运营效率，优化住客体验。',
      colorClass: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
    },
    {
      icon: Eye,
      title: '沉浸式体验技术',
      description: '利用VR/AR技术，打造线上云游、虚拟展厅等创新体验。',
      colorClass: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
    },
    {
      icon: LineChart,
      title: '数字化营销服务',
      description: '全渠道数字媒体投放，品牌策划与传播，提升品牌影响力。',
      colorClass: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">全方位的数字化解决方案</h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              赋能文旅产业全链条，从景区管理到游客服务，从数据分析到品牌营销，我们提供一站式技术支持。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${service.colorClass}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
