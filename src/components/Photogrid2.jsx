import React, { useState, useEffect } from 'react';
import exifr from 'exifr';

// Just the titles, in the same order as the images
const titles = [
    'Shaping the Divine',
    'Caged View',
    'Netaji',
    'The Sky',
    'The canopy',
    'The auto at ITO',
    "SRCC's Inlawns",
    'The Iconic SRCC clock tower',
    'SRCC Again',
    'Monday Mornings',
    'Spring has Arrived',
    '',
    'The Road Less Taken',
    'Hauz Khas Fort',
    'Sunrise at the Ghat',
    'The Morning Commute',
    'Sun Sets the Day',
    '🔮',
    'The Unknown Temple',
    'Boxes of Life',
    'Message from the Bowling Arena',
    'Delhi-Haat',
    'A Celestial Celebration',
    'Jamna Paar',
    'Over the Fields and Highways',
    'The Garden',
    'Slave Day',
    '🚇',
    '🚉',
    'Statesman House, CP',
    'Guarding Lodhi Garden',
    'Motion Light Blur',
    'पुष्प वर्षा',
    'Silhouettes at Sunset',
    'Chasing the History',
];

const PhotoGrid = () => {
    const [photos, setPhotos] = useState([]);
    const [exifData, setExifData] = useState({});

    useEffect(() => {
        const loadPhotos = async () => {
            const imageArray = [];
    
    for (let i = 1; i <= 37; i++) { 
        const filename = `https://paneerclicks.netlify.app/images/photo${String(i).padStart(2, "0")}.jpg`;

        try {
            const response = await fetch(filename);
            if (!response.ok) break;
            
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            imageArray.push(blobUrl);
        } catch (error) {
            console.error(`Error loading image: ${filename}`, error);
            break;
        }
    }

    setPhotos(imageArray);

            // Extract EXIF metadata for each image
            imageArray.forEach(async (imgSrc, index) => {
                try {
                    const metadata = await exifr.parse(imgSrc);
                    setExifData((prevData) => ({
                        ...prevData,
                        [index]: metadata
                    }));
                } catch (error) {
                    console.error('Failed to read EXIF data:', error);
                }
            });
        };

        loadPhotos();
    }, []);

    return (
        <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {photos.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg shadow-amber-300 bg-yellow-50 flex flex-col">
                    <img src={src} alt={titles[index]} className="w-full h-85 object-cover" loading="lazy"/>
                        <h2 className="p-3 text-lg font-semibold text-center">{titles[index]}</h2> 
                    <div className="p-4 pb-auto bg-stone-100 align-self-end">
                        {exifData[index] ? (
                            <p className="text-sm text-gray-600">
                                <strong>Camera:</strong> {exifData[index]?.Make || 'N/A'} {exifData[index]?.Model || ''} <br />
                                <strong>Aperture:</strong> {exifData[index]?.FNumber || 'N/A'} <br />
                                <strong>ISO:</strong> {exifData[index]?.ISO || 'N/A'} <br />
                                <strong>Shutter Speed:</strong> {exifData[index]?.ExposureTime
                                    ? `1/${Math.round(1 / exifData[index]?.ExposureTime)}s`
                                    : 'N/A'}
                            </p>
                        ) : (
                            <p className="text-sm text-gray-400">No EXIF data available</p>
                        )}
                    </div>
                </div>
            ))}
        </main>
    );
};

export default PhotoGrid;
