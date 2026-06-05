'use client';

export default function FooterButtons() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        display: 'flex',
        gap: '16px',
        zIndex: 9999,
      }}
    >
      <a
        href="https://sebas-dev.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#fff',
          textDecoration: 'underline',
          fontStyle: 'italic',
          fontSize: '14px',
          fontWeight: 200,
          fontFamily: 'var(--font-outfit), sans-serif',
          opacity: 0.8,
          transition: 'opacity 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
      >
        ✨ Created by Sebastian Vasquez
      </a>
      <a
        href="https://github.com/sebastianvasquezechavarria1234/circular-gallery"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#fff',
          textDecoration: 'underline',
          fontStyle: 'italic',
          fontSize: '14px',
          fontWeight: 200,
          fontFamily: 'var(--font-outfit), sans-serif',
          opacity: 0.8,
          transition: 'opacity 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
      >
        💻 View source code
      </a>
    </div>
  );
}
