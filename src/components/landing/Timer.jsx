// import { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3001');

// export default function Timer({ userId }) {
//   // Load saved time from localStorage
//   const [timeSpent, setTimeSpent] = useState(
//     () => parseInt(localStorage.getItem('timeSpent_' + userId)) || 0
//   );

//   const [online, setOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     socket.emit('start', userId);

//     let timerInterval;
//     let pingInterval;

//     const startTimer = () => {
//       setOnline(true);
//       timerInterval = setInterval(() => {
//         setTimeSpent(prev => {
//           const newTime = prev + 1000;
//           localStorage.setItem('timeSpent_' + userId, newTime); // save progress
//           return newTime;
//         });
//       }, 1000);

//       pingInterval = setInterval(() => {
//         socket.emit('ping');
//       }, 5000);
//     };

//     const stopTimer = () => {
//       setOnline(false);
//       clearInterval(timerInterval);
//       clearInterval(pingInterval);
//     };

//     if (navigator.onLine) startTimer();

//     const handleOffline = () => stopTimer();
//     const handleOnline = () => startTimer();

//     window.addEventListener('offline', handleOffline);
//     window.addEventListener('online', handleOnline);

//     return () => {
//       stopTimer();
//       window.removeEventListener('offline', handleOffline);
//       window.removeEventListener('online', handleOnline);
//     };
//   }, [userId]);

//   const formatTime = (ms) => {
//     let totalSeconds = Math.floor(ms / 1000);
//     const h = Math.floor(totalSeconds / 3600);
//     totalSeconds %= 3600;
//     const m = Math.floor(totalSeconds / 60);
//     const s = totalSeconds % 60;
//     return `${h}h ${m}m ${s}s`;
//   };

//   return (
//     <div className="p-4 bg-gray-800 text-white rounded">
//       <div>Status: {online ? '🟢 Online' : '⚫ Offline'}</div>
//       <div>Time Spent: {formatTime(timeSpent)}</div>
//     </div>
//   );
// }
