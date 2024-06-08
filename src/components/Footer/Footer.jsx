

function Footer() {
  return (
    <div className=" bg-footer ">
      <div className="container mx-auto">
        <div className="mx-auto block  w-full items-center justify-between p-4  md:flex">
          <div className="flex justify-center py-2 md:block md:py-0">
            <img
              alt="Logo"
              loading="lazy"
              width="100"
              height="44"
              decoding="async"
              data-nimg="1"
              src="/assets/images/logo/logo.png"
              style={{ color: "transparent" }}
            />
            <div className="hidden md:block">
              ©2024 Zonic. All Rights Reserved
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 py-2 md:py-0">
            <a target="_blank" href="#">
              <img
                alt="discord"
                loading="lazy"
                width="38"
                height="38"
                decoding="async"
                data-nimg="1"
                src="/assets/images/footer/discord.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <a target="_blank" href="#">
              <img
                alt="twitter"
                loading="lazy"
                width="38"
                height="38"
                decoding="async"
                data-nimg="1"
                src="/assets/images/footer/twitter.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <a target="_blank" href="#">
              <img
                alt="telegram"
                loading="lazy"
                width="38"
                height="38"
                decoding="async"
                data-nimg="1"
                src="/assets/images/footer/telegram.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <a target="_blank" href="#">
              <img
                alt="gitbook"
                loading="lazy"
                width="38"
                height="38"
                decoding="async"
                data-nimg="1"
                src="/assets/images/footer/gitbook.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <a target="_blank" href="#">
              <img
                alt="medium"
                loading="lazy"
                width="38"
                height="38"
                decoding="async"
                data-nimg="1"
                src="/assets/images/footer/medium.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <a target="_blank" href="#">
              <img
                alt="youtube"
                loading="lazy"
                width="38"
                height="38"
                decoding="async"
                data-nimg="1"
                src="/assets/images/footer/youtube.svg"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
          <div className="block py-2 text-center md:hidden">
            ©2024 Gelios. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer