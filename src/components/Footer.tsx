import { Github, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">G</div>
              <span className="text-xl font-bold">贵旅数网</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              致力于运用大数据、人工智能等前沿技术，构建智慧文旅服务体系，引领产业数字化转型。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">快速链接</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">首页</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">关于我们</a></li>
              <li><a href="#solutions" className="hover:text-blue-400 transition-colors">解决方案</a></li>
              <li><a href="#cases" className="hover:text-blue-400 transition-colors">案例展示</a></li>
              <li><a href="#news" className="hover:text-blue-400 transition-colors">新闻动态</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">核心服务</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">智慧景区</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">大数据平台</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">文旅电商</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">数字营销</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">联系我们</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                <span>贵州省贵阳市观山湖区<br />金融城国际中心</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>0851-88888888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>contact@guilv.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 贵州贵旅数网科技有限公司 版权所有. 黔ICP备88888888号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
