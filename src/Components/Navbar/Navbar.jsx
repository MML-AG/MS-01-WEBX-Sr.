import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Image,
  Link,
} from "@nextui-org/react";
import { ChevronDown } from "../../Icons";
//import './Navbar.css'
import useDarkMode from "../../Hooks/useDarkMode";
import { Sun, Moon } from "../../Icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Component() {
  const [darkMode, setDarkMode] = useDarkMode();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Seth M.R. Jaipuria School",
      link: "/about/smrj",
    },
    {
      name: "Meet The Team",
      link: "/about/team",
    },
    {
      name: "Projects",
      link: "/Projects",
    },
    {
      name: "Partners",
      link: "/partners",
    },
    {
      name: "Resources",
      link: "/resources",
    },
  ];

  const { loginWithRedirect, isAuthenticated,user } = useAuth0();
  const { logout } = useAuth0();
 
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      //isBlurred={false}
      //isBordered
      classNames={{
        base: [
          "bg-transparent",
          "pt-4 pb-4",
          "fixed",
          "h-[10vh]",
          "flex",
          "justify-center",
          "items-center",
          "w-full",
        ],
        //wrapper: ['self-center', 'w-full xl:w-[85vw]', 'background-blur', 'backdrop-filter', 'backdrop-blur-lg', 'xl:p-10', 'xl:rounded-3xl', 'bg-white/20', 'xl:border'],
        item: [
          "flex",
          "relative",
          "pt-4 pb-4 pr-3 pl-3",
          "h-8",
          "cursor-pointer",
          "items-center",
          "rounded-3xl",
          "transition-all",
          "data-[active=true]:bg-primary-100",
          "data-[active=true]:text-primary-500",
          "data-[active=true]:font-semibold",
          "font-medium",
          "hover:bg-white",
          "dark:hover:bg-gray-500/40",
          "hover:text-gray",
          "data-[active=true]:shadow data-[links=true]:hover:shadow",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden mr-2"
        />
        <NavbarBrand>
          <Image
            draggable={false}
            loading="eager"
            alt="JMUN Logo"
            src="/logoNT.png"
            width={75}
            classNames={{
              wrapper:
                "opacity-70 hover:opacity-100 transition-all ease hover:scale-[105%] select-none hidden dark:block",
            }}
          />
          <Image
            draggable={false}
            loading="eager"
            alt="JMUN Logo"
            src="/logoNT.png"
            width={75}
            classNames={{
              wrapper:
                "opacity-70 hover:opacity-100 transition-all ease hover:scale-[105%] select-none dark:hidden block",
            }}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        data-links="true"
        justify="center"
        className="gap-4 p-2 rounded-3xl h-12 justify-center bg-gray-400/15 shadow-inner hidden md:flex"
      >
        <NavbarItem
          isActive={location.pathname === "/"}
          onClick={() => navigate("/")}
        >
          Home
        </NavbarItem>
        {/* <Dropdown>
                    <NavbarItem data-links='true' isActive={location.pathname.match('\\/about')}>
                        <DropdownTrigger>
                            <span className='inline-flex content-center flex-wrap'>About&nbsp;&nbsp;<ChevronDown className="self-center" fill="currentColor" size={16} /></span>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Dropdown menu"
                        itemClasses={{
                            base: "gap-4 text-foreground",
                        }}
                        onAction={(key) => navigate(key)}
                    >
                        <DropdownItem
                            key="/about/smrj"
                        >
                            Seth M.R. Jaipuria School
                        </DropdownItem>
                        <DropdownItem
                            key="/about/team"
                        >
                            Meet The Team
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}
        <NavbarItem
          isActive={location.pathname === "/Projects"}
          onClick={() => navigate("/Projects")}
        >
          Projects
        </NavbarItem>
        <NavbarItem
          isActive={location.pathname === "/Events"}
          onClick={() => navigate("/Events")}
          className="hidden lg:flex"
        >
          Events
        </NavbarItem>
        <NavbarItem
          isActive={location.pathname === "/Resources"}
          onClick={() => navigate("/Resources")}
          className="hidden lg:flex"
        >
          Resources
        </NavbarItem>
        <NavbarItem
          isActive={location.pathname === "/volunteer"}
          onClick={() => navigate("/volunteer")}
          className="hidden lg:flex"
        >
          Volunteer
        </NavbarItem>
        <NavbarItem
          isActive={location.pathname === "/impact"}
          onClick={() => navigate("/impact")}
          className="hidden lg:flex"
        >
          Impact
        </NavbarItem>
        <NavbarItem
          isActive={location.pathname === "/contact"}
          onClick={() => navigate("/contact")}
          className="hidden lg:flex"
        >
          Contact
        </NavbarItem>
        <Dropdown>
          <NavbarItem
            data-links="true"
            isActive={location.pathname.match("/about")}
            className="hidden md:max-lg:flex"
          >
            <DropdownTrigger>
              <span className="inline-flex content-center flex-wrap">
                More&nbsp;&nbsp;
                <ChevronDown
                  className="self-center"
                  fill="currentColor"
                  size={16}
                />
              </span>
            </DropdownTrigger>
          </NavbarItem>
          3
          <DropdownMenu
            aria-label="Dropdown menu"
            itemClasses={{
              base: "gap-4 text-foreground",
            }}
            onAction={(key) => navigate(key)}
          >
            <DropdownItem
              key="/partners"
              /*description="ACME scales apps to meet user demand, automagically, based on load."*/
              /*className="text-primary-600"*/
            >
              Partners
            </DropdownItem>
            <DropdownItem
              key="/resources"
              /*description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."*/
              /*className="text-success-600"*/
            >
              Resources
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          auto
          onClick={() => setDarkMode(!darkMode)}
          isIconOnly
          color="transparent"
        >
          {darkMode ? <Sun /> : <Moon />}
        </Button>

        {isAuthenticated ? (
<div>
<Button
            variant="shadow"
            className="font-semibold text-base bg-gradient-to-tr from-green-900 to-green-800 text-white shadow-lg font-semibold mr-[2vw]"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
            Log out
          </Button>

          
            </div>
        
          ) : (
            <Button
          variant="shadow"
          className="font-semibold text-base bg-gradient-to-tr from-green-900 to-green-800 text-white shadow-lg font-semibold mr-[2vw]"
          onClick={() => loginWithRedirect()}
        >
          Log in
        </Button>
          )
        }
        

      </NavbarContent>
      <NavbarMenu className="pt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={location.pathname == item.link ? "primary" : "foreground"}
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Component;
