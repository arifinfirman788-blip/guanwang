const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=2187&auto=format&fit=crop" 
                alt="Digital Guizhou" 
                className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">扎根贵州</p>
                <p className="text-sm opacity-80">服务全省文旅产业升级</p>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8">
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">关于我们</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong className="text-gray-900">贵州贵旅数网科技有限公司</strong> 
              是贵州旅游投资控股集团旗下的核心科技企业。我们要做的不仅仅是一个网站，而是构建连接游客、景区与政府的数字化桥梁。
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              我们专注于文旅产业的数字化转型，通过云计算、大数据、物联网等技术手段，
              打造黄小西系列智能体等标杆项目，推动贵州旅游产业向智慧化、高端化发展。
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                <p className="text-gray-500 text-sm">服务景区</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="text-2xl font-bold text-gray-900">3.1万+</h3>
                <p className="text-gray-500 text-sm">覆盖酒店</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
