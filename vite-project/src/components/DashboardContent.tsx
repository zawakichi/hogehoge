import React from 'react';
import { Menu, Activity, Users, DollarSign, TrendingUp, Box, BarChart } from 'lucide-react';
import StatCard from './StatCard';
import ActivityFeed from './ActivityFeed';
import Chart from './Chart';

interface DashboardContentProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ setIsSidebarOpen }) => {
  const stats = [
    {
      title: "アクティブユーザー",
      value: "13.2k",
      change: "+12%",
      icon: Users,
      trend: "up"
    },
    {
      title: "売上高",
      value: "¥2.4M",
      change: "+8%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "プロジェクト数",
      value: "164",
      change: "+21%",
      icon: Box,
      trend: "up"
    },
    {
      title: "システム負荷",
      value: "23%",
      change: "-5%",
      icon: Activity,
      trend: "down"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-6">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">最終更新: 2024年3月15日 15:30</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">パフォーマンス分析</h3>
              <select className="text-sm border-gray-200 rounded-md">
                <option>過去7日間</option>
                <option>過去30日間</option>
                <option>過去3ヶ月</option>
              </select>
            </div>
            <Chart />
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">最近のアクティビティ</h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-700">すべて表示</button>
            </div>
            <ActivityFeed />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">進行中のプロジェクト</h3>
            <div className="space-y-4">
              {[
                { name: "ECサイトリニューアル", progress: 75 },
                { name: "モバイルアプリ開発", progress: 45 },
                { name: "データ分析基盤構築", progress: 90 }
              ].map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">{project.name}</span>
                    <span className="text-gray-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">システムステータス</h3>
            <div className="space-y-4">
              {[
                { name: "CPU使用率", value: "23%", status: "正常" },
                { name: "メモリ使用量", value: "2.1GB", status: "正常" },
                { name: "ストレージ", value: "45%", status: "注意" },
                { name: "ネットワーク", value: "150Mbps", status: "正常" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{item.name}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-900 font-medium">{item.value}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === "正常" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;
