import React from 'react';
import { Home, Box, Layers, Settings, ExternalLink, X, Users, BarChart2, Bell } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: number;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const menuItems: MenuItem[] = [
    { icon: Home, label: 'ダッシュボード', href: '#' },
    { icon: Users, label: 'ユーザー管理', href: '#users', badge: 3 },
    { icon: Box, label: 'プロジェクト', href: '#projects' },
    { icon: BarChart2, label: 'アナリティクス', href: '#analytics' },
    { icon: Bell, label: '通知', href: '#notifications', badge: 5 },
    { icon: Settings, label: '設定', href: '#settings' },
  ];

  const secondaryItems: MenuItem[] = [
    { icon: ExternalLink, label: 'ドキュメント', href: 'https://docs.example.com' },
    { icon: Layers, label: 'アップデート', href: '#updates', badge: 1 },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col`}
    >
      {/* ヘッダー */}
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Box className="w-6 h-6 text-indigo-600" />
          <span className="text-xl font-semibold text-gray-800">管理パネル</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* メインメニュー */}
      <nav className="flex-1 overflow-y-auto">
        <div className="px-3 py-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 group"
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3 group-hover:text-indigo-600" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* セカンダリーメニュー */}
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-1">
          {secondaryItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 group"
            >
              <div className="flex items-center">
                <item.icon className="w-5 h-5 mr-3 group-hover:text-gray-900" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* ユーザー情報 */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-sm font-medium text-indigo-600">AS</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              管理者
            </p>
            <p className="text-xs text-gray-500 truncate">
              admin@example.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;