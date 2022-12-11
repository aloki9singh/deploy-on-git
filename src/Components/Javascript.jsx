import { useState } from "react";
import {
  Box,

  Button,

  Stack,
  Heading,
  Container,
  Image,

  Card,
  HStack,
  VStack,
  CardBody,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

import { useEffect } from "react";


function getData(page = 1) {
  return axios.get(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&&page=${page}&&desc=stargazers_count&&limit=12`
  );
}
export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading,setLoading]=useState(false)
  //   var totalPage = Math.ceil(data.total_count / 10);
  useEffect(() => {
    setLoading(true);
    getData(page)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);
  console.log(page);
  return (
    <>
      
      {/* //img   {e.clone_url} */}
      {loading ||data==""  ? (
        <Container>Loading...</Container>
      ) : (
      <Box p={4}>
        <Heading>Total count:- {data.total_count}</Heading>
        <SimpleGrid
        //   templateColumns="repeat(4,1fr)"
           columns={4}
        spacing={10}
          p={5}
        >
          {data.items.map((e) => (
             <a style={{textDecoration:"none"}} href={e.html_url}>
            <Card
              maxW=""
              key={e.id}
              gap={7}
            
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
            >
              <CardBody  bg={"teal"}>
                <Image
                  src={e.owner.avatar_url}
                  w={"100%"}
                  alt="Green double couch with wooden legs"
                  borderRadius="sm"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm">{e.name}</Heading>
                  <Heading size="sm">{e.language}</Heading>
                  <VStack justifyContent={"center"}>
                    <HStack>
                      <Text color="blue" fontSize="small">
                        {e.forks}
                      </Text>
                      <Button variant="solid" rounded={"50"} bg={"black"} color="white">
                        Forks
                      </Button>
                    </HStack>
                    <HStack>
                      <Text color="blue" fontSize="small">
                        {e.stargazers_count}
                      </Text>
                      <Button variant="solid" rounded={"50"} bg={"black"} color="white">
                        Stars
                      </Button>
                    </HStack>
                  </VStack>
                </Stack>
              </CardBody>
            </Card>
           </a>
          ))}
        </SimpleGrid>
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
      )}
    </>
  );
}
