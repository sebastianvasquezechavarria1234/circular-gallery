import CircularGallery from '@/components/CircularGallery';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <CircularGallery
        bend={1}
        borderRadius={0}
        scrollSpeed={2}
        scrollEase={0.05}
        textColor="#ffffff"
      />
    </div>
  );
}
