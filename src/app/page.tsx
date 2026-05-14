import CircularGallery from '@/components/CircularGallery';

export default function Home() {
  const dreamcoreItems = [
    { image: 'https://images.unsplash.com/photo-1516339901600-2e1a62986307?q=80&w=800&auto=format&fit=crop', text: 'Ethereal' },
    { image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4b47e?q=80&w=800&auto=format&fit=crop', text: 'Dream' },
    { image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800&auto=format&fit=crop', text: 'Cloud' },
    { image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop', text: 'Forest' },
    { image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop', text: 'Soft' },
    { image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop', text: 'Light' },
    { image: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=800&auto=format&fit=crop', text: 'Surreal' },
    { image: 'https://images.unsplash.com/photo-1475924156736-5d14651f090f?q=80&w=800&auto=format&fit=crop', text: 'Sea' },
    { image: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?q=80&w=800&auto=format&fit=crop', text: 'Spirit' },
    { image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=800&auto=format&fit=crop', text: 'Cosmos' },
    { image: 'https://images.unsplash.com/photo-1516746826332-969472e39f37?q=80&w=800&auto=format&fit=crop', text: 'Pastel' },
    { image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800&auto=format&fit=crop', text: 'Void' }
  ];

  return (
    <div className="w-screen h-screen bg-black">
      <CircularGallery
        items={dreamcoreItems}
        bend={3}
        borderRadius={0}
        scrollSpeed={2}
        scrollEase={0.05}
        textColor="#ffffff"
      />
    </div>
  );
}
