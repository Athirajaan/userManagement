import React from 'react'

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
      {message}
    </div>
  );
}

