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
              是由贵州省旅游产业发展集团有限公司与华创云信数字技术股份有限公司合资组建的国有控股公司，于 2024 年 11 月 29 日注册成立。公司的组建契合贵州抢抓国发〔2022〕2 号文件机遇、发展数字经济的时代背景，是落实贵州省委、省政府数智赋能建设战略，响应 2025 年《贵州省政府工作报告》文旅数智化创新要求的重要布局，作为贵州旅游数智互联平台暨旅游行业大模型建设及运营主体，承担着 AI 大模型在旅游行业落地应用的重要使命。
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              在省大数据局、省文化和旅游厅的指导下，数网公司紧扣国家旅游产业政策与贵州旅游发展战略，以建设运营 “贵州旅游产业数智互联平台”、推动贵州旅游大模型发展为核心，致力于成为贵州旅游产业数据要素开发利用的领军企业、旅游产业数据资源与产品的供应商、旅游产业大模型的运营主体，通过大数据和人工智能技术开发面向游客、涉旅企业、职能部门的数字化工具，创新旅游产品与服务模式，推动数实深度融合，全方位助力贵州旅游产业高质量发展。
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
