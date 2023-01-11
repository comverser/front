import Image from 'next/image';
import { useRouter } from 'next/router';

import { loader } from '@/assets';
import type { Campaign } from '@/types';

import { FundCard } from './FundCard';

interface DisplayCampaignsProps {
  title: string;
  isLoading: boolean;
  campaigns: Campaign[];
}

export const DisplayCampaigns = ({
  title,
  isLoading,
  campaigns,
}: DisplayCampaignsProps) => {
  const router = useRouter();

  const handleNavigate = (campaign: Campaign) => {
    router.push({
      pathname: `/campaign-details/${campaign.title}`,
      query: { ...campaign },
    });
  };

  return (
    <div>
      <h1 className="text-left font-epilogue text-[18px] font-semibold text-white">
        {title} ({campaigns.length})
      </h1>

      <div className="mt-[20px] flex flex-wrap gap-[26px]">
        {isLoading && (
          <Image
            src={loader}
            alt="loader"
            width={100}
            height={100}
            className="object-contain"
            priority={true}
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue text-[14px] font-semibold leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={campaign.id} // there is an error here because the id is undefined, which means the key value is not unique
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};
