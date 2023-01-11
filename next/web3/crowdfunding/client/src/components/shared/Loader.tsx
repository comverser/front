import Image from 'next/image';

import { loader } from '@/assets';

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 flex h-screen flex-col items-center justify-center bg-[rgba(0,0,0,0.7)]">
      <Image src={loader} alt="loader" width={100} className="object-contain" />
      <p className="mt-[20px] text-center font-epilogue text-[20px] font-bold text-white">
        Transaction is in progress <br /> Please wait...
      </p>
    </div>
  );
};
