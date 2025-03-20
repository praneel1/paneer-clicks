import React from 'react'
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import photo7 from '../images/photo7.jpg';
import photo8 from '../images/photo8.jpg';
import photo9 from '../images/photo9.jpg';
import photo10 from '../images/photo10.jpg';

const photos = [
    { id: 1, src: photo1, title: 'Shaping the Divine' },
    { id: 2, src: photo2, title: 'The Morning Commute' },
    { id: 3, src: photo3, title: 'A Celestial Celebration' },
    { id: 4, src: photo4, title: 'Statesman House, CP' },
    { id: 5, src: photo5, title: 'Gaurding Lodhi Garden' },
    { id: 6, src: photo6, title: 'Motion Light Blur' },
    { id: 7, src: photo7, title: 'पुष्प वर्षा' },
    { id: 8, src: photo8, title: 'Silhouettes at Sunset' },
    { id: 9, src: photo9, title: 'Chasing the history' },
    { id: 10, src: photo10, title: 'Caged View' },
  ];

function Photogrid() {
  return (
    <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="overflow-hidden rounded-lg shadow-lg shadow-amber-300">
            <img src={photo.src} alt={photo.title ? photo.title : photo.id} className="w-full h-85 object-fit" />
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold">{photo.title? photo.title : ""}</h2>
            </div>
          </div>
        ))}
    </main>
  )
}

export default Photogrid