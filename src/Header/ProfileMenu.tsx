import { Menu, Button, Text, Avatar, Switch, rem } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconPhoto, IconSearch, IconArrowsLeftRight, IconTrash, IconUserCircle, IconFileText, IconMoon, IconSun, IconMoonStars, IconLogout2 } from '@tabler/icons-react';
import avatar from "../assets/avatar.png";
import { useState } from 'react';

const ProfileMenu = () => {
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="flex items-center cursor-pointer gap-2">
                <div>Thinuka</div>
                <Avatar src={avatar} alt="It's me" />
            </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <Menu.Item leftSection={<IconUserCircle size={14} />}>
          Profile
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Switch checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)} size='md' color='dark.4' onLabel ={ <IconSun 
              style={{ width: rem(16), height: rem(16)}}
              stroke={2.5}
              color='yellow'
            />} offLabel ={<IconMoonStars
                style={{ width: rem(16), height: rem(16)}}
                stroke={2.5}
                color='cyan'
                />} />
            }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;