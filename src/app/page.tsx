import CircularGallery from '@/components/CircularGallery';

export default function Home() {
  const landscapeItems = [
    { image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', text: 'Mountains' },
    { image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800', text: 'Misty' },
    { image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800', text: 'Forest' },
    { image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800', text: 'Coastal' },
    { image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800', text: 'Hills' },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800', text: 'Valley' },
    { image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=800', text: 'Serene' },
    { image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800', text: 'Waterfall' },
    { image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800', text: 'Nature' },
    { image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800', text: 'Ecosystem' },
    { image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&q=80&w=800', text: 'Snow' },
    { image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&q=80&w=800', text: 'Abstract' }
  ];

  return (
    <div className="w-screen h-screen bg-black">
      <CircularGallery
        items={landscapeItems}
        bend={3}
        borderRadius={0}
        scrollSpeed={2}
        scrollEase={0.05}
        textColor="#ffffff"
      />
    </div>
  );
}
