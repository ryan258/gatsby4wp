import * as React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { Box, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'

const HomePage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          title
          excerpt
          uri
        }
      }
    }
  `)

  // console.log(data) // see our array of node objects

  // destructure our posts from data
  const { allWpPost } = data

  return (
    <Container maxW="x1" centerContent>
      <Heading as={`h1`} m={5}>
        #100daysofgatsby
      </Heading>
      <Stack spacing={8}>
        {allWpPost.nodes.map(({ id, title, excerpt, uri }) => (
          <Box key={id} p={5} shadow="md" borderWidth="1px">
            <Heading as={`h2`}>{title}</Heading>
            <Text mt={4}>
              <span dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Text>
            <Link as={GatsbyLink} to={uri}>
              Read More
            </Link>
          </Box>
        ))}
      </Stack>
    </Container>
  )
}

export default HomePage
