import React, { useState } from 'react';
import { Calendar, Clock, Plus } from 'lucide-react';

const Schedule = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'New Product Launch', date: '2024-12-01', time: '09:00' },
    { id: 2, title: 'Holiday Sale Start', date: '2024-12-15', time: '00:00' },
    { id: 3, title: 'Social Media Campaign', date: '2024-12-10', time: '12:00' },
  ]);

  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '' });

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.time) {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
      setNewEvent({ title: '', date: '', time: '' });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Marketing Schedule</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
          <form onSubmit={handleAddEvent}>
            <div className="mb-4">
              <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Event Title
              </label>
              <input
                type="text"
                id="eventTitle"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                id="eventDate"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <input
                type="time"
                id="eventTime"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const EventCard: React.FC<{ title: string; date: string; time: string }> = ({ title, date, time }) => (
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div>
      <h3 className="font-semibold">{title}</h3>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="h-4 w-4 mr-1" />
        {date}
        <Clock className="h-4 w-4 ml-2 mr-1" />
        {time}
      </div>
    </div><button className="text-indigo-600 hover:text-indigo-800">
      <Plus className="h-5 w-5" />
    </button>
  </div>
);

export default Schedule;