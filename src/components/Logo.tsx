interface LogoProps {
  className?: string;
  variant?: 'navbar' | 'footer' | 'generic';
}

export default function Logo({ className = '', variant = 'navbar' }: LogoProps) {
  let src = '';
  let alt = 'Mojake Consult Logo';
  let height = '48px';

  switch (variant) {
    case 'navbar':
      src = '/mojake-consult-logo-1.png';
      height = '45px';
      break;
    case 'footer':
      src = '/mojake-consult-logo-2.png';
      height = '65px';
      break;
    case 'generic':
      src = '/mojake-consult-logo-1.png';
      height = '55px';
      break;
    default:
      src = '/mojake-consult-logo-3.png';
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {variant === 'navbar' && (
        <div
          className="absolute inset-0 bg-[#0D1B4B] rounded-full transform scale-125"
          style={{ zIndex: 0 }}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{ height: height, width: 'auto', objectFit: 'contain', position: 'relative', zIndex: 1 }}
        className="block"
      />
    </div>
  );
}
