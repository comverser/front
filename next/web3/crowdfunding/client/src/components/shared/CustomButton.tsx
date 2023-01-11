import type { MouseEventHandler } from 'react';

interface CustomButtonProps {
  btnType: 'button' | 'submit' | 'reset';
  title: string;
  styles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton = ({
  btnType,
  title,
  handleClick,
  styles,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      className={`min-h-[52px] rounded-[10px] px-4 font-epilogue font-semibold leading-[26px] text-[16xp] text-white ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
