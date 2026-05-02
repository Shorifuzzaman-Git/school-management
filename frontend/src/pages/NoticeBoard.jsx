import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Bell } from 'lucide-react';

const NoticeBoard = () => {
  // Sample notices data - in a real app, this would come from an API
  const notices = [
    {
      id: 1,
      date: '2026-05-01',
      title: 'Admission Open for Academic Year 2026-2027',
      content: 'Applications are now open for admission to classes 1-12. Limited seats available.',
      fullContent: 'We are pleased to announce that admission applications for the academic year 2026-2027 are now open. We offer admission to classes 1 through 12 with limited seats available. Interested parents and students are requested to submit their applications online through our admission portal. The admission process will continue until May 15, 2026. For more information, please contact the admission office.',
      priority: 'high'
    },
    {
      id: 2,
      date: '2026-04-28',
      title: 'Annual Sports Day Scheduled for May 10',
      content: 'Annual sports day will be held on May 10, 2026. All students are requested to participate.',
      fullContent: 'The annual sports day is scheduled for May 10, 2026. This year\'s theme is "Unity in Diversity". All students from classes 1-12 are encouraged to participate in various sporting events including track and field, team sports, and individual competitions. The event will showcase the athletic talents of our students and promote healthy competition and sportsmanship.',
      priority: 'medium'
    },
    {
      id: 3,
      date: '2026-04-25',
      title: 'Parent-Teacher Meeting on May 5',
      content: 'Parent-teacher meeting scheduled for May 5, 2026. Parents are requested to attend.',
      fullContent: 'A parent-teacher meeting is scheduled for May 5, 2026, from 9:00 AM to 4:00 PM. This meeting provides an opportunity for parents to discuss their child\'s academic progress, behavior, and overall development with teachers. Parents are requested to attend the meeting and actively participate in discussions about their child\'s future.',
      priority: 'medium'
    },
    {
      id: 4,
      date: '2026-04-20',
      title: 'Mid-term Examination Schedule Released',
      content: 'Mid-term examination schedule for all classes has been released. Check the academic calendar.',
      fullContent: 'The mid-term examination schedule for all classes (1-12) has been finalized and released. Students are advised to check the academic calendar on the school website or notice board for detailed schedules. All examinations will be conducted according to the published timetable. Students should prepare well and maintain the examination discipline.',
      priority: 'medium'
    },
    {
      id: 5,
      date: '2026-04-15',
      title: 'Library Hours Extended During Exam Period',
      content: 'Library will remain open until 8 PM during the examination period for additional study hours.',
      fullContent: 'To support students during the examination period, the school library will extend its operating hours. The library will remain open from 8:00 AM to 8:00 PM Monday through Saturday. Additional study materials and reference books will be made available. Students are encouraged to utilize this facility for their exam preparation.',
      priority: 'low'
    },
    {
      id: 6,
      date: '2026-04-10',
      title: 'Cultural Program Winners Announced',
      content: 'Congratulations to all participants of the annual cultural program. Winners list available.',
      fullContent: 'The annual cultural program was a grand success with enthusiastic participation from students across all grades. We congratulate all participants for their excellent performances. The winners in various categories have been announced and certificates will be distributed during the next assembly. Special recognition goes to the outstanding performances in music, dance, and drama categories.',
      priority: 'low'
    },
    {
      id: 7,
      date: '2026-04-05',
      title: 'New Computer Lab Inauguration',
      content: 'State-of-the-art computer lab inaugurated with latest equipment and software.',
      fullContent: 'We are pleased to announce the inauguration of our new computer lab equipped with the latest technology. The lab features 50 high-performance computers with modern software including programming tools, design software, and educational applications. This facility will enhance our computer education program and provide students with hands-on experience in digital technologies.',
      priority: 'high'
    },
    {
      id: 8,
      date: '2026-03-30',
      title: 'Summer Vacation Notice',
      content: 'Summer vacation will commence from May 20, 2026. Classes resume on June 15, 2026.',
      fullContent: 'Summer vacation for the academic year 2025-2026 will commence from May 20, 2026. All classes will remain closed during this period. The next academic session will begin on June 15, 2026. Students are advised to utilize the vacation period for rest, skill development, and preparation for the next academic year. All school facilities will remain closed during vacation except for special arrangements.',
      priority: 'medium'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-red-500 bg-red-50';
      case 'medium':
        return 'border-yellow-500 bg-yellow-50';
      default:
        return 'border-green-500 bg-green-50';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return '🔴';
      case 'medium':
        return '🟡';
      default:
        return '🟢';
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-gradient-to-r from-green-600 to-green-700 text-white py-16'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='flex items-center justify-center mb-4'
          >
            <Bell className='w-12 h-12 mr-4' />
            <h1 className='text-4xl md:text-5xl font-bold'>Notice Board</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl opacity-90 max-w-3xl mx-auto'
          >
            Stay updated with the latest announcements, events, and important information
          </motion.p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 md:px-8 py-16'>
        {/* Notice Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='grid grid-cols-3 gap-6 mb-12'
        >
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>
            <span className='text-3xl'>📢</span>
            <p className='text-2xl font-bold text-gray-900 mt-2'>{notices.length}</p>
            <p className='text-gray-600'>Total Notices</p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>
            <span className='text-3xl'>🔴</span>
            <p className='text-2xl font-bold text-gray-900 mt-2'>
              {notices.filter(n => n.priority === 'high').length}
            </p>
            <p className='text-gray-600'>High Priority</p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-lg text-center'>
            <span className='text-3xl'>📅</span>
            <p className='text-2xl font-bold text-gray-900 mt-2'>
              {new Set(notices.map(n => n.date.split('-')[1])).size}
            </p>
            <p className='text-gray-600'>This Month</p>
          </div>
        </motion.div>

        {/* Notices List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='space-y-6'
        >
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border-l-4 pl-6 py-6 rounded-r-lg shadow-lg hover:shadow-xl transition duration-300 ${getPriorityColor(notice.priority)}`}
            >
              <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center mb-3'>
                    <Calendar className='w-5 h-5 text-gray-600 mr-2' />
                    <span className='text-sm font-medium text-gray-600'>{notice.date}</span>
                    <span className='ml-3 text-lg'>{getPriorityIcon(notice.priority)}</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>{notice.title}</h3>
                  <p className='text-gray-700 leading-relaxed mb-4'>{notice.content}</p>
                  <div className='text-sm text-gray-500 mb-4'>
                    Priority: <span className={`font-medium ${
                      notice.priority === 'high' ? 'text-red-600' :
                      notice.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)}
                    </span>
                  </div>
                </div>
                <div className='lg:ml-6 mt-4 lg:mt-0'>
                  <Link
                    to={`/notice/${notice.id}`}
                    className='inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300'
                  >
                    Read Full Notice →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Admin Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6'
        >
          <h3 className='text-lg font-semibold text-blue-900 mb-3'>📝 Admin Panel Access</h3>
          <p className='text-blue-800 mb-4'>
            This notice board is designed to be easily manageable by administrators. The system allows
            for easy addition, editing, and removal of notices with priority levels and categorization.
          </p>
          <div className='grid md:grid-cols-3 gap-4 text-sm'>
            <div className='bg-white p-3 rounded-lg'>
              <span className='font-medium text-blue-900'>Priority Levels:</span>
              <p className='text-blue-700'>High (Red), Medium (Yellow), Low (Green)</p>
            </div>
            <div className='bg-white p-3 rounded-lg'>
              <span className='font-medium text-blue-900'>Date Format:</span>
              <p className='text-blue-700'>YYYY-MM-DD for consistency</p>
            </div>
            <div className='bg-white p-3 rounded-lg'>
              <span className='font-medium text-blue-900'>Content:</span>
              <p className='text-blue-700'>Summary + Full content for details</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;