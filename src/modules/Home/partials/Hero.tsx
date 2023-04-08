import { cx } from '@config/constants';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {

  // states
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  // refs
  const videoRef = useRef(null);

  // play and pause
  const handlePlayPause = () => {
    const video: any = videoRef.current;

    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  // mute and unmute
  const handleMuteUnmute = () => {
    const video: any = videoRef.current;

    if (muted) {
      video.muted = false;
      setMuted(false);
    } else {
      video.muted = true;
      setMuted(true);
    }
  };

  // effects
  useEffect(() => {
    handlePlayPause()
  }, [videoRef])


  return (
    <div id='__hero' className='relative w-full h-[590px] sm:h-[780px] z-[1]' >
      <Image src='/images/home/home-grass-sky.png' layout='fill' className='z-[-10]' />

      <div>
        <div className='relative w-[245px] sm:w-[345px] mx-auto pt-[194px]' >
          <Image src='/images/home/tv-front.png' width={1} height={.6} layout='responsive' className='z-[10]' />

          <div className='absolute bottom-0 left-[12%] z-[-10]' >
            <video ref={videoRef} width='65%' height='100%' autoPlay loop preload='auto'>
              <source src='/images/home/trailer.mp4' type='video/mp4' />
            </video>
          </div>

          <div className='h-[6px] sm:h-[8px] w-[20.1%] absolute bottom-[43px] sm:bottom-[60px] right-[3px] sm:right-[4px] flex z-[10000]' >
             <span className={cx('bg-[green] cursor-pointer w-[20px] h-[8px] block border border-[#3c3c3c]', playing && '__tv-btn-dis')} onClick={() => !playing && handlePlayPause()} />
             <span className={cx('bg-[white] cursor-pointer w-[17px] h-[8px] block border border-[#3c3c3c]', muted && '__tv-btn-dis')} onClick={() => !muted && handleMuteUnmute()} />
             <span className={cx('bg-[white] cursor-pointer w-[17px] h-[8px] block border border-[#3c3c3c]', !muted && '__tv-btn-dis')} onClick={() => muted && handleMuteUnmute()} />
             <span className={cx('bg-[red] cursor-pointer w-[17px] h-[8px] block border border-[#3c3c3c]', !playing && '__tv-btn-dis')} onClick={() => playing && handlePlayPause()} />
          </div>
        </div>

        <div className='mx-auto w-[300px] sm:w-[423px] mt-[-2px]' >
          <Image src='/images/home/legs.png' width={1} height={.5} layout='responsive' className='z-[-10]' />
        </div>

      </div>
    </div>
  )
};

export default Hero;