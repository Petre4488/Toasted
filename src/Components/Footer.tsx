import {
    Box,
    Stack,
    HStack,
    VStack,
    Link,
    Divider,
    Image,
    Text,
    Button,
    IconButton,
    LinkProps
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { FaGithub } from 'react-icons/fa';
  import { BsDiscord } from 'react-icons/bs';
  import React from 'react';
  import logo from '../assets/logo.png'
  import githubLogo from '../assets/githubLogo.png';

  const Footer = () => {
    return (
      <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box maxW="300px">  
            <Link href="https://instagram.com" isExternal>
              <Image w="100px" src={logo} alt="ToastedMinds" />
            </Link>
            <Text mt={2} color="gray.500" fontSize="md">
              ToastedMinds Robotics
            </Text>
          </Box>
          <HStack
            spacing={4}
            justifyContent={{ sm: 'space-between', md: 'normal' }}
          >
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                About Us
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink>Vision</CustomLink>
                <CustomLink>Media</CustomLink>
                <CustomLink>Our Team</CustomLink>
                <CustomLink>Competitions</CustomLink>
              </VStack>
            </VStack>
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Community
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink>Outreach</CustomLink>
                <CustomLink>Social Media</CustomLink>
                <CustomLink>Discord</CustomLink>
                <CustomLink>Plans</CustomLink>
              </VStack>
            </VStack>
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Projects
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink>FTC 2024</CustomLink>
                <CustomLink>Sponsorships</CustomLink>
                <CustomLink>Collaborations</CustomLink>
                <CustomLink>Marketing</CustomLink>
              </VStack>
            </VStack>
          </HStack>
        </Stack>
  
        <Divider my={4} />
  
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
            <Link
              href="https://github.com/MA-Ahmad"
              textDecoration="underline"
              _hover={{ textDecoration: 'underline' }}
              isExternal
            >
              <Link href="https://github.com/MA-Ahmad" isExternal>
              <Image w="2rem" 
                src= {githubLogo}
                alt="ToastedMinds" />
            </Link>
            <Link href="https://github.com/Petre4488" isExternal>
              <Image w="2rem" 
                src= {githubLogo}
                alt="ToastedMinds" />
            </Link> 
            </Link>
          <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
            <Button leftIcon={<FaGithub />} as={Link} href="#" rounded="md" colorScheme="gray">
              Github Discussions
            </Button>
            <Button
              leftIcon={<BsDiscord />}
              as={Link}
              href="#"
              rounded="md"
              color="white"
              bg="purple.500"
              _hover={{ bg: 'purple.600' }}
            >
              Discord community
            </Button>
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  const CustomLink = ({ children, ...props }: LinkProps) => {
    return (
      <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
        {children}
      </Link>
    );
  };
  
  export default Footer;
  



