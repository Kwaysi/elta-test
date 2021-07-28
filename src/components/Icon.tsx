import { images } from '../assets/icons';

type props = {
  icon: string;
  size?: string;
  cname?: string;
  color?: string;
  onclick?: (e: MouseEvent) => void;
};

export default function Icon({ icon, cname = '' }: props) {
  return (
    <span className={`icon ${cname}`}>
      <img
        src={
          // @ts-ignore
          images[`${icon}`].default
        }
        alt={icon}
      />
    </span>
  );
}
