import React from "react";
import YoutubeIcon from "../../../../assets/Youtube.svg"

const Footer = () => {
  const footerLinks1 = [
    "Über uns",
    "Kontaktieren Sie uns",
    "Mein Konto",
    "Kaufen",
    "Mieten",
  ];
  const footerLinks2 = [
    "FAQ",
    "Service rund um die Immobilie",
    "Praktische Anleitungen",
    "Wissen rund um die Immobilie",
    "Beratungsdienste",
  ];

  return (
    <footer className="w-full mt-8 bg-jungle-green rounded-lg p-5">
      <div className="md:px-[120px] px-[20px] md:pt-[120px] pt-[60px] pb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-[#ABC0B6] pb-[72px]">
          <div className="max-w-[360px] w-full flex flex-col gap-6">
            <p className="text-base font-normal text-[#FAFAFA]">
            Fylpi Immo-online GmbH Forchheimergasse 3/13, 1230 Wien, Österreich           
             </p>
            <p className="text-base font-normal text-[#FAFAFA]">office@fylpi.at | www.fylpi.at</p>
            <div className="flex gap-[6px] items-center">
              <img src={YoutubeIcon} alt="youTube" />
              <p className="text-[#FAFAFA] text-base font-normal">YouTube</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-10">
          <div className="flex flex-col items-start gap-[15px] text-base font-normal text-[#FAFAFA] min-w-[260px] w-full">
            {footerLinks1.map((link, index) => (
              <div key={index} className="text-white">
                {link}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-[15px] text-base font-normal text-[#FAFAFA] min-w-[260px] w-full">
            {footerLinks2.map((link, index) => (
              <div key={index} className="text-white">
                {link}
              </div>
            ))}
          </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <div className="text-[#ABC0B6] font-normal leading-[150%] text-base">
            © 2024 Fylpi. Alle Rechte vorbehalten.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="text-[#ABC0B6] font-normal leading-[150%] text-base">Impressum</div>
            <div className="text-[#ABC0B6] font-normal leading-[150%] text-base">Nutzungsbedingungen</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
