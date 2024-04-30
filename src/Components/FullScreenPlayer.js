import { useState } from "react"
import { useSelector } from "react-redux"
import { Icon } from "Icons"
import { secondsToTime } from 'utils'
import CustomRange from "Components/CustomRange";

function FullScreenPlayer({ toggle, state, controls, volumeIcon }) {

    const { current } = useSelector(state => state.player)


    return (
        <div className="h-full relative">
            <div className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30" style={{ backgroundImage: `url(${current.image})` }}></div>


            <div className="absolute left-8 bottom-[9.6rem] flex items-center gap-x-5">
                <img src={current.image} className="w-24 h-24 object-cover" />
                <div>
                    <h3 className="text-3xl font-semibold">{current.title}</h3>
                    <p className="text-base font-semibold opacity-50">{current.artist}</p>
                </div>
            </div>

            <div className="flex flex-col-reverse items-center w-full px-8 absolute bottom-0">


                


                <div>&nbsp;</div>
                <div className="flex items-center gap-x-6">
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="shuffle" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="playerPrev" />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']} className="w-16 h-16 flex bg-white rounded-full items-center justify-center hover:scale-[1.06] text-black">
                        <Icon size={24} name={state?.playing ? 'pause' : 'play'} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="playerNext" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="repeat" />
                    </button>
                </div>
                <div className="flex items-center absolute bottom-[2.4rem] right-7 gap-x-3">
                <button onClick={controls[state.muted ? 'unmute' : 'mute']} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name={volumeIcon} />
                </button>
                <div className="w-[5.813rem] max-w-full">

                    <CustomRange
                        step={0.01}
                        min={0}
                        max={1}
                        value={state.muted ? 0 : state?.volume}
                        onChange={value => {
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />
                </div>
                <button 
                onClick={toggle}
                className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={24} name="fullscreen" />
                </button>
                </div>

            <div className="w-full mb-1.5 flex items-center gap-x-2">
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />

                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FullScreenPlayer