import { useEffect, useState } from 'react';
import { gallery } from '../constants';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetId, setTargetId] = useState(1);

  useEffect(() => {
    if (!targetId) return;
    targetId ? setIsOpen(true) : null;
  }, [targetId, isOpen]);

  return (
    <section className="flex justify-center border border-red-400 px-2 py-20">
      <div className="h-128 w-full max-w-screen-2xl overflow-hidden p-2">
        <h1 className="mb-6 text-3xl font-bold capitalize tracking-wide lg:pl-10 lg:text-5xl">
          gallery.
        </h1>
        <div className="flex h-[500px] cursor-pointer overflow-hidden rounded-2xl">
          {gallery.map((image) => (
            <div
              key={image.id}
              className={`w-full ${targetId === image.id ? 'z-10 flex-[5] saturate-150 lg:flex-[2]' : 'flex-1 saturate-50'} overflow-hidden border duration-500 ease-in-out`}
              onClick={() => setTargetId(image.id)}
            >
              <img
                src={image.image}
                className="h-full w-full object-cover"
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
