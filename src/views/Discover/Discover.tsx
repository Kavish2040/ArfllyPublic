import { FollowingComponent } from '@/views/Discover/components/Following.component';
import { ForYouComponent } from '@/views/Discover/components/ForYou.component';
import { YourLikesComponent } from '@/views/Discover/components/YourLikes.component';
import { Container, Tabs, useMantineTheme } from '@mantine/core';
import { IconHeart, IconUser, IconUsers } from '@tabler/icons-react';

const Discover = () => {
    const theme = useMantineTheme();

    return (
        <Container px={0} fluid>
            <Tabs defaultValue='forYou'>
                <Tabs.List>
                    <Tabs.Tab value='forYou' icon={<IconUser size={15} />} fz={14} fw={400} ff='Roboto'>
                        For you
                    </Tabs.Tab>
                    <Tabs.Tab value='following' icon={<IconUsers size={15} />} fz={14} fw={400} ff='Roboto'>
                        Following
                    </Tabs.Tab>
                    <Tabs.Tab value='yourLikes' icon={<IconHeart size={15} />} fz={14} fw={400} ff='Roboto'>
                        Your likes
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value='forYou' bg={theme.other.colors.footerFont}>
                    <ForYouComponent />
                </Tabs.Panel>
                <Tabs.Panel value='following' bg={theme.other.colors.footerFont}>
                    <FollowingComponent />
                </Tabs.Panel>
                <Tabs.Panel value='yourLikes' bg={theme.other.colors.footerFont}>
                    <YourLikesComponent />
                </Tabs.Panel>
            </Tabs>
        </Container>
    );
};

export { Discover };
