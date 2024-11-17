'use client';
export const MeteorShower = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Generate multiple meteors with different positions and delays */}
      {[...Array(20)].map((_, index) => {
        const randomDelay = Math.random() * 15; // Random delay up to 15s
        const randomPosition = Math.random() * 100; // Random start position
        const randomDuration = 2 + Math.random() * 2; // Duration between 2-4s

        return (
          <div
            key={index}
            className="absolute h-0.5 w-0.5 rounded-full bg-white"
            style={{
              top: `${randomPosition}%`,
              left: '100%',
              animation: `meteorFall ${randomDuration}s linear ${randomDelay}s infinite`,
              opacity: 0.6,
              boxShadow:
                '0 0 0 1px #ffffff10, 0 0 2px #ffffff30, 0 0 10px #ffffff20',
            }}
          >
            {/* Meteor tail */}
            <div
              className="absolute right-0 h-0.5"
              style={{
                width: `${100 + Math.random() * 100}px`,
                background: 'linear-gradient(to left, white, transparent)',
                opacity: 0.3,
                transform: 'translateX(100%)',
              }}
            />
          </div>
        );
      })}

      {/* Add some static twinkling stars */}
      {[...Array(50)].map((_, index) => {
        const size = 1 + Math.random() * 2;
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const twinkleDelay = Math.random() * 5;

        return (
          <div
            key={`star-${index}`}
            className="absolute rounded-full"
            style={{
              width: size + 'px',
              height: size + 'px',
              top: `${randomY}%`,
              left: `${randomX}%`,
              background: 'white',
              opacity: 0.6,
              animation: `twinkle 5s ease-in-out ${twinkleDelay}s infinite`,
              boxShadow: '0 0 2px #ffffff40, 0 0 4px #ffffff20',
            }}
          />
        );
      })}
    </div>
  );
};
