import { useEffect, useState } from 'react';

import { DisplayCampaigns } from '@/components';
import { useStateContext } from '@/context';
import { Meta } from '@/layouts';
import { Main } from '@/templates';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
    console.log('[useEffect: contract, address]:', contract, address);
  }, [address, contract]);

  return (
    <Main meta={<Meta title="index" description="this is index page" />}>
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </Main>
  );
};

export default Index;
