import React from "react";
import { Flex, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
export const Navbar = () => {
  const Links = [
    { item: "All", link: "/" },
    { item: "HTML", link: "/html" },
    { item: "CSS", link: "/css" },
    { item: "JavaScript", link: "/javascript" },
  ];
  return (
    <div>
      <Flex h="10vh"  justifyContent="space-around" alignItems="center">
        {Links.map((e) => (
          <Button
            /* flex={1} */
           
            key={e.item}
            fontSize={"sm"}
            rounded={"50"}
            bg={"green"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue",
            }}
            _focus={{
              bg: "blue",
            }}
          >
            <Link
              // px={7}
              // py={7}
              _hover={{
                textDecoration: "none",
              }}
              to={e.link}
              color={"white"}
            >
              {e.item}
            </Link>
          </Button>
        ))}
      </Flex>
    </div>
  );
};
