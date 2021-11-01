import * as React from "react"
import "./styles.css"
import PropTypes from "prop-types"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons"
import { NavigationContext } from "../../contexts/NavigationContexts"

export interface HeaderParams {
  siteTitle: string
}

const Header: React.FC<HeaderParams> = ({ siteTitle }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box style={{ position: "relative", zIndex: 2 }} mb="30px">
      <Flex
        bg="#2eca7f"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ sm: "left", md: "space-between" }}>
          <Text textAlign="left" fontWeight="bold" color="white">
            {siteTitle}
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav: React.FC = () => {
  const linkColor = useColorModeValue("white", "white")
  const popoverContentBgColor = useColorModeValue("white", "gray.800")
  const { setCurrentScreen } = React.useContext(NavigationContext)

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, pageIndex) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                onClick={() => {
                  setCurrentScreen(pageIndex)
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link href={href} role={"group"} display={"block"} p={2} rounded={"md"}>
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav: React.FC = () => {
  const { setCurrentScreen } = React.useContext(NavigationContext)

  return (
    <Stack bgColor="#2eca7f" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem, navIndex) => (
        <MobileNavItem
          key={navItem.label}
          {...navItem}
          onClick={() => {
            setCurrentScreen(navIndex)
          }}
        />
      ))}
    </Stack>
  )
}

export interface MobileNavParams extends NavItem {
  onClick: () => void
}

const MobileNavItem: React.FC<MobileNavParams> = ({
  label,
  children,
  onClick,
}) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text onClick={onClick} fontWeight={600} color="white">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Sobre",
  },
  {
    label: "Currículo",
  },
  {
    label: "Serviços",
  },
  {
    label: "Portfolio",
  },
  {
    label: "Contato",
  },
]

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
