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
      src = '/mojake-consult-logo-3.png';
      height = '48px';
      break;
    case 'footer':
      src = '/mojake-consult-logo-2.png';
      height = '56px';
      break;
    case 'generic':
      src = '/mojake-consult-logo-1.png';
      height = '48px';
      break;
    default:
      src = '/mojake-consult-logo-3.png';
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        style={{ height: height, width: 'auto', objectFit: 'contain' }}
        className="block"
      />
    </div>
  );
}
