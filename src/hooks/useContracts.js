import { BrowserProvider, Contract, formatUnits, parseUnits } from "ethers";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
// import toast from "react-hot-toast";
import { NFT_CONTRACT_ADDRESS, NFT_ABI } from "../contracts/contracts";
import toast from "react-hot-toast";

function useContract() {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();

  const getProvider = () => {
    return new BrowserProvider(walletProvider);
  };
  const getSigner = async (provider) => {
    return provider.getSigner();
  };

  const getContract = async (address, abi, signer) => {
    const contract = new Contract(address, abi, signer);
    return contract;
  };

  const mint = async (mintAmount, payAmount, ref) => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

    // mint token
    if (mintAmount <= 0) {
      alert("mint amount must be greater than zero !");
    }
    if (!ref) {
      ref = "0x0000000000000000000000000000000000000000";
    }
    console.log(ref);
    const parsedAmount = parseUnits(payAmount.toString(), 18);
    try {
      const trx = await contract.mint(mintAmount, ref, {
        value: parsedAmount,
      });

      const receipt = await trx.wait();
      toast.success("Minted !");
      return receipt;
    } catch (err) {
      toast.error(err.reason);
    }
  };

  const getPrices = async () => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

    const prices = await contract.getPrice(1);
    return {
      ethprice: formatUnits(prices[0].toString(), "ether"),
      dollarPrice: Number(prices[1]),
    };
  };

  const getReward = async () => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

    const reward = await contract.rewardBalances(address);
    return formatUnits(reward.toString(), "ether");
  };

  const claimReward = async () => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

    const tx = await contract.claimReward();
    await tx.wait();
  };

  const referralEarn = async () => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

    const earn = await contract.referralEarnings(address);
    console.log(earn.toString());
    return formatUnits(earn.toString(), "ether");
  };

  const supply = async () => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

    const supply = await contract.totalSupply();
    return supply.toString();
  };

  return { mint, getPrices, getReward, claimReward, referralEarn, supply };
}

export default useContract;
