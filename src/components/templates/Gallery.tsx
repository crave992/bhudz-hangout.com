"use client"

import { useState } from 'react';
import ImageService from '@/services/Image.service';
import { Image } from '@/services/Image.model'

interface GalleryProps {
  limit?: number;
}

const GalleryImages: React.FC<GalleryProps> = ({ limit = 12 }) => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { getImages } = ImageService();

  const fetchImages = async () => {
    try {
      setLoading(true);
      const images = await getImages();
      if (Array.isArray(images)) { // Check if images is a valid array
        setImages(images);
        setLoading(false);
        setError('');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setLoading(false);
    }
  };

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedImages = images.slice(startIndex, endIndex);

  const totalPages = Math.ceil(images.length / limit);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedImages.map((image) => (
          <div key={image.id} className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
              <div className="absolute bottom-0 w-full pb-4 text-center text-white font-bold text-lg">{image.filename}</div>
            </div>
            <img src={image.src} alt={image.filename} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      {loading && <div className="text-center mt-8">Loading...</div>}
      {error && <div className="text-center mt-8 text-red-500">{error}</div>}
    </div>
  );
};

export default GalleryImages;