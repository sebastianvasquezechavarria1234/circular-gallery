import CircularGallery from '@/components/CircularGallery';
import FooterButtons from '@/components/FooterButtons';

export default function Home() {
  const landscapeItems = [
    { image: '/048155170c820a3dad81ae1e5b043538.jpg', text: 'Imagen 1' },
    { image: '/16d276dae2b866be1c8faed7ccc1bb15.jpg', text: 'Imagen 2' },
    { image: '/47c98aecdfdaa0e4c8a585642981b357.jpg', text: 'Imagen 3' },
    { image: '/8496ace83d5a13daeb68a6516c58dd99.jpg', text: 'Imagen 4' },
    { image: '/c09384d9ab2dade46db96408a33caba9.jpg', text: 'Imagen 5' },
    { image: '/ce7d991bd59fe943385fbea80dd7b222.jpg', text: 'Imagen 6' },
    { image: '/d5b90ec3e614ccd60a5479919c95dd4e.jpg', text: 'Imagen 7' }
  ];

  return (
    <div className="relative z-10 w-screen h-screen">
      <CircularGallery
        items={landscapeItems}
        bend={3}
        borderRadius={0}
        scrollSpeed={2}
        scrollEase={0.05}
      />
      <FooterButtons />
    </div>
  );
}
