import React, { useState } from 'react';
import { Calendar, Instagram, Facebook, Linkedin } from 'lucide-react';

const SocialMedia = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [postContent, setPostContent] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with AI to process and schedule the post
    console.log('Post scheduled:', { platform: selectedPlatform, content: postContent, date: scheduledDate });
    // Reset form
    setPostContent('');
    setScheduledDate('');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Social Media Management</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Platform</label>
            <div className="flex space-x-4">
              <PlatformButton
                platform="instagram"
                icon={Instagram}
                selected={selectedPlatform === 'instagram'}
                onClick={() => setSelectedPlatform('instagram')}
              />
              <PlatformButton
                platform="facebook"
                icon={Facebook}
                selected={selectedPlatform === 'facebook'}
                onClick={() => setSelectedPlatform('facebook')}
              />
              <PlatformButton
                platform="linkedin"
                icon={Linkedin}
                selected={selectedPlatform === 'linkedin'}
                onClick={() => setSelectedPlatform('linkedin')}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="postContent" className="block text-sm font-medium text-gray-700 mb-2">
              Post Content
            </label>
            <textarea
              id="postContent"
              rows={4}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your post content here..."
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="scheduleDate" className="block text-sm font-medium text-gray-700 mb-2">
              Schedule Date
            </label>
            <div className="relative">
              <input
                type="datetime-local"
                id="scheduleDate"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Schedule Post
          </button>
        </form>
      </div>
    </div>
  );
};

const PlatformButton: React.FC<{
  platform: string;
  icon: React.ElementType;
  selected: boolean;
  onClick: () => void;
}> = ({ platform, icon: Icon, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex items-center justify-center p-2 rounded-md ${
      selected ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
    } hover:bg-indigo-50`}
  >
    <Icon className="h-6 w-6" />
    <span className="ml-2 capitalize">{platform}</span>
  </button>
);

export default SocialMedia;