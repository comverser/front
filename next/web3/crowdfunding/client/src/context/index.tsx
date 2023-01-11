import {
  useAddress,
  useContract,
  useContractWrite,
  useMetamask,
} from '@thirdweb-dev/react';
import type { SmartContract } from '@thirdweb-dev/sdk';
import type { BaseContract } from 'ethers';
import { ethers } from 'ethers';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

import type { Campaign, Field } from '@/types';

interface StaticContextProps {
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
  address: string;
  contract: SmartContract<BaseContract>;
  connect: () => Promise<unknown>;
  createCampaign: (form: Field) => Promise<void>;
  getCampaigns: () => Promise<Campaign[]>;
  getUserCampaigns: () => Promise<Campaign[]>;
  donate: (pId: number, amount: string) => Promise<unknown>;
  getDonations: (pId: number) => Promise<unknown>;
}

const StateContext = createContext({} as StaticContextProps);

interface StaticContextProviderProps {
  children: React.ReactNode;
}

export const StateContextProvider = ({
  children,
}: StaticContextProviderProps) => {
  const { contract } = useContract(
    '0xfac9e299249663023EFE4Ea46D33D9EcB021c70B'
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    'createCampaign'
  );

  const address = useAddress();
  const connect = useMetamask();
  const [isActive, setIsActive] = useState('dashboard');

  const publishCampaign = async (form: Field) => {
    try {
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image,
      ]);

      console.log('contract call sucess', data);
    } catch (error) {
      console.log('contract call failure', error);
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract?.call('getCampaigns');

    const parsedCampaigns = campaigns?.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      pId: i,
    }));

    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  };

  const donate = async (pId: number, amount: string) => {
    const data = await contract?.call('donateToCampaign', pId, {
      value: ethers.utils.parseEther(amount),
    });
    return data;
  };

  const getDonations = async (pId) => {
    const donations = await contract?.call('getDonators', pId);
    const numberOfDonations = donations[0].length;

    const parseDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parseDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parseDonations;
  };

  return (
    <StateContext.Provider
      value={{
        isActive,
        setIsActive,
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

// address owner;
// string title;
// string description;
// uint256 target;
// uint256 deadline;
// uint256 amountCollected;
// string image;
// address[] donators;
// uint256[] donations;
