import { Avatar, Indicator } from "@mantine/core";
import avatar from "../assets/avatar.png";
import { IconAnchor, IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import NavLisks from "./NavLisks";

const Header = () => {
    return <div className="w-full text-white bg-mine-shaft-950 px-6 h-28 flex justify-between items-center">

        <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAnchor className="h-8 w-8" stroke={2.5} />
            <div className="text-2xl font-semibold">FindMyJob</div>
        </div>
        {NavLisks()}
        <div className="flex gap-3 items-center">

            <div className="flex items-center gap-2">
                <div>Thinuka</div>
                <Avatar src={avatar} alt="It's me" />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5} />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="bright-sun.4" offset={6} size={9} processing >
                    <IconBell stroke={1.5} />
                </Indicator>
            </div>

        </div>
    </div>

}

export default Header;