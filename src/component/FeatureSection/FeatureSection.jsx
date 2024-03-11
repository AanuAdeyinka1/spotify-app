// import style from "./Feature.module.css"
import AdFreeIcon from "../Asset/Images//ad-free-music.svg";
import OfflinePlayback from "../Asset/Images//offline-playback.svg";
import PlayEverywhere from "../Asset/Images/play-everywhere.svg";
import PayYourWay from "../Asset/Images/pay-your-way.svg";

export const Features = () => {
  const feature = [
    {
      title: "Ad-free music listening",
      image: AdFreeIcon,
      description: "Enjoy uninterrupted music.",
    },
    {
      title: "Offline playback",
      image: OfflinePlayback,
      description: "Save your data by listening offline.",
    },
    {
      title: "Play everywhere",
      image: PlayEverywhere,
      description: "Listen on your speakers, TV, and other favorite devices.",
    },
    {
      title: "Pay your way",
      image: PayYourWay,
      description: "Prepay with Paytm, UPI, and more.",
    },
  ];

  return (
    <section>
      <h3>The power of Premium</h3>
      <div>
        {Features.map((feature) => (
          <div>
            <img src={feature.image} />
            <h5>{feature.title}</h5>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
