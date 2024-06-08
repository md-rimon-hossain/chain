import { useState } from "react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

function Header() {
  const [navShow, setNavShow] = useState(false);

  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  return (
    <header className="sticky top-0 z-50 mx-auto py-5">
      <nav className=" w-full  rounded-lg border-gray-200 bg-footer p-4 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <div className="flex justify-between gap-10">
            <div className="flex w-full items-center justify-between">
              <div>
                <img
                  alt="Logo"
                  loading="lazy"
                  width="100"
                  height="44"
                  decoding="async"
                  data-nimg="1"
                  className="mr-3"
                  src="/assets/images/logo/logo.png"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div
              className="hidden w-full items-center justify-between gap-5 lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <a className="group text-base  font-medium  text-white" href="#">
                Bridge
              </a>
              <a
                className="group relative flex min-w-[80px] items-center  p-2  text-[#f0bf4f]"
                href="#"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>Mint Key</div>
                  <span className="absolute right-[-15px] top-[-5px] rounded-md bg-[#FFB200] px-1 py-0 text-sm  text-white">
                    Hot
                  </span>
                </div>
              </a>
              <a
                className="group relative flex min-w-[80px] items-center  p-2 "
                href="#"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>Referral</div>
                </div>
              </a>
              <a
                className="group relative flex min-w-[80px] items-center  p-2 "
                href="#"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>Inventory</div>
                </div>
              </a>
              <a
                className="group relative flex min-w-[80px] items-center  p-2 "
                href="#"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>Explorer</div>
                </div>
              </a>
              <a
                className="group relative flex min-w-[80px] items-center  p-2 "
                href="#"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>Airdrop</div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex  w-full items-center  justify-between lg:order-2 lg:w-auto">
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 lg:mt-0">
              {/* <div className="flex justify-center">
                <button
                  type="button"
                  className=" min-w-[160px] lg:min-w-[222px] rounded-lg px-5 py-2   focus:outline-none  btn-linear text-white"
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-xl font-bold">
                      {" "}
                      <a href="#">
                        <div className="flex items-center justify-center gap-2">
                          <div className="flex items-center justify-center gap-2">
                            <img
                              alt="token"
                              loading="lazy"
                              width="20"
                              height="20"
                              decoding="async"
                              data-nimg="1"
                              src="/assets/images/icons/unisat.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                          <p className="text-lg font-bold"> Install UniSat</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </button>
              </div> */}

              <div className="flex items-center justify-center gap-2">
                <div>
                  <button className="btn-linear w-full min-w-[222px] rounded-lg px-5 py-2  text-white  focus:outline-none ">
                    <div className="flex items-center justify-center gap-2">
                      <div>
                        <img
                          alt="icon-wallet"
                          loading="lazy"
                          width="19"
                          height="15"
                          decoding="async"
                          data-nimg="1"
                          src="/assets/images/icons/wallet.svg"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div
                        className="text-lg font-bold"
                        onClick={
                          isConnected
                            ? () => open("Account")
                            : () => open("Connect")
                        }
                      >
                        {isConnected
                          ? address.substring(0, 4) +
                            "***" +
                            address.substring(
                              address.length - 4,
                              address.length
                            )
                          : "Connect EVM"}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setNavShow(!navShow)}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="ml-1 flex items-center rounded-lg p-2 text-sm text-[#FFB200] lg:hidden "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                {!navShow ? (
                  <>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      className="hidden h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      fill="#FD9623"
                      viewBox="0 0 460.775 460.775"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      width="20px"
                      version="1.1"
                      id="Capa_1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlSpace="preserve"
                      stroke="#FD9623"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{" "}
                      </g>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>

          <div
            className={`mt-4 ${
              navShow ? "block" : "hidden"
            }  w-full items-center justify-between p-4 px-4 md:order-1 md:flex md:w-auto lg:hidden lg:px-6`}
          >
            <a
              className="group relative flex cursor-pointer items-center  p-2  text-[#f0bf4f]"
              href="#"
            >
              <div className="relative flex items-center justify-between gap-3">
                <div>Mint Key</div>
                <span className="absolute right-[-35px] top-[-5px] rounded-md bg-[#FFB200] px-1 py-0 text-sm  text-white">
                  Hot
                </span>
              </div>
            </a>
            <a
              className="group relative flex cursor-pointer items-center  p-2 "
              href="#"
            >
              <div className="relative flex items-center justify-between gap-3">
                <div>Referral</div>
              </div>
            </a>
            <a
              className="group relative flex cursor-pointer items-center  p-2 "
              href="#"
            >
              <div className="relative flex items-center justify-between gap-3">
                <div>Inventory</div>
              </div>
            </a>
            <a
              className="group relative flex cursor-pointer items-center  p-2 "
              href="#"
            >
              <div className="relative flex items-center justify-between gap-3">
                <div>Explorer</div>
              </div>
            </a>
            <a
              className="group relative flex cursor-pointer items-center  p-2 "
              href="#"
            >
              <div className="relative flex items-center justify-between gap-3">
                <div>Airdrop</div>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
