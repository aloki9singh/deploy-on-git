import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Container,
  Image,
  Grid,
  Card,
  HStack,
  VStack,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function getData(page = 1) {
  return axios.get(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:all&&page=${page}&&desc=stargazers_count&&limit=12`
  );
}
export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  //   var totalPage = Math.ceil(data.total_count / 10);
  useEffect(() => {
    getData(page)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [page]);
  console.log(page);
  return (
    <>
      
      {/* //img   {e.clone_url} */}

      <Box p={4}>
        <Heading>Total count:- {data.total_count}</Heading>
        <Grid
          templateColumns="repeat(4,1fr)"
          //   templateColumns={{
          //     base: "repeat(4, 1fr)",
          //     // md: "repeat(2, 1fr)",
          //     sm: "repeat(1,1fr)",
          //   }}
          gap={6}
          p={5}
        >
          {data.items.map((e) => (
            // <a>
            <Card
              maxW="sm"
              key={e.id}
              gap={9}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
            >
              <CardBody>
                <Image
                  src={e.owner.avatar_url}
                  w={50}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{e.name}</Heading>
                  <Heading>{e.language}</Heading>
                  <HStack justifyContent={"center"}>
                    <HStack>
                      <Text color="blue" fontSize="2xl">
                        {e.forks}
                      </Text>
                      <Button variant="solid" colorScheme="blue">
                        Forks
                      </Button>
                    </HStack>
                    <HStack>
                      <Text color="blue" fontSize="2xl">
                        {e.stargazers_count}
                      </Text>
                      <Button variant="solid" colorScheme="blue">
                        Stars
                      </Button>
                    </HStack>
                  </HStack>
                </Stack>
              </CardBody>
            </Card>
            // </a>
          ))}
        </Grid>
        <Button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button>{page}</Button>
        <Button
          // disabled={[page == totalPage]}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
        <HStack></HStack>
      </Box>
    </>
  );
}
