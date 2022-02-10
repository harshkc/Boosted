import React, {useEffect, useState} from "react";
import RainASMR from "../Sounds/rain.mp3";
import OceanASMR from "../Sounds/Ocean.mp3";
import waves from "../images/waves.png";
import youtube from "../images/youtube.png";
import rain from "../images/rain.png";
import {motion} from "framer-motion";

const Rain = new Audio(RainASMR);
const Ocean = new Audio(OceanASMR);

const AdditionSettings = ({radio}) => {
  const [rainVolume, setRainVolume] = useState(0);
  const [oceanVolume, setOceanVolume] = useState(0);

  const [transitionValue, setTransitionValue] = useState(0);
  const [TitleLocation, setTitleLocation] = useState(350);

  Ocean.volume = oceanVolume;
  Rain.volume = rainVolume;

  Rain.play();
  Ocean.play();

  const setTransition = () => {
    setTransitionValue(0);
  };

  setTimeout(function () {
    setTransitionValue(-450); //Title Pop in and out
    setTitleLocation(420);
  }, 2000);

  useEffect(() => {
    setTransition();
    setTitleLocation(1000);
  }, [radio]);

  return (
    <div className='infoContainer'>
      <div className='time'></div>
      <div className='songName'>
        <motion.div
          animate={{x: transitionValue}}
          transition={{delay: 1}}
          className='radioStationTitle'
          style={{left: TitleLocation}}
        >
          {radio}
          <div className='socialsContainer'>
            <img src={youtube} className='socialIcons' alt='' />
          </div>
        </motion.div>
      </div>
      <div className='otherSoundsContainer'>
        <div className='allign'>
          <input
            className='soundDial'
            type='range'
            orient='vertical'
            min={0}
            max={1}
            value={rainVolume}
            onChange={(event) => {
              setRainVolume(event.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div className='otherSounds'>
            <img src={rain} className='imgSizing' alt='' />
          </div>
        </div>
        <div className='allign'>
          <input
            className='soundDial'
            type='range'
            orient='vertical'
            min={0}
            max={1}
            value={oceanVolume}
            onChange={(event) => {
              setOceanVolume(event.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div className='otherSounds'>
            <img src={waves} className='imgSizing' alt='' />
          </div>
        </div>
        <div className='allign'>
          <input
            className='soundDial'
            type='range'
            orient='vertical'
            min={0}
            max={1}
            value={oceanVolume}
            onChange={(event) => {
              setOceanVolume(event.target.valueAsNumber);
            }}
            step={0.2}
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionSettings;
