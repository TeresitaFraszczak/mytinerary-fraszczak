import { useSelector } from "react-redux"
import user_actions from "../store/actions/users"
const { signin,signout,user } = user_actions




export default function Logged() {

    let mail = useSelector((store) => store.users.user?.mail);
    let name = useSelector((store) => store.users.user?.name);
    let photo = useSelector((store) => store.users.user?.photo);
    return (
        <div>
            {mail && ( // Verifica si el usuario está autenticado

                <div className="flex flex-raw items-center justify-center mb-1">
                    <img className="h-[120px] rounded-xl" src={photo} alt="photo user" />
                    <p className="p-5 font-bold text-orange animate-[pulse_6s_ease-in-out_infinite] text-[24px]">Welcome {name}!</p>
                </div>
            )}
        </div>
    )
}


