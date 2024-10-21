import React, { useState } from 'react';
import { MessageSquare, Star, RefreshCw } from 'lucide-react';

const CustomerRelations = () => {
  const [selectedTab, setSelectedTab] = useState('messages');

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Customer Relations</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <TabButton
            icon={MessageSquare}
            label="Messages"
            active={selectedTab === 'messages'}
            onClick={() => setSelectedTab('messages')}
          />
          <TabButton
            icon={Star}
            label="Reviews"
            active={selectedTab === 'reviews'}
            onClick={() => setSelectedTab('reviews')}
          />
        </div>
        <div className="p-6">
          {selectedTab === 'messages' ? <MessagesTab /> : <ReviewsTab />}
        </div>
      </div>
    </div>
  );
};

const TabButton: React.FC<{
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ icon: Icon, label, active, onClick }) => (
  <button
    className={`flex items-center px-4 py-2 font-medium ${
      active
        ? 'text-indigo-600 border-b-2 border-indigo-600'
        : 'text-gray-500 hover:text-indigo-600'
    }`}
    onClick={onClick}
  >
    <Icon className="h-5 w-5 mr-2" />
    {label}
  </button>
);

const MessagesTab = () => {
  const [messages] = useState([
    { id: 1, customer: 'Alice', message: 'Hi, I have a question about my order.' },
    { id: 2, customer: 'Bob', message: 'When will my item be shipped?' },
    { id: 3, customer: 'Charlie', message: 'Can I get this in a different color?' },
  ]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Customer Messages</h2>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="border rounded-lg p-4">
            <p className="font-medium">{msg.customer}</p>
            <p className="text-gray-600">{msg.message}</p>
            <button className="mt-2 text-indigo-600 hover:text-indigo-800">
              Respond
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReviewsTab = () => {
  const [reviews] = useState([
    { id: 1, customer: 'David', rating: 5, comment: 'Great product! Exactly as described.' },
    { id: 2, customer: 'Eve', rating: 4, comment: 'Good quality, but shipping was slow.' },
    { id: 3, customer: 'Frank', rating: 3, comment: 'Decent product, but not what I expected.' },
  ]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-4">
            <div className="flex items-center mb-2">
              <p className="font-medium mr-2">{review.customer}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <button className="mt-2 text-indigo-600 hover:text-indigo-800">
              Respond
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerRelations;