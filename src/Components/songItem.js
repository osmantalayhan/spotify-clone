import { Link } from "react-router-dom";
import { Icon } from "Icons";
import { useUpdate } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from 'stores/player'

function SongItem({ item }) {

    const dispatch = useDispatch()
    const { current, playing, controls } = useSelector(state => state.player)
    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full'


            case 'podcast':
                return 'rounded-xl'


            default:
                return 'rounded'

        }
    }

    const updateCurrent = () => {
        // if (current.id === item.id) {
        //     if (playing) {
        //         controls.pause()
        //     } else {
        //         controls.play()
        //     }
        // } else {
            dispatch(setCurrent(item))
        //}
    }

    const isCurrentItem = (current?.id === item.id && playing)

    return (
        <Link
            key={item.id}
            to="/"
            className="bg-footer p-4 rounded hover:bg-active group"
        >
            <div className="pt-[100%] relative mb-4">
                <img src={item.image} className={`absolute rounded inset-0 w-full h-full object-cover ${imageStyle(item)}`} />
                <button
                    onClick={updateCurrent}
                    className={`w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center group-hover:flex group-focus:flex ${!isCurrentItem ? 'hidden' : 'flex'}`}>
                    <Icon name={isCurrentItem ? 'pause2' : 'play'} size={20} />
                </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-s mt-1 font-semibold">
                {item.description}
            </p>
        </Link>
    )

}
export default SongItem