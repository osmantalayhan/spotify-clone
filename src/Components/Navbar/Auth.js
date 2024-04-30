import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'

function Auth(){

    const user = {
        name: 'Osman Talayhan',
        avatar: 'https://www.logodesignlove.com/wp-content/uploads/2022/02/arnaldo-c-castro-logo.jpeg'
    }

    return(
        <Menu as="nav" className={"relative"}>
            {({ open }) => (
                <>
                <Menu.Button className={`flex items-center h-8 pr-2 rounded-3xl ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
            <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-2"} />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && 'rotate-180'}>
                <Icon size={16} name="downDir" />
            </span>
        </Menu.Button>
        <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`h-10 flex justify-between items-center px-2 text-sm rounded font-semibold ${active && 'bg-white bg-opacity-10'}`}
                href="#"
              >
                Hesap
                <Icon name="external" size={16} />
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`h-10 flex items-center px-2 text-sm rounded font-semibold ${active && 'bg-white bg-opacity-10'}`}
                href="#"
              >
                Profil
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`h-10 flex justify-between items-center px-2 text-sm rounded font-semibold ${active && 'bg-white bg-opacity-10'}`}
                href="#"
              >
                Destek
                <Icon name="external" size={16} />
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`h-10 flex items-center px-2 text-sm rounded font-semibold ${active && 'bg-white bg-opacity-10'}`}
                href="#"
              >
                Oturumu kapat
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
                </>
            )}
      </Menu>
    )
}

export default Auth