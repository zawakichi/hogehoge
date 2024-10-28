import React from 'react';
import { Circle } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const activities = [
    {
      id: 1,
      user: "田中さん",
      action: "新しいプロジェクトを作成",
      time: "5分前",
      status: "success"
    },
    {
      id: 2,
      user: "佐藤さん",
      action: "デプロイを実行",
      time: "23分前",
      status: "warning"
    },
    {
      id: 3,
      user: "鈴木さん",
      action: "コードをプッシュ",
      time: "1時間前",
      status: "success"
    },
    {
      id: 4,
      user: "山田さん",
      action: "レビューをリクエスト",
      time: "2時間前",
      status: "info"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'info': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3">
          <Circle className={`w-2 h-2 mt-2 ${getStatusColor(activity.status)}`} />
          <div>
            <p className="text-sm text-gray-900">
              <span className="font-medium">{activity.user}</span>が
              {activity.action}しました
            </p>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;