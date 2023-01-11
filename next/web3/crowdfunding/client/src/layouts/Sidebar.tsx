import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { logo, sun } from '@/assets';
import { navlinks } from '@/constants';
import { useStateContext } from '@/context';

interface IconProps {
  imgUrl: string;
  styles?: string;
  name?: string;
  isActive?: string;
  disabled?: boolean;
  handleClick?: () => void;
}

const Icon = ({
  imgUrl,
  styles,
  name,
  isActive,
  disabled,
  handleClick,
}: IconProps) => (
  <div
    className={`h-[48px] w-[48px] rounded-[10px] ${
      isActive && isActive === name && 'bg-[#2c2f32]'
    } flex items-center justify-center ${
      !disabled && 'cursor-pointer'
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <Image src={imgUrl} alt="fund_logo" className="w-1/2" />
    ) : (
      <Image
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 ${isActive !== name && 'grayscale'}`}
      />
    )}
  </div>
);

export const Sidebar = () => {
  const router = useRouter();
  const { isActive, setIsActive } = useStateContext();

  return (
    <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between">
      <Link href="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link>

      <div className="mt-12 flex w-[76px] flex-1 flex-col items-center justify-between rounded-[20px] bg-[#1c1c24] py-4">
        <div className="flex flex-col items-center justify-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  router.push(link.link);
                }
              }}
            />
          ))}
        </div>
        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  );
};
